#!/usr/bin/env bash

style=$1
shift

case "$style" in
--error)
	title=$"Error"
	;;
--warning)
	title=$"Warning"
	;;
--explicit)
    title=$1
    shift
    zenity_args=$1
    shift
    ;;
*)
	title=$"Note"
	;;
esac

# Show the message on standard output, for logging
echo "$title: $*"

if [ "$zenity_args" = "" ]; then
    zenity_style=$style
    zenity_text1=--text=
    zenity_text2="$*"
fi

if ! zenity $zenity_style $zenity_text1"$zenity_text2" $zenity_args 2>/dev/null; then
	# Save the prompt in a temporary file because it can have newlines in it
	tmpfile="$(mktemp || echo "/tmp/steam_message.txt")"
	echo -e "$*" >"$tmpfile"
	xterm -bg "#383635" -fg "#d1cfcd" -T "$title" -e "cat $tmpfile; echo -n 'Press enter to continue: '; read input" 2>/dev/null || \
		(echo "$title:"; cat "$tmpfile"; echo -n 'Press enter to continue: '; read input)
	rm -f "$tmpfile"
fi
