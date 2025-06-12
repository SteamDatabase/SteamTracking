#!/usr/bin/env bash

# verbose
#export PS4='${LINENO}: '
#set -x

set -o pipefail
shopt -s failglob
set -u

log () {
	echo "steam.sh[$$]: $*" >&2 || :
}
# This version interprets backslash escapes like echo -e
log_e () {
	echo -e "steam.sh[$$]: $*" >&2 || :
}

# Allow us to debug what's happening in the script if necessary
if [ "${STEAM_DEBUG-}" ]; then
	set -x
fi
export TEXTDOMAIN=steam
export TEXTDOMAINDIR=/usr/share/locale

log_opened=

STEAMROOT="$(cd "$(dirname "$0")" && echo $PWD)"
if [ -z "${STEAMROOT}" ]; then
	log $"Couldn't find Steam root directory from "$0", aborting!"
	exit 1
fi
STEAMDATA="$STEAMROOT"
if [ -z ${STEAMEXE-} ]; then
  STEAMEXE=`basename "$0" .sh`
fi
# Backward compatibility for server operators
if [ "$STEAMEXE" = "steamcmd" ]; then
	log "***************************************************"
	log "The recommended way to run steamcmd is: steamcmd.sh $*"
	log "***************************************************"
	exec "$STEAMROOT/steamcmd.sh" "$@"
	log "Couldn't find steamcmd.sh"
	exit 255
fi
cd "$STEAMROOT"

# Save the system paths in case we need to restore them
export SYSTEM_PATH="$PATH"
export SYSTEM_LD_LIBRARY_PATH="${LD_LIBRARY_PATH-}"

# Prefer host zenity binary if available
export SYSTEM_ZENITY="$(which zenity 2>/dev/null)"
if [ -z ${SYSTEM_ZENITY} ]; then
	export STEAM_ZENITY="zenity"
else
	# FIXME: host zenity may fail because of the scout LD_* edits and should be run under SYSTEM_LD_LIBRARY_PATH
	export STEAM_ZENITY="${SYSTEM_ZENITY}"
fi

function show_message()
{
	local style="$1"
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

	log_e "$title: $*"

	if [ "${XDG_CURRENT_DESKTOP:-other}" == "gamescope" ]; then
		# any attempt to run zenity or xterm under gamescope will block with nothing displayed
		return
	fi

	if [ -n "${STEAM_ZENITY}" ]; then

		if [ "${STEAM_ZENITY}" = "${SYSTEM_ZENITY}" ]; then
			# FIXME: we have to go back to system LD_ setup otherwise system zenity may not work
			LD_LIBRARY_PATH_BAK="${LD_LIBRARY_PATH}"
			export LD_LIBRARY_PATH="${SYSTEM_LD_LIBRARY_PATH}"
		fi

		if ! "${STEAM_ZENITY}" "$style" --text="$*" --width=450 2>/dev/null; then
			# Save the prompt in a temporary file because it can have newlines in it
			tmpfile="$(mktemp || echo "/tmp/steam_message.txt")"
			echo -e "$*" >"$tmpfile"
			xterm -bg "#383635" -fg "#d1cfcd" -T "$title" -e "cat $tmpfile; echo -n 'Press enter to continue: '; read input" 2>/dev/null || \
				(echo "$title:"; cat "$tmpfile"; echo -n 'Press enter to continue: '; read input) >&2
			rm -f "$tmpfile"
		fi

		if [ "${STEAM_ZENITY}" = "${SYSTEM_ZENITY}" ]; then
			export LD_LIBRARY_PATH="${LD_LIBRARY_PATH_BAK}"
		fi

	else
		# Keep a trace on disk at least
		echo -e "[$(date +'%Y-%m-%dT%H:%M:%S%z')]: $title: $*" >> /tmp/steam_startup_messages_$USER.txt
	fi
}

function maybe_open_log()
{
	local srt="$1"
	local data="$2"
	local argv="$3"

	case " $argv " in
		(*\ -srt-logger-opened\ *)
			log "Log already open"
			return 0
			;;
	esac

	if [ -n "$log_opened" ]; then
		return 0
	fi

	if [ "${STEAM_RUNTIME_LOGGER-}" = "0" ]; then
		# Interferes with vscode's gdb wrapping for instance
		log "Logging to console-linux.txt disabled via STEAM_RUNTIME_LOGGER"
		return 0
	fi

	if [ "x${DEBUGGER-}" != "x" ]; then
		# Interferes with ncurses (cgdb etc.)
		log "Setting up for debugging, not logging to console-linux.txt"
		return 0
	fi

	local log_folder="${STEAM_CLIENT_LOG_FOLDER:-logs}"

	# Avoid using mkdir -p here: if ~/.steam/steam is somehow missing,
	# we don't want to create it as a real directory
	if [ -d "$data/$log_folder" ] || mkdir "$data/$log_folder"; then
		log_dir="$data/$log_folder"
	else
		log "Couldn't create $data/$log_folder, not logging to console-linux.txt"
		return 0
	fi

	if source "${srt}/usr/libexec/steam-runtime-tools-0/logger-0.bash" \
		--log-directory="$log_dir" \
		--filename=console-linux.txt \
		--parse-level-prefix \
		-t steam \
	; then
		log_opened=1
	else
		log "Couldn't set up srt-logger, not logging to console-linux.txt"
	fi
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

function detect_universe()
{
	if test -f "$STEAMROOT/Steam.cfg" && \
		grep -E '^[Uu]niverse *= *[Bb]eta$' "$STEAMROOT/Steam.cfg" >/dev/null; then
		STEAMUNIVERSE="Beta"
	elif test -f "$STEAMROOT/steam.cfg" && \
		grep -E '^[Uu]niverse *= *[Bb]eta$' "$STEAMROOT/steam.cfg" >/dev/null; then
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
		echo "/usr/lib/`detect_package`/bootstraplinux_ubuntu12_32.tar.xz"
	fi
}

function install_bootstrap()
{
	local omask

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
		log "Installing bootstrap $STEAMBOOTSTRAPARCHIVE"
		tar xf "$STEAMBOOTSTRAPARCHIVE"
		STATUS=$?
	else
		show_message --error $"Couldn't start bootstrap and couldn't reinstall from $STEAMBOOTSTRAPARCHIVE.	 Please contact technical support."
		STATUS=1
	fi

	# Restore the umask
	umask $omask

	return $STATUS
}

function pin_newer_runtime_libs ()
{
	local steam_runtime_path

	# First argument is the runtime path
	steam_runtime_path=$(realpath "$1")

	if [[ ! -d "$steam_runtime_path" ]]; then
		return
	fi

	if [ ! -x "$steam_runtime_path/setup.sh" ]; then
		return
	fi

	# The pinning logic is in the runtime
	"$steam_runtime_path/setup.sh" --force
	return $?
}

function check_pins ()
{
	local steam_runtime_path

	# First argument is the runtime path
	steam_runtime_path=$(realpath "$1")

	if [[ ! -d "$steam_runtime_path" ]]; then
		return
	fi

	if [ ! -x "$steam_runtime_path/setup.sh" ]; then
		return
	fi

	# The pinning logic is in the runtime
	"$steam_runtime_path/setup.sh"
	return $?
}

function extract_archive()
{
	local BF

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
		if [ -n "${STEAM_ZENITY}" ]; then
			tar --blocking-factor=${BF} --checkpoint=1 --checkpoint-action='exec=echo $TAR_CHECKPOINT' -xf "$2" -C "$3" | "${STEAM_ZENITY}" --progress --auto-close --no-cancel --width 400 --text="$1"
		else
			tar --blocking-factor=${BF} --checkpoint=1 --checkpoint-action='exec=echo $TAR_CHECKPOINT' -xf "$2" -C "$3"
		fi
		return ${PIPESTATUS[0]}
	else
		echo "$1"
		tar -xf "$2" -C "$3"
		return $?
	fi
}

function has_runtime_archive()
{
	local srt="$1"
	local ARCHIVE_EXT="$2"

	# Make sure we have files to unpack
	if [ ! -f "$srt.$ARCHIVE_EXT" ]; then
		return 1
	fi

	if [ ! -f "$srt.$ARCHIVE_EXT.checksum" ]; then
		return 1
	fi

	return 0
}

function unpack_runtime()
{
	local srt="$1"
	local ARCHIVE_EXT="tar.xz"
	local EXTRACT_TMP
	local EXISTING_CHECKSUM
	local EXPECTED_CHECKSUM

	if ! has_runtime_archive "$srt" "$ARCHIVE_EXT"; then
		if [ -d "$srt" ]; then
			# The runtime is unpacked, let's use it!
			check_pins "$srt"
			return 0
		fi
		return 1
	fi

	# Make sure we haven't already unpacked them
	if [ -f "$srt/checksum" ] && [[ $(< "$srt.$ARCHIVE_EXT.checksum" ) = $(< "$srt/checksum" ) ]] ; then
		check_pins "$srt"
		return 0
	fi

	# Unpack the runtime
	EXTRACT_TMP="$srt.tmp"
	rm -rf "$EXTRACT_TMP"
	mkdir "$EXTRACT_TMP"
	EXISTING_CHECKSUM="$(cd "$(dirname "$srt")"; md5sum "$(basename "$srt.$ARCHIVE_EXT")")"
	EXPECTED_CHECKSUM="$(cat "$srt.$ARCHIVE_EXT.checksum")"
	if [ "$EXISTING_CHECKSUM" != "$EXPECTED_CHECKSUM" ]; then
		log $"Runtime checksum: $EXISTING_CHECKSUM, expected $EXPECTED_CHECKSUM"
		return 2
	fi
	if ! extract_archive $"Unpacking Steam Runtime" "$srt.$ARCHIVE_EXT" "$EXTRACT_TMP"; then
		return 3
	fi

	# Move it into place!
	if [ -d "$srt" ]; then
		rm -rf "$srt.old"
		if ! mv "$srt" "$srt.old"; then
			return 4
		fi
	fi
	if ! mv "$EXTRACT_TMP"/* "$EXTRACT_TMP"/..; then
		return 5
	fi
	rm -rf "$EXTRACT_TMP"
	if ! cp "$srt.$ARCHIVE_EXT.checksum" "$srt/checksum"; then
		return 6
	fi
	# Unpacked a new runtime, pin any newer system libs with symlinks in a special dir
	pin_newer_runtime_libs "$srt"
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
	local MISSING_LIBRARIES

	if [ -f "$STEAMROOT/$PLATFORM/steamui.so" ]; then
		MISSING_LIBRARIES=$(get_missing_libraries "$STEAMROOT/$PLATFORM/steamui.so")
	else
		MISSING_LIBRARIES=$(get_missing_libraries "$STEAMROOT/$PLATFORM/$STEAMEXE")
	fi
	if [ "$MISSING_LIBRARIES" != "" ]; then
		show_message --error $"You are missing the following 32-bit libraries, and Steam may not run:\n$MISSING_LIBRARIES"
	fi
}

function check_requirements()
{
	local srt="$1"
	local check_requirements_bin
	local message
	local status

	check_requirements_bin="$srt/amd64/usr/bin/steam-runtime-check-requirements"
	if ! [ -x "$check_requirements_bin" ]; then
		log "Can't find $check_requirements_bin, continuing anyway"
	else
		message="$("$check_requirements_bin")"
		status=$?
		if (( $status == 71 )); then
			if [ -z "$message" ]; then
				message="Sorry, it seems like this computer does not meet the requirements to run Steam."
			fi
			show_message --error "$message"
			exit $status
		elif (( $status != 0 )); then
			if [ -z "$message" ]; then
				message="steam-runtime-check-requirements failed with an unexpected nonzero exit status. Trying to continue"
			fi
			log "$message"
		else
			log "Steam client's requirements are satisfied"
		fi
	fi
}

function ignore_signal()
{
	:
}

function reset_steam()
{
	local STEAM_SAVE

	# Ensure STEAMROOT is defined to something reasonable so we don't wipe the wrong thing
	if [ -z "${STEAMROOT}" ]; then
		show_message --error $"Couldn't find Steam directory, it's not safe to reset Steam. Please contact technical support."
		return 1
	fi

	# Don't wipe development files
	if [ -f "$STEAMROOT/steam_dev.cfg" ]; then
		log "Can't reset development directory"
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
	# continuing, so that if the machine is turned off while this is occurring, a new bootstrap will be
	# put in place next time steam is run.
	rm -f "$STEAMDATALINK"

	# Back up games and critical files
	# Backup package dir so that we're not hitting CDNs if there is no manifest change
	mkdir -p "$STEAM_SAVE"
	for i in bootstrap.tar.xz ssfn* SteamApps steamapps userdata package; do
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
		log $"Reset complete!"
	else
		STATUS=1
		log $"Reset failed!"
	fi

	# Okay, at this point we can recover, so re-enable interrupts
	trap '' INT

	return $STATUS
}

function is_steam_running()
{
	# Check that we have a valid pid file
	local steam_pid_path="$HOME/.steam/steam.pid"
	if [[ ! -e "$steam_pid_path" ]]; then
		return 1
	fi

	# Check if the process exists - does it have a /proc entry?
	local steam_pid=$(<"$steam_pid_path")
	local pid_proc_dir="/proc/$steam_pid"
	if [[ ! -e "$pid_proc_dir" ]]; then
		return 1
	fi

	# Check for pid recycling. If this is the master steam process
	# it must have openeded ~/.steam/steam.pipe
	local pid_pipe_open_count=$(find "$pid_proc_dir/fd" -lname "$HOME/.steam/steam.pipe" | wc -l)
	if [[ "$pid_pipe_open_count" -gt "0" ]]; then
		# steam is running
		return 0
	else
		# this is a stale pid file, steam is not running
		return 1
	fi
}

function needs_symlink_repair()
{
	local symlinks=("$STEAMBIN32LINK" "$STEAMBIN64LINK" "$STEAMSDK32LINK" "$STEAMSDK64LINK" "$STEAMROOTLINK" "$STEAMDATALINK")

	for symlink in "${symlinks[@]}"; do
		# check that symlink exists and points to a valid directory
		if [[ ! -L "$symlink" || ! -e "$symlink" ]]; then
			# needs symlink repair
			return 0
		fi
	done

	# Looks okay
	return 1
}

function steamos_arg()
{
	local option

	for option in "$@"
	do
		if [ "$option" = "-steamos" ]; then
			return 0; # 0 == true in bash
		fi
		if [ "$option" = "-steamos3" ]; then # holo/jupiter
			return 0;
		fi
	done

	return 1; # 1 == false in bash speak
}

# determine platform
UNAME=`uname`
if [ "$UNAME" != "Linux" ]; then
   show_message --error "Unsupported Operating System"
   exit 1
fi

# We use the Ubuntu-12.04-based Steam Runtime 1 'scout' on all
# distributions, so Steam executables match that ABI
PLATFORM=ubuntu12_32
PLATFORM32=ubuntu12_32
PLATFORM64=ubuntu12_64
STEAMRT64=steamrt64
STEAMEXEPATH=$PLATFORM/$STEAMEXE

# common variables for later

# We use ${HOME%/}/.steam for bootstrap symlinks so that we can easily
# tell partners where to go to find the Steam libraries and data.
# This is constant so that legacy applications can always find us in the future.
STEAMCONFIG="${HOME%/}/.steam" # Drop tailing slash in home folder if it exists.
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
if steamos_arg "$@"; then
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
	if [ -z "${STEAMSCRIPT:-}" ]; then
		STEAMSCRIPT="/usr/bin/`detect_package`"
	fi

	# Create symbolic links for the Steam API
	if [ ! -e "$STEAMCONFIG" ]; then
		mkdir "$STEAMCONFIG"
	fi

	if ! is_steam_running || needs_symlink_repair; then
		if [ "$STEAMROOT" != "$STEAMROOTLINK" -a "$STEAMROOT" != "$STEAMDATALINK" ]; then
			ln -fsn "$STEAMROOT/$PLATFORM32" "$STEAMBIN32LINK"
			ln -fsn "$STEAMROOT/$PLATFORM64" "$STEAMBIN64LINK"
			ln -fsn "$STEAMROOT/linux32" "$STEAMSDK32LINK"
			ln -fsn "$STEAMROOT/linux64" "$STEAMSDK64LINK"
			ln -fsn "$STEAMROOT" "$STEAMROOTLINK"
			if [ "$STEAMDATALINK" ]; then
				ln -fsn "$STEAMDATA" "$STEAMDATALINK"
			fi
		fi
	fi

	# Temporary bandaid until everyone has the new libsteam_api.so
	rm -f ~/.steampath && ln -s "$STEAMCONFIG/sdk32/steam" ~/.steampath
	rm -f ~/.steampid && ln -s "$PIDFILE" ~/.steampid
	rm -f ~/.steam/bin && ln -s "$STEAMBIN32LINK" ~/.steam/bin
	# Uncomment this line when you want to remove the bandaid
	#rm -f ~/.steampath ~/.steampid ~/.steam/bin
fi

# Show what we detect for distribution and release
log "Running Steam on $(distro_description)"

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

# The only runtime that is supported is the default one, which is part
# of the Steam distribution. We don't need to export this variable if
# it has its default value, because anything else that needs to locate
# the scout runtime should have the same default.
: "${STEAM_RUNTIME_SCOUT:="$STEAMROOT/$PLATFORM/steam-runtime"}"

# Historically this was both an input to this script and an output from it
# (now using it as an input is deprecated). For now, ensure that it's set
# to something, possibly empty.
: "${STEAM_RUNTIME:=}"

if [ "$STEAM_RUNTIME" = "debug" ]; then
	log "STEAM_RUNTIME=debug is deprecated, set \$STEAM_RUNTIME_SCOUT to the absolute path to an unpacked runtime instead"
elif [ "$STEAM_RUNTIME" = "1" ]; then
	log "STEAM_RUNTIME is enabled by the user"
elif [ "$STEAM_RUNTIME" = "0" ]; then
	log "STEAM_RUNTIME is disabled by the user (this is unsupported)"
elif [ -z "$STEAM_RUNTIME" ]; then
	log "STEAM_RUNTIME is enabled automatically"
# Don't warn if STEAM_RUNTIME and STEAM_RUNTIME_SCOUT are set to the
# same thing: that's the backwards-compatible way to force use of a
# locally-built runtime for testing.
elif [ "$STEAM_RUNTIME_SCOUT" != "$STEAM_RUNTIME" ]; then
	log "Setting STEAM_RUNTIME to a path is deprecated, set STEAM_RUNTIME_SCOUT=\"$STEAM_RUNTIME\" instead"
	export STEAM_RUNTIME_SCOUT="$STEAM_RUNTIME"
fi

case "$STEAM_RUNTIME_SCOUT" in
	(/*)
		;;
	(*)
		log "STEAM_RUNTIME_SCOUT should be set to an absolute path, not \"$STEAM_RUNTIME_SCOUT\""
		STEAM_RUNTIME_SCOUT="$(realpath "$STEAM_RUNTIME_SCOUT")"
		if ! [ -d "$STEAM_RUNTIME_SCOUT" ]; then
			export STEAM_RUNTIME_SCOUT="$STEAMROOT/$PLATFORM/steam-runtime"
			log "Path does not exist, defaulting to \"$STEAM_RUNTIME_SCOUT\""
		fi
		;;
esac

# Unpack the runtime if necessary.
# We do this even in the unsupported STEAM_RUNTIME=0 code path where we
# are not going to use it for shared libraries: it also contains some
# necessary tools like srt-logger.
if unpack_runtime "$STEAM_RUNTIME_SCOUT"; then
	: # OK
else
	log "Unpack runtime failed, error code $?"
	show_message --error $"Couldn't set up the Steam Runtime. Are you running low on disk space?"
	exit 1
fi

if [ "$STEAM_RUNTIME" != "0" ]; then
	export STEAM_RUNTIME="$STEAM_RUNTIME_SCOUT"

	if [ ! -x "$STEAM_RUNTIME/setup.sh" ]; then
		log "internal error: $STEAM_RUNTIME/setup.sh is missing, this runtime is invalid or corrupted"
		exit 1
	fi
	export PATH="$("$STEAM_RUNTIME/setup.sh" --print-bin-path):$PATH"

	if [ ! -x "$STEAM_RUNTIME/run.sh" ]; then
		log "internal error: $STEAM_RUNTIME/run.sh is missing, this runtime is invalid or corrupted"
		exit 1
	fi
	export STEAM_RUNTIME_LIBRARY_PATH="$("$STEAM_RUNTIME/run.sh" --print-steam-runtime-library-paths)"

	export LD_LIBRARY_PATH="$STEAM_RUNTIME_LIBRARY_PATH"
fi

# Not all builds of SDL3 have Wayland enabled. If a user has forced use of
# the Wayland video driver, make sure to allow fallback to X11.
if [ "${SDL_VIDEO_DRIVER-}" = wayland ]; then
	log "warning: SDL_VIDEO_DRIVER='wayland' does not allow fallback, use 'wayland,x11' instead"
	export SDL_VIDEO_DRIVER=wayland,x11
fi
# Same for SDL2
if [ "${SDL_VIDEODRIVER-}" = wayland ]; then
	log "warning: SDL_VIDEODRIVER='wayland' does not allow fallback, use 'wayland,x11' instead"
	export SDL_VIDEODRIVER=wayland,x11
fi

if [ "${1-}" = "--run" ]; then
	STEAM_RUNTIME_RUN_SCRIPT="$STEAM_RUNTIME_SCOUT/run.sh"
	shift
	exec "$STEAM_RUNTIME_SCOUT/run.sh" "$@"
	log "Couldn't find run.sh"
	exit 255
fi

maybe_open_log "$STEAM_RUNTIME_SCOUT" "${STEAMDATALINK:-"$STEAMCONFIG/steam"}" "$*"
if [ -n "$log_opened" ]; then
	set -- -srt-logger-opened "$@"
fi

# Clean up remnants of the sniper runtime, now replaced by steamrt3c (steamrt64)
rm -fr "${STEAMROOT}/ubuntu12_64/steam-runtime-sniper/"
rm -f "${STEAMROOT}/ubuntu12_64/steam-runtime-sniper.lock"
rm -f "${STEAMROOT}/ubuntu12_64/steam-runtime-steamrt.lock"

function setup_steamrt_override()
{
	status=0
	"$STEAMROOT/$STEAMRT64/steam-runtime-steamrt.sh" \
	--unpack-dir="$STEAMROOT/$STEAMRT64" \
	--runtime=steam-runtime-steamrt > /dev/null || status="$?"
	case "$status" in
		(0)
			# Unpacked successfully
			;;
		(*)
			log "Encountered a problem expanding the steamrt runtime, forcing extended file verification."
			set -- "$@" "-verifyfiles"
			;;
	esac
}

# In dev environments we allow overriding the steam runtime with a local payload
# To use an override runtime:
#  * Place the runtime files in the relevant platform folder
#  * Inhibit the bootstrapper via Steam.cfg (otherwise the bootstrapper will overwrite it)
if [ -n "${STEAM_RUNTIME_STEAMRT-}" ]; then
	log "Using custom runtime $STEAM_RUNTIME_STEAMRT for steamwebhelper (this is unsupported)"
elif [[ -f "$STEAMROOT/$STEAMRT64/steam-runtime-steamrt.tar.xz" ]]; then
	setup_steamrt_override
fi

# prepend our lib path to LD_LIBRARY_PATH
export LD_LIBRARY_PATH="$STEAMROOT/$PLATFORM:$STEAMROOT/$PLATFORM/panorama:${LD_LIBRARY_PATH-}"

# Check to make sure the user will be able to run steam...
if [ -z "$STEAMOS" ]; then
	check_shared_libraries
fi

# Check that the current system meets the requirements
check_requirements "$STEAM_RUNTIME_SCOUT"

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
: "${DEBUGGER_ARGS:=}"
unset DEBUGGER # Don't use debugger if Steam launches itself recursively
debugger_path="${STEAM_DEBUGGER%% *}"
debugger_executable="${debugger_path##*/}"
if [ "$debugger_executable" == "gdb" ] || [ "$debugger_executable" == "cgdb" ]; then
	ARGSFILE=$(mktemp $USER.steam.gdb.XXXX)

	# Set the LD_PRELOAD varname in the debugger, and unset the global version.
	: "${LD_PRELOAD=}"
	if [ "$LD_PRELOAD" ]; then
		echo set env LD_PRELOAD=$LD_PRELOAD >> "$ARGSFILE"
		echo show env LD_PRELOAD >> "$ARGSFILE"
		unset LD_PRELOAD
	fi

	# Ditto with LD_LIBRARY_PATH, avoids this below:
	# gdb: /home/plagman/src/valve/Steam/main/client/ubuntu12_32/steam-runtime/pinned_libs_64/libcurl.so.4: version `CURL_OPENSSL_4' not found (required by /usr/lib/libdebuginfod.so.1)
	: "${LD_LIBRARY_PATH=}"
	if [ "$LD_LIBRARY_PATH" ]; then
		echo set env LD_LIBRARY_PATH=$LD_LIBRARY_PATH >> "$ARGSFILE"
		echo show env LD_LIBRARY_PATH >> "$ARGSFILE"
		unset LD_LIBRARY_PATH
	fi

	# Enable index file caching for reasonable launch time under gdb
	echo set index-cache enabled on >> "$ARGSFILE"
	echo show index-cache stats >> "$ARGSFILE"

	: "${DEBUGGER_ARGS=}"
	echo "gdb/cgdb launch with ARGSFILE: $ARGSFILE"
	echo $STEAM_DEBUGGER -x "$ARGSFILE" $DEBUGGER_ARGS --args "$STEAMROOT/$STEAMEXEPATH" "$@"

	$STEAM_DEBUGGER -x "$ARGSFILE" $DEBUGGER_ARGS --args "$STEAMROOT/$STEAMEXEPATH" "$@"
	rm "$ARGSFILE"
elif [ "$STEAM_DEBUGGER" == "valgrind" ]; then
	: "${STEAM_VALGRIND:=}"
	DONT_BREAK_ON_ASSERT=1 G_SLICE=always-malloc G_DEBUG=gc-friendly valgrind --error-limit=no --undef-value-errors=no --suppressions=$PLATFORM/steam.supp $STEAM_VALGRIND "$STEAMROOT/$STEAMEXEPATH" "$@" 2>&1 | tee steam_valgrind.txt
elif [ "$STEAM_DEBUGGER" == "callgrind" ]; then
	valgrind --tool=callgrind --instr-atstart=no "$STEAMROOT/$STEAMEXEPATH" "$@"
elif [ "$STEAM_DEBUGGER" == "strace" ]; then
	strace -osteam.strace "$STEAMROOT/$STEAMEXEPATH" "$@"
elif [ "$STEAM_DEBUGGER" == "lldb-mi" ]; then
	$STEAM_DEBUGGER $DEBUGGER_ARGS "$STEAMROOT/$STEAMEXEPATH" -- "$@"
elif [ "$STEAM_DEBUGGER" == "gdbserver" ]; then
	$STEAM_DEBUGGER $DEBUGGER_ARGS "$STEAMROOT/$STEAMEXEPATH" "$@"
elif [ -z "$STEAM_DEBUGGER" ]; then
	"$STEAMROOT/$STEAMEXEPATH" "$@"
else
	# Most likely not what you want!
	log "WARNING: Using default/fallback debugger launch"
	echo $STEAM_DEBUGGER $DEBUGGER_ARGS "$STEAMROOT/$STEAMEXEPATH" "$@" >&2
	$STEAM_DEBUGGER $DEBUGGER_ARGS "$STEAMROOT/$STEAMEXEPATH" "$@"
fi
STATUS=$?

# Restore paths before restarting if we need to.
export PATH="$SYSTEM_PATH"
export LD_LIBRARY_PATH="$SYSTEM_LD_LIBRARY_PATH"

# If steam requested to restart, then restart
if [ $STATUS -eq $MAGIC_RESTART_EXITCODE ] ; then
	log "Restarting Steam by request..."
	exec "$0" "$@"
fi
