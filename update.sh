#!/bin/bash

while read p; do
	[ -z "$p" ] && continue
	echo Fetching $p
	curl -f $p -o files/${p##*/}
done < urls.txt

#git push or something
