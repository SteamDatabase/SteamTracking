#!/usr/bin/env bash
#
# This is the Steam script that typically resides in /usr/bin
# It will create the Steam bootstrap if necessary and then launch steam.

# Get the full name of this script
export STEAMSCRIPT="$(cd "${0%/*}" && echo "$PWD")/${0##*/}"

# When this version is incremented a new package will be deployed to:
#	http://repo.steampowered.com/steam
# and an e-mail will be sent to the steam package update mailing list:
#	steamrepo@list.valvesoftware.com
# You can subscribe to this list at:
# 	https://list.valvesoftware.com/mailman/listinfo/steamrepo
export STEAMSCRIPT_VERSION=100048

# Set up domain for script localization
export TEXTDOMAIN=steam

function show_message()
{
	style=$1
	shift
	if ! zenity "$style" --text="$*" 2>/dev/null; then
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

		# Save the prompt in a temporary file because it can have newlines in it
		tmpfile="$(mktemp || echo "/tmp/steam_message.txt")"
		echo -e "$*" >"$tmpfile"
		xterm -T "$title" -e "cat $tmpfile; echo -n 'Press enter to continue: '; read input"
		rm -f "$tmpfile"
	fi
}

function detect_platform()
{
	# Maybe be smarter someday
	# Right now this is the only platform we have a bootstrap for, so hard-code it.
	echo ubuntu12_32
}

function setup_variables()
{
	STEAMPACKAGE="${0##*/}"
	STEAMCONFIG=~/.steam
	STEAMDATALINK="$STEAMCONFIG/$STEAMPACKAGE"
	STEAMBOOTSTRAP=steam.sh
	LAUNCHSTEAMDIR="$(readlink -e -q "$STEAMDATALINK")"
	LAUNCHSTEAMPLATFORM="$(detect_platform)"
	LAUNCHSTEAMBOOTSTRAPFILE="$(dirname "$STEAMSCRIPT")/bootstraplinux_$LAUNCHSTEAMPLATFORM.tar.xz"
	if [ ! -f "$LAUNCHSTEAMBOOTSTRAPFILE" ]; then
		LAUNCHSTEAMBOOTSTRAPFILE="/usr/lib/$STEAMPACKAGE/bootstraplinux_$LAUNCHSTEAMPLATFORM.tar.xz"
	fi

	# Get the default data path
	STEAM_DATA_HOME="${XDG_DATA_HOME:-$HOME/.local/share}"
	case "$STEAMPACKAGE" in
		steam)
			CLASSICSTEAMDIR="$HOME/Steam"
			DEFAULTSTEAMDIR="$STEAM_DATA_HOME/Steam"
			;;
		steambeta)
			CLASSICSTEAMDIR="$HOME/SteamBeta"
			DEFAULTSTEAMDIR="$STEAM_DATA_HOME/SteamBeta"
			;;
		*)
			echo $"Unknown Steam package '$STEAMPACKAGE'"
			exit 1
			;;
	esac

	# Create the config directory if needed
	if [[ ! -d "$STEAMCONFIG" ]]; then
		mkdir "$STEAMCONFIG"
	fi
}

function install_bootstrap()
{
	STEAMDIR="$1"

	# Save the umask and set strong permissions
	omask="$(umask)"
	umask 0077

	echo $"Setting up Steam content in $STEAMDIR"
	mkdir -p "$STEAMDIR"
	cd "$STEAMDIR"
	if ! tar xJf "$LAUNCHSTEAMBOOTSTRAPFILE" ; then
		echo $"Failed to extract $LAUNCHSTEAMBOOTSTRAPFILE, aborting installation."
		exit 1
	fi
	rm -f "$STEAMDATALINK" && ln -s "$STEAMDIR" "$STEAMDATALINK"
	setup_variables

	# put the Steam icon on the user's desktop
	# try to read ~/.config/user-dirs.dirs to get the current desktop configuration
	# http://www.freedesktop.org/wiki/Software/xdg-user-dirs
	test -f "${XDG_CONFIG_HOME:-$HOME/.config}/user-dirs.dirs" && source "${XDG_CONFIG_HOME:-$HOME/.config}/user-dirs.dirs"
	DESKTOP_DIR="${XDG_DESKTOP_DIR:-$HOME/Desktop}"

	if [ -d "$DESKTOP_DIR" ]; then
		cp "/usr/share/applications/$STEAMPACKAGE.desktop" "$DESKTOP_DIR"
		chmod +x "$DESKTOP_DIR/$STEAMPACKAGE.desktop"
	fi

	# Restore the umask
	umask "$omask"
}

function repair_bootstrap()
{
	rm -f "$STEAMDATALINK" && ln -s "$1" "$STEAMDATALINK"
	setup_variables
}

function check_bootstrap()
{
	if [[ -n "$1" && -x "$1/$STEAMBOOTSTRAP" ]]; then
		# Looks good...
		return 0
	else
		return 1
	fi
}

# Don't allow running as root
if [ "$(id -u)" == "0" ]; then
	show_message --error $"Cannot run as root user"
	exit 1
fi

# Look for the Steam data files
setup_variables

if ! check_bootstrap "$LAUNCHSTEAMDIR"; then
	# See if we just need to recreate the data link
	if check_bootstrap "$DEFAULTSTEAMDIR"; then
		echo $"Repairing installation, linking $STEAMDATALINK to $DEFAULTSTEAMDIR"
		repair_bootstrap "$DEFAULTSTEAMDIR"
	elif check_bootstrap "$CLASSICSTEAMDIR"; then
		echo $"Repairing installation, linking $STEAMDATALINK to $CLASSICSTEAMDIR"
		repair_bootstrap "$CLASSICSTEAMDIR"
	fi
fi

if [[ ! -L "$STEAMDATALINK" ]]; then
	# We don't have the data link and we couldn't find an existing bootstrap, so just install the bootstrap
	install_bootstrap "$DEFAULTSTEAMDIR"
elif ! check_bootstrap "$LAUNCHSTEAMDIR"; then
	# We have the data link but we can't find the data, prompt the user
	if zenity --question --text=$"Couldn't find Steam content, did you move it?" --ok-label=$"Search" --cancel-label=$"Reinstall"; then
		while true; do
			STEAMDIR="`zenity --file-selection --directory`"
			if [[ -z "$STEAMDIR" ]]; then
				# User canceled
				exit 0
			fi
			if check_bootstrap "$STEAMDIR"; then
				repair_bootstrap "$STEAMDIR"
				break;
			else
				show_message --error $"Please pick a valid Steam content directory"
			fi
		done
	else
		install_bootstrap "$DEFAULTSTEAMDIR"
	fi
fi

if ! check_bootstrap "$LAUNCHSTEAMDIR"; then
	show_message --error $"Couldn't set up Steam data - please contact technical support"
	exit 1
fi

# go to the install directory and run the client
cp "$LAUNCHSTEAMBOOTSTRAPFILE" "$LAUNCHSTEAMDIR/bootstrap.tar.xz"
cd "$LAUNCHSTEAMDIR"
if [ "`command -v tee`" != "" ]; then
	mkdir -p --mode=777 /tmp/dumps
	exec "$LAUNCHSTEAMDIR/$STEAMBOOTSTRAP" "$@" 2>&1 | tee "/tmp/dumps/${USER}_stdout.txt"
else
	exec "$LAUNCHSTEAMDIR/$STEAMBOOTSTRAP" "$@"
fi
