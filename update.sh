#!/bin/bash

while read p; do
	[ -z "$p" ] && continue
	echo Fetching $p
	curl -b "Steam_Language=english" -f $p -o files/${p##*/}
done < urls.txt

git commit -a -m "test"

