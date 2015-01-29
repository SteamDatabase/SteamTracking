#!/usr/bin/env bash

set -e
set -o pipefail
shopt -s failglob
set -u 

# Allow us to debug what's happening in the script if necessary
if [ "${STEAM_DEBUG-}" ]; then
	set -x
fi
export TEXTDOMAIN=steam
export TEXTDOMAINDIR=/usr/share/locale

ARCHIVE_EXT=tar.xz

# figure out the absolute path to the script being run a bit
# non-obvious, the ${0%/*} pulls the path out of $0, cd's into the
# specified directory, then uses $PWD to figure out where that
# directory lives - and all this in a subshell, so we don't affect
# $PWD

STEAMROOT="$(cd $(dirname $0) && echo $PWD)"
if [ -z ${STEAMROOT} ]; then
	echo $"Couldn't find Steam root directory from "$0", aborting!"
	exit 1
fi
STEAMDATA="$STEAMROOT"
if [ -z ${STEAMEXE-} ]; then
  STEAMEXE=`basename "$0" .sh`
fi
# Backward compatibility for server operators
if [ "$STEAMEXE" = "steamcmd" ]; then
	echo "***************************************************"
	echo "The recommended way to run steamcmd is: steamcmd.sh $*"
	echo "***************************************************"
	exec "$STEAMROOT/steamcmd.sh" "$@"
	echo "Couldn't find steamcmd.sh" >&1
	exit 255
fi
cd "$STEAMROOT"

# The minimum version of the /usr/bin/steam script that we require
MINIMUM_STEAMSCRIPT_VERSION=100020

# Save the system paths in case we need to restore them
export SYSTEM_PATH="$PATH"
export SYSTEM_LD_LIBRARY_PATH="${LD_LIBRARY_PATH-}"

function show_message()
{
	style=$1
	shift

	case "$style" in
	--error)
		title=$"Error"
		;;
	--warning)
		title=$"Warning"
		;;
	*)
		title=$"Note"
		;;
	esac

	# Show the message on standard output, for logging
	echo -e "$title: $*"

	if [ -z "$STEAMOS" ]; then
		if ! zenity "$style" --text="$*" 2>/dev/null; then
			# Save the prompt in a temporary file because it can have newlines in it
			tmpfile="$(mktemp || echo "/tmp/steam_message.txt")"
			echo -e "$*" >"$tmpfile"
			xterm -bg "#383635" -fg "#d1cfcd" -T "$title" -e "cat $tmpfile; echo -n 'Press enter to continue: '; read input" 2>/dev/null || \
				(echo "$title:"; cat "$tmpfile"; echo -n 'Press enter to continue: '; read input)
			rm -f "$tmpfile"
		fi
	else
		# Temporary until we have a zenity equivalent for SteamOS
		echo -e "[$(date +'%Y-%m-%dT%H:%M:%S%z')]: $title: $*" >> /tmp/steam_startup_messages_$USER.txt
	fi
}

function show_license_agreement()
{
	LICENSE="$STEAMROOT/steam_install_agreement.txt"
	if [ ! -f "$STEAMCONFIG/steam_install_agreement.txt" ]; then
		if [ ! -f "$LICENSE" ]; then
			show_message --error $"Couldn't find Steam install license agreement, aborting!"
			exit 1
		fi

		# See if they have been grandfathered in through the beta
		SSAVersion=$(find -L "$STEAMCONFIG/`detect_package`" -name sharedconfig.vdf -exec fgrep SSAVersion {} \;)

		if [ "$SSAVersion" != "" ]; then
			answer=accepted
		else
			answer=declined
			output=$(zenity --width 650 --height 500 --text-info --title=$"Steam Install Agreement" --filename="$LICENSE" --checkbox=$"I have read and accept these terms." 2>&1)
			STATUS=$?
			if echo $output | grep "status 1:" >/dev/null; then
				# Zenity couldn't launch a window
				STATUS=-1
			fi
			case $STATUS in
			0)	# The agreement was accepted
				answer=accepted
				;;
			1)	# The agreement was declined
				;;
			*)	# zenity wasn't available, try a fallback
				tmpfile="$(mktemp || echo "/tmp/steam_message.txt")"
				command="more \"$LICENSE\" || cat \"$LICENSE\"; echo -n $'Do you accept the terms of this agreement? [y/N]: '; read input; if [ x\$input = xy -o x\$input = xY ]; then echo accepted >\"$tmpfile\"; fi"
				xterm -bg "#383635" -fg "#d1cfcd" -T $"Steam Install Agreement" -e "$command" || \
					/bin/bash -c "$command"
				if [ -f "$tmpfile" ]; then
					read answer <"$tmpfile"
					rm "$tmpfile"
				fi
				;;
			esac
			if [ "$answer" != "accepted" ]; then
				exit 0
			fi
		fi

		cp "$LICENSE" "$STEAMCONFIG"/
	fi
}

function warn_outofdate()
{
	show_message --warning $"Your steam package is out of date. Please get an updated version from your package provider or directly from http://repo.steampowered.com/steam for supported distributions."
}

function distro_description()
{
	echo "$(detect_distro) $(detect_release) $(detect_arch)"
}

function detect_distro()
{
	if [ -f /etc/lsb-release ]; then
		(. /etc/lsb-release; echo $DISTRIB_ID | tr '[A-Z]' '[a-z]')
	elif [ -f /etc/os-release ]; then
		(. /etc/os-release; echo $ID | tr '[A-Z]' '[a-z]')
	elif [ -f /etc/debian_version ]; then
		echo "debian"
	else
		# Generic fallback
		uname -s
	fi
}

function detect_release()
{
	if [ -f /etc/lsb-release ]; then
		(. /etc/lsb-release; echo $DISTRIB_RELEASE)
	elif [ -f /etc/os-release ]; then
		(. /etc/os-release; echo $VERSION_ID)
	elif [ -f /etc/debian_version ]; then
		cat /etc/debian_version
	else
		# Generic fallback
		uname -r
	fi
}

function detect_arch()
{
	case $(uname -m) in
	*64)
		echo "64-bit"
		;;
	*)
		echo "32-bit"
		;;
	esac
}

function detect_platform()
{
	# Default to unknown/unsupported distribution, pick something and hope for the best
	platform=ubuntu12_32

	# Check for specific supported distribution releases
	case "$(detect_distro)-$(detect_release)" in
	ubuntu-12.*)
		platform=ubuntu12_32
		;;
	esac
	echo $platform
}

function detect_universe()
{
	if test -f "$STEAMROOT/Steam.cfg" && \
	     egrep '^[Uu]niverse *= *[Bb]eta$' "$STEAMROOT/Steam.cfg" >/dev/null; then
		STEAMUNIVERSE="Beta"
	elif test -f "$STEAMROOT/steam.cfg" && \
	     egrep '^[Uu]niverse *= *[Bb]eta$' "$STEAMROOT/steam.cfg" >/dev/null; then
		STEAMUNIVERSE="Beta"
	else
		STEAMUNIVERSE="Public"
	fi
	echo $STEAMUNIVERSE
}

function detect_package()
{
	case `detect_universe` in
	"Beta")
		STEAMPACKAGE="steambeta"
		;;
	*)
		STEAMPACKAGE="steam"
		;;
	esac
	echo "$STEAMPACKAGE"
}

function detect_scriptversion()
{
	SCRIPT_VERSION=$(fgrep "$2=" "$1")
	if [[ "$SCRIPT_VERSION" ]]; then
		expr "$SCRIPT_VERSION" : ".*=\(.*\)"
	else
		echo "0"
	fi
}

# Check a currently installed script against a new script and see if the
# installed one needs to be updated.
function check_scriptversion()
{
	SCRIPT=$1
	VERSION_TOKEN=$2
	MINIMUM_VERSION=$3

	VERSION="$(detect_scriptversion "$SCRIPT" $VERSION_TOKEN)"
	if [[ "$VERSION" -lt "$MINIMUM_VERSION" ]]; then
		return 1
	fi
	return 0
}

function detect_steamdatalink()
{
	# Don't create a link in development
	if [ -f "$STEAMROOT/steam_dev.cfg" ]; then
		STEAMDATALINK=""
	else
		STEAMDATALINK="$STEAMCONFIG/`detect_package`"
	fi
	echo $STEAMDATALINK
}

function detect_bootstrap()
{
	if [ -f "$STEAMROOT/bootstrap.tar.xz" ]; then
		echo "$STEAMROOT/bootstrap.tar.xz"
	else
		# This is the default bootstrap install location for the Ubuntu package.
		# We use this as a fallback for people who have an existing installation and have never run the new install_bootstrap code in bin_steam.sh
		echo "/usr/lib/`detect_package`/bootstraplinux_`detect_platform`.tar.xz"
	fi
}

function install_bootstrap()
{
	# Don't install bootstrap in development
	if [ -f "$STEAMROOT/steam_dev.cfg" ]; then
		return 1
	fi

	STATUS=0

	# Save the umask and set strong permissions
	omask=`umask`
	umask 0077

	STEAMBOOTSTRAPARCHIVE=`detect_bootstrap`
	if [ -f "$STEAMBOOTSTRAPARCHIVE" ]; then
		echo "Installing bootstrap $STEAMBOOTSTRAPARCHIVE"
		tar xf "$STEAMBOOTSTRAPARCHIVE"
		STATUS=$?
	else
		show_message --error $"Couldn't start bootstrap and couldn't reinstall from $STEAMBOOTSTRAPARCHIVE.  Please contact technical support."
		STATUS=1
	fi

	# Restore the umask
	umask $omask

	return $STATUS
}

function runtime_supported()
{
	case "$(detect_distro)-$(detect_release)" in
	# Add additional supported distributions here
	ubuntu-*)
		return 0
		;;
	*)	# Let's try this out for now and see if it works...
		return 0
		;;
	esac

	# This distro doesn't support the Steam Linux Runtime (yet!)
	return 1
}

function download_archive()
{
	curl -#Of "$2" 2>&1 | tr '\r' '\n' | sed 's,[^0-9]*\([0-9]*\).*,\1,' | zenity --progress --auto-close --no-cancel --width 400 --text="$1\n$2"
	return ${PIPESTATUS[0]}
}

function extract_archive()
{
	case "$2" in
	*.gz)
		BF=$(($(gzip --list "$2" | sed -n -e "s/.*[[:space:]]\+[0-9]\+[[:space:]]\+\([0-9]\+\)[[:space:]].*$/\1/p") / $((512 * 100)) + 1))
		;;
	*.xz)
		BF=$(($(xz --robot --list "$2" | grep totals | awk '{print $5}') / $((512 * 100)) + 1))
		;;
	*)
		BF=""
		;;
	esac
	if [ "${BF}" ]; then
		tar --blocking-factor=${BF} --checkpoint=1 --checkpoint-action='exec=echo $TAR_CHECKPOINT' -xf "$2" -C "$3" | zenity --progress --auto-close --no-cancel --width 400 --text="$1"
		return ${PIPESTATUS[0]}
	else
		echo "$1"
		tar -xf "$2" -C "$3"
		return $?
	fi
}

function has_runtime_archive()
{
	# Make sure we have files to unpack
	for file in "$STEAM_RUNTIME.$ARCHIVE_EXT".part*; do
		if [ ! -f "$file" ]; then
			return 1
		fi
	done

	if [ ! -f "$STEAM_RUNTIME.checksum" ]; then
		return 1
	fi

	return 0
}

function unpack_runtime()
{
	if ! has_runtime_archive; then
		if [ -d "$STEAM_RUNTIME" ]; then
			# The runtime is unpacked, let's use it!
			return 0
		fi
		return 1
	fi

	# Make sure we haven't already unpacked them
	if [ -f "$STEAM_RUNTIME/checksum" ] && cmp "$STEAM_RUNTIME.checksum" "$STEAM_RUNTIME/checksum" >/dev/null; then
		return 0
	fi

	# Unpack the runtime
	EXTRACT_TMP="$STEAM_RUNTIME.tmp"
	rm -rf "$EXTRACT_TMP"
	mkdir "$EXTRACT_TMP"
	cat "$STEAM_RUNTIME.$ARCHIVE_EXT".part* >"$STEAM_RUNTIME.$ARCHIVE_EXT"
	EXISTING_CHECKSUM="$(cd "$(dirname "$STEAM_RUNTIME")"; md5sum "$(basename "$STEAM_RUNTIME.$ARCHIVE_EXT")")"
	EXPECTED_CHECKSUM="$(cat "$STEAM_RUNTIME.checksum")"
	if [ "$EXISTING_CHECKSUM" != "$EXPECTED_CHECKSUM" ]; then
		echo $"Runtime checksum: $EXISTING_CHECKSUM, expected $EXPECTED_CHECKSUM" >&2
		return 2
	fi
	if ! extract_archive $"Unpacking Steam Runtime" "$STEAM_RUNTIME.$ARCHIVE_EXT" "$EXTRACT_TMP"; then
		return 3
	fi

	# Move it into place!
	if [ -d "$STEAM_RUNTIME" ]; then
		rm -rf "$STEAM_RUNTIME.old"
		if ! mv "$STEAM_RUNTIME" "$STEAM_RUNTIME.old"; then
			return 4
		fi
	fi
	if ! mv "$EXTRACT_TMP"/* "$EXTRACT_TMP"/..; then
		return 5
	fi
	rm -rf "$EXTRACT_TMP"
	if ! cp "$STEAM_RUNTIME.checksum" "$STEAM_RUNTIME/checksum"; then
		return 6
	fi
	return 0
}

function get_missing_libraries()
{
	# Make sure to turn off injected dependencies (LD_PRELOAD) when running ldd
	if ! LD_PRELOAD= ldd "$1" >>/dev/null 2>&1; then
		# We couldn't run the link loader for this architecture
		echo "libc.so.6"
	else
		LD_PRELOAD= ldd "$1" | grep "=>" | grep -v linux-gate | grep -v / | awk '{print $1}' || true
	fi
}

function check_shared_libraries()
{
	if [ -f "$STEAMROOT/$PLATFORM/steamui.so" ]; then
		MISSING_LIBRARIES=$(get_missing_libraries "$STEAMROOT/$PLATFORM/steamui.so")
	else
		MISSING_LIBRARIES=$(get_missing_libraries "$STEAMROOT/$PLATFORM/$STEAMEXE")
	fi
	if [ "$MISSING_LIBRARIES" != "" ]; then
		show_message --error $"You are missing the following 32-bit libraries, and Steam may not run:\n$MISSING_LIBRARIES"
	fi
}

function ignore_signal()
{
	:
}

function reset_steam()
{
	# Ensure STEAMROOT is defined to something reasonable so we don't wipe the wrong thing
	if [ -z "${STEAMROOT}" ]; then
		show_message --error $"Couldn't find Steam directory, it's not safe to reset Steam. Please contact technical support."
		return 1
	fi

	# Don't wipe development files
	if [ -f "$STEAMROOT/steam_dev.cfg" ]; then
		echo "Can't reset development directory"
		return 1
	fi

	if [ -z "$INITIAL_LAUNCH" ]; then
		show_message --error $"Please exit Steam before resetting it."
		return 1
	fi

	if [ ! -f "$(detect_bootstrap)" ]; then
		show_message --error $"Couldn't find bootstrap, it's not safe to reset Steam. Please contact technical support."
		return 1
	fi

	if [ "$STEAMROOT" = "" ]; then
		show_message --error $"Couldn't find Steam, it's not safe to reset Steam. Please contact technical support."
		return 1
	fi

	STEAM_SAVE="$STEAMROOT/.save"

	# Don't let the user interrupt us, or they may corrupt the install
	trap ignore_signal INT

	# /usr/bin/steam uses the existence of the data link to know whether to bootstrap. Remove it before
	# continuing, so that if the machine is turned off while this is occuring, a new bootstrap will be
	# put in place next time steam is run.
	rm -f "$STEAMDATALINK"

	# Back up games and critical files
	# Backup package dir so that we're not hitting CDNs if there is no manifest change
	mkdir -p "$STEAM_SAVE"
	for i in bootstrap.tar.xz ssfn* SteamApps userdata package; do
		if [ -e "$i" ]; then
			mv -f "$i" "$STEAM_SAVE/"
		fi
	done
	for i in "$STEAMCONFIG/registry.vdf"; do
		mv -f "$i" "$i.bak"
	done

	# Check before removing
	if [ "$STEAMROOT" != "" ]; then
		rm -rf "$STEAMROOT/"*
	fi

	# Move things back into place
	mv -f "$STEAM_SAVE/"* "$STEAMROOT/"
	rmdir "$STEAM_SAVE"

	# Reinstall the bootstrap and we're done.
	if install_bootstrap; then
		STATUS=0

		# Restore the steam data link
		ln -s "$STEAMDATA" "$STEAMDATALINK"
		echo $"Reset complete!"
	else
		STATUS=1
		echo $"Reset failed!"
	fi

	# Okay, at this point we can recover, so re-enable interrupts
	trap '' INT

	return $STATUS
}

function steamos_arg()
{
    for option in "$@"
    do
		if [ "$option" = "-steamos" ]; then
			return 0; # 0 == true in bash
        fi
    done

	return 1; # 1 == false in bash speak
}

 
#determine platform
UNAME=`uname`
if [ "$UNAME" != "Linux" ]; then
   show_message --error "Unsupported Operating System"
   exit 1
fi

# identify Linux distribution and pick an optimal bin dir
PLATFORM=`detect_platform`
PLATFORM32=`echo $PLATFORM | grep 32 || true`
PLATFORM64=`echo $PLATFORM | grep 64 || true`
if [ -z "$PLATFORM32" ]; then
	PLATFORM32=`echo $PLATFORM | sed 's/64/32/'`
fi
if [ -z "$PLATFORM64" ]; then
	PLATFORM64=`echo $PLATFORM | sed 's/32/64/'`
fi
STEAMEXEPATH=$PLATFORM/$STEAMEXE

# common variables for later

# We use ~/.steam for bootstrap symlinks so that we can easily
# tell partners where to go to find the Steam libraries and data.
# This is constant so that legacy applications can always find us in the future.
STEAMCONFIG=~/.steam
PIDFILE="$STEAMCONFIG/steam.pid" # pid of running steam for this user
STEAMBIN32LINK="$STEAMCONFIG/bin32"
STEAMBIN64LINK="$STEAMCONFIG/bin64"
STEAMSDK32LINK="$STEAMCONFIG/sdk32" # 32-bit steam api library
STEAMSDK64LINK="$STEAMCONFIG/sdk64" # 64-bit steam api library
STEAMROOTLINK="$STEAMCONFIG/root" # points at the Steam install path for the currently running Steam
STEAMDATALINK="`detect_steamdatalink`" # points at the Steam content path
STEAMSTARTING="$STEAMCONFIG/starting"

# Was -steamos specified
: "${STEAMOS:=}"
if steamos_arg $@; then
	STEAMOS=1
fi

# See if this is the initial launch of Steam
if [ ! -f "$PIDFILE" ] || ! kill -0 $(cat "$PIDFILE") 2>/dev/null; then
	INITIAL_LAUNCH=true
else
	INITIAL_LAUNCH=false
fi

if [ "${1-}" = "--reset" ]; then
	reset_steam
	exit
fi

if [ "$INITIAL_LAUNCH" ]; then
	# Show the license agreement, if needed
	show_license_agreement

	# See if we need to update the /usr/bin/steam script
	if [ -z "${STEAMSCRIPT:-}" ]; then
		STEAMSCRIPT="/usr/bin/`detect_package`"
	fi
	if [ -f "$STEAMSCRIPT" ]; then
		if ! check_scriptversion "$STEAMSCRIPT" STEAMSCRIPT_VERSION "$MINIMUM_STEAMSCRIPT_VERSION"; then
			STEAMSCRIPT_OUTOFDATE=1
			warn_outofdate
		else
			STEAMSCRIPT_OUTOFDATE=0
		fi
	fi

	# Install any additional dependencies
	if [ -z "$STEAMOS" ]; then
		STEAMDEPS="`dirname $STEAMSCRIPT`/`detect_package`deps"
		if [ -f "$STEAMDEPS" -a -f "$STEAMROOT/steamdeps.txt" ]; then
			"$STEAMDEPS" $STEAMROOT/steamdeps.txt
		fi
	fi

	# Create symbolic links for the Steam API
	if [ ! -e "$STEAMCONFIG" ]; then
		mkdir "$STEAMCONFIG"
	fi
	if [ "$STEAMROOT" != "$STEAMROOTLINK" -a "$STEAMROOT" != "$STEAMDATALINK" ]; then
		rm -f "$STEAMBIN32LINK" && ln -s "$STEAMROOT/$PLATFORM32" "$STEAMBIN32LINK"
		rm -f "$STEAMBIN64LINK" && ln -s "$STEAMROOT/$PLATFORM64" "$STEAMBIN64LINK"
		rm -f "$STEAMSDK32LINK" && ln -s "$STEAMROOT/linux32" "$STEAMSDK32LINK"
		rm -f "$STEAMSDK64LINK" && ln -s "$STEAMROOT/linux64" "$STEAMSDK64LINK"
		rm -f "$STEAMROOTLINK" && ln -s "$STEAMROOT" "$STEAMROOTLINK"
		if [ "$STEAMDATALINK" ]; then
			rm -f "$STEAMDATALINK" && ln -s "$STEAMDATA" "$STEAMDATALINK"
		fi
	fi

	# Temporary bandaid until everyone has the new libsteam_api.so
	rm -f ~/.steampath && ln -s "$STEAMCONFIG/bin32/steam" ~/.steampath
	rm -f ~/.steampid && ln -s "$PIDFILE" ~/.steampid
	rm -f ~/.steam/bin && ln -s "$STEAMBIN32LINK" ~/.steam/bin
	# Uncomment this line when you want to remove the bandaid
	#rm -f ~/.steampath ~/.steampid ~/.steam/bin
fi

# Show what we detect for distribution and release
echo "Running Steam on $(distro_description)"

# The Steam runtime is a complete set of libraries for running
# Steam games, and is intended to continue to work going forward.
#
# The runtime is open source and the scripts used to build it are
# available on GitHub:
#	https://github.com/ValveSoftware/steam-runtime
#
# We would like this runtime to work on as many Linux distributions
# as possible, so feel free to tinker with it and submit patches and
# bug reports.
#
: "${STEAM_RUNTIME:=}"
if [ "$STEAM_RUNTIME" = "debug" ]; then
	# Use the debug runtime if it's available, and the default if not.
	export STEAM_RUNTIME="$STEAMROOT/$PLATFORM/steam-runtime"

	if unpack_runtime; then
		if [ -z "${STEAM_RUNTIME_DEBUG-}" ]; then
			STEAM_RUNTIME_DEBUG="$(cat "$STEAM_RUNTIME/version.txt" | sed 's,-release,-debug,')"
		fi
		if [ -z "{$STEAM_RUNTIME_DEBUG_DIR-}" ]; then
			STEAM_RUNTIME_DEBUG_DIR="$STEAMROOT/$PLATFORM"
		fi
		if [ ! -d "$STEAM_RUNTIME_DEBUG_DIR/$STEAM_RUNTIME_DEBUG" ]; then
			# Try to download the debug runtime
			STEAM_RUNTIME_DEBUG_URL=$(grep "$STEAM_RUNTIME_DEBUG" "$STEAM_RUNTIME/README.txt")
			mkdir -p "$STEAM_RUNTIME_DEBUG_DIR"

			STEAM_RUNTIME_DEBUG_ARCHIVE="$STEAM_RUNTIME_DEBUG_DIR/$(basename "$STEAM_RUNTIME_DEBUG_URL")"
			if [ ! -f "$STEAM_RUNTIME_DEBUG_ARCHIVE" ]; then
				echo $"Downloading debug runtime: $STEAM_RUNTIME_DEBUG_URL"
				(cd "$STEAM_RUNTIME_DEBUG_DIR" && \
					download_archive $"Downloading debug runtime..." "$STEAM_RUNTIME_DEBUG_URL")
			fi
			if ! extract_archive $"Unpacking debug runtime..." "$STEAM_RUNTIME_DEBUG_ARCHIVE" "$STEAM_RUNTIME_DEBUG_DIR"; then
				rm -rf "$STEAM_RUNTIME_DEBUG" "$STEAM_RUNTIME_DEBUG_ARCHIVE"
			fi
		fi
		if [ -d "$STEAM_RUNTIME_DEBUG_DIR/$STEAM_RUNTIME_DEBUG" ]; then
			echo "STEAM_RUNTIME debug enabled, using $STEAM_RUNTIME_DEBUG"
			export STEAM_RUNTIME="$STEAM_RUNTIME_DEBUG_DIR/$STEAM_RUNTIME_DEBUG"

			# Set up the link to the source code
			ln -sf "$STEAM_RUNTIME/source" /tmp/source
		else
			echo $"STEAM_RUNTIME couldn't download and unpack $STEAM_RUNTIME_DEBUG_URL, falling back to $STEAM_RUNTIME"
		fi
	fi
elif [ "$STEAM_RUNTIME" = "1" ]; then
	echo "STEAM_RUNTIME is enabled by the user"
	export STEAM_RUNTIME="$STEAMROOT/$PLATFORM/steam-runtime"
elif [ "$STEAM_RUNTIME" = "0" ]; then
	echo "STEAM_RUNTIME is disabled by the user"
elif [ -z "$STEAM_RUNTIME" ]; then
	if runtime_supported; then
		echo "STEAM_RUNTIME is enabled automatically"
		export STEAM_RUNTIME="$STEAMROOT/$PLATFORM/steam-runtime"
	else
		echo "STEAM_RUNTIME is disabled automatically"
	fi
else
	echo "STEAM_RUNTIME has been set by the user to: $STEAM_RUNTIME"
fi
if [ "$STEAM_RUNTIME" -a "$STEAM_RUNTIME" != "0" ]; then
	# Unpack the runtime if necessary
	if unpack_runtime; then
		case $(uname -m) in
			*64)
				export PATH="$STEAM_RUNTIME/amd64/bin:$STEAM_RUNTIME/amd64/usr/bin:$PATH"
				;;
			*)
				export PATH="$STEAM_RUNTIME/i386/bin:$STEAM_RUNTIME/i386/usr/bin:$PATH"
				;;
		esac

		export LD_LIBRARY_PATH="$STEAM_RUNTIME/i386/lib/i386-linux-gnu:$STEAM_RUNTIME/i386/lib:$STEAM_RUNTIME/i386/usr/lib/i386-linux-gnu:$STEAM_RUNTIME/i386/usr/lib:$STEAM_RUNTIME/amd64/lib/x86_64-linux-gnu:$STEAM_RUNTIME/amd64/lib:$STEAM_RUNTIME/amd64/usr/lib/x86_64-linux-gnu:$STEAM_RUNTIME/amd64/usr/lib:${LD_LIBRARY_PATH-}"
	else
		echo "Unpack runtime failed, error code $?"
		show_message --error $"Couldn't set up the Steam Runtime. Are you running low on disk space?\nContinuing..."
	fi
fi

# Need to add /usr/lib32 to the library path to pick up libvdpau_nvidia.so on Ubuntu 12.04
export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/usr/lib32"

# prepend our lib path to LD_LIBRARY_PATH
export LD_LIBRARY_PATH="$STEAMROOT/$PLATFORM:$LD_LIBRARY_PATH"

# Check to make sure the user will be able to run steam...
if [ -z "$STEAMOS" ]; then
	check_shared_libraries
fi

# disable SDL1.2 DGA mouse because we can't easily support it in the overlay
export SDL_VIDEO_X11_DGAMOUSE=0

# Touch our startup file so we can detect bootstrap launch failure
if [ "$UNAME" = "Linux" ]; then
	: >"$STEAMSTARTING"
fi

MAGIC_RESTART_EXITCODE=42
SEGV_EXITCODE=139

# and launch steam
STEAM_DEBUGGER=${DEBUGGER-}
unset DEBUGGER # Don't use debugger if Steam launches itself recursively
if [ "$STEAM_DEBUGGER" == "gdb" ] || [ "$STEAM_DEBUGGER" == "cgdb" ]; then
	ARGSFILE=$(mktemp $USER.steam.gdb.XXXX)

	# Set the LD_PRELOAD varname in the debugger, and unset the global version. 
	: "${LD_PRELOAD=}"
	if [ "$LD_PRELOAD" ]; then
		echo set env LD_PRELOAD=$LD_PRELOAD >> "$ARGSFILE"
		echo show env LD_PRELOAD >> "$ARGSFILE"
		unset LD_PRELOAD
	fi

	$STEAM_DEBUGGER -x "$ARGSFILE" --args "$STEAMROOT/$STEAMEXEPATH" "$@"
	rm "$ARGSFILE"
elif [ "$STEAM_DEBUGGER" == "valgrind" ]; then
	DONT_BREAK_ON_ASSERT=1 G_SLICE=always-malloc G_DEBUG=gc-friendly valgrind --error-limit=no --undef-value-errors=no --suppressions=$PLATFORM/steam.supp $STEAM_VALGRIND "$STEAMROOT/$STEAMEXEPATH" "$@" 2>&1 | tee steam_valgrind.txt
elif [ "$STEAM_DEBUGGER" == "callgrind" ]; then
    valgrind --tool=callgrind --instr-atstart=no "$STEAMROOT/$STEAMEXEPATH" "$@"
elif [ "$STEAM_DEBUGGER" == "strace" ]; then
    strace -osteam.strace "$STEAMROOT/$STEAMEXEPATH" "$@"
else
	$STEAM_DEBUGGER "$STEAMROOT/$STEAMEXEPATH" "$@"
fi
STATUS=$?

# Restore paths before unpacking the bootstrap if we need to.
export PATH="$SYSTEM_PATH"
export LD_LIBRARY_PATH="$SYSTEM_LD_LIBRARY_PATH"

if [ "$UNAME" = "Linux" ]; then
	if [ "$INITIAL_LAUNCH" -a \
	     $STATUS -ne $MAGIC_RESTART_EXITCODE -a \
	     -f "$STEAMSTARTING" -a \
	     -z "${STEAM_INSTALLED_BOOTSTRAP-}" -a \
	     -z "$STEAMSCRIPT_OUTOFDATE" ]; then
		# Launching the bootstrap failed, try reinstalling
		if reset_steam; then
			# We were able to reinstall the bootstrap, try again
			export STEAM_INSTALLED_BOOTSTRAP=1
			STATUS=$MAGIC_RESTART_EXITCODE
		fi
	fi
fi

# If steam requested to restart, then restart
if [ $STATUS -eq $MAGIC_RESTART_EXITCODE ] ; then
	echo "Restarting Steam by request..."
	exec "$0" "$@"
fi
