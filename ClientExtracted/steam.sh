#!/bin/bash

# This file must exist for old bootstrappers to boot into!

OSXVER=`sw_vers -productVersion`
case "$OSXVER" in
    10.0.* | 10.1.* | 10.2.* | 10.3.* | 10.4.* | 10.5.* )
	 osascript - <<'EOF'
	display dialog "Steam Requires OSX 10.6 or greater" buttons "Exit" default button 1 with title "Unsupported Operating System" with icon stop
EOF
	exit -1
	;;
esac  

cd "${0%/*}"
exec ./steam_osx "$@"

