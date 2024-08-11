#!/usr/bin/env bash

# verbose
#set -x

set -o pipefail
shopt -s failglob
set -u

# Syntax cheat sheet:
# ./steam_msg.sh [--title "title"] --error "error message"
# ./steam_msg.sh [--title "title"] --warning "warn about something"

if [ "$1" == "--title" ]; then
	zenity_title1=--title=
	shift
	zenity_title2="$1"
	shift
else
	zenity_title1=""
	zenity_title2=""
fi

style=$1
shift

case "$style" in
--error)
	style_name=$"Error"
	;;
--warning)
	style_name=$"Warning"
	;;
*)
	echo "$0: invalid command parameters"
	exit 1
esac

# Show the message on standard output, for logging
echo "$style_name: $*"

if [ "${XDG_CURRENT_DESKTOP-}" == "gamescope" ]; then
	echo "FIXME: $0 not functional under gamescope, early out"
	exit
fi

zenity_style=$style
zenity_text1=--text=
zenity_text2="$*"

# STEAM_ZENITY should be setup via steam.sh startup already, execution of this block is not expected
if [ -z ${STEAM_ZENITY-} ]; then
	export SYSTEM_ZENITY="$(which zenity 2>/dev/null)"
	if [ -z ${SYSTEM_ZENITY-} ]; then
		export STEAM_ZENITY="zenity"
	else
		# FIXME: host zenity may fail because of the scout LD_* edits and should be run under SYSTEM_LD_LIBRARY_PATH
		export STEAM_ZENITY="${SYSTEM_ZENITY}"
	fi
fi

if [ -n ${SYSTEM_ZENITY-} ]; then
	# We are actually going to use host zenity per steam.sh or the above, make sure to remove the scout paths
	echo "Using host zenity for message"
	export LD_LIBRARY_PATH="${SYSTEM_LD_LIBRARY_PATH-}"
fi

if ! "${STEAM_ZENITY-}" $zenity_title1"$zenity_title2" $zenity_style $zenity_text1"$zenity_text2" 2>/dev/null; then
	# Save the prompt in a temporary file because it can have newlines in it
	tmpfile="$(mktemp || echo "/tmp/steam_message.txt")"
	echo -e $zenity_title2"\n" > "$tmpfile"
	echo -e "$*\n" >>"$tmpfile"
	xterm -bg "#383635" -fg "#d1cfcd" -T "$style_name" -e "cat $tmpfile; echo -n 'Press enter to continue: '; read input" 2>/dev/null || \
		(echo "$style_name:"; cat "$tmpfile"; echo -n 'Press enter to continue: '; read input)
	rm -f "$tmpfile"
fi
