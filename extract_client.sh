#!/bin/bash

#
# PREPARE EVERYTHING
#

export LC_ALL=C

DIR="$(dirname "$(readlink -f "$0")")"

cd "$DIR/.support" || exit 1

echo Deleting existing files

# Scary!
rm -rf "$DIR"/ClientExtracted/*
rm -rf bins/*
rm -f "$DIR"/BuildbotPaths/*
rm -rf "$DIR"/Protobufs/*

#
# EXTRACT EVERYTHING
#

echo Extracting archives

for z in archives/*.zip;
do
	if [[ "$z" == *"bins"* ]];
	then
		unzip -q -n "$z" -d bins/
	else
		unzip -q -o "$z" -d "$DIR/ClientExtracted/"
	fi
done

#
# PROTOBUF DUMP
#

echo Dumping protobufs

# https://github.com/SteamRE/SteamKit/tree/master/Resources/ProtobufDumper
dotnet ~/ProtobufDumper/ProtobufDumper.dll bins/steamui.dylib "$DIR/Protobufs/" > /dev/null
dotnet ~/ProtobufDumper/ProtobufDumper.dll bins/steamclient.dylib "$DIR/Protobufs/" > /dev/null

~/ValveProtobufs/update.sh

# https://github.com/m4dEngi/steamworks_dumper
echo Dumping structs
./MachoDumper/swdumper bins/steamclient.dylib "$DIR/Structs/"

#
# BUILDBOT PATHS
#

echo Dumping buildbot paths

#find ubuntu/ | sort > "$DIR/BuildbotPaths/ubuntu_binaries.txt"

while IFS= read -r -d '' file
do
	echo "Dumping $file"

	name=$(basename "$file" .dylib);

	strings "$file" | grep "/buildbot/" | sed "s/^[^\/]*\//\//" | sed "s/\:[0-9]*$//" | sort -u > "$DIR/BuildbotPaths/$name.txt"

	./nm-with-macho -C -p "$file" | grep -Evi "GCC_except_table|google::protobuf|steam_rel_osx_builder" | awk '{$1=""; print $0}' | sort -u > "$DIR/Symbols/$name.txt"
done <   <(find bins/ -name '*.dylib' -print0)

strings bins/steamui.dylib | grep "/api/" | sort > "$DIR/API/Storefront.txt"

#
# Jump to extracted folder
#

cd "$DIR/ClientExtracted/" || exit 1

#
# PRETTIFY JAVASCRIPT
#

echo Prettifying javascript

while IFS= read -r -d '' file
do
	echo "Prettifying $file"

	prettier --write "$file"
done <   <(find steamui/ -maxdepth 1 -name '*.js' -print0)

#
# CHANGE CRAPPY ENCODINGS TO UTF-8
#

echo Fixing encodings

while IFS= read -r -d '' file
do
	encoding=$(file -bi "$file" | sed -e 's/.*[ ]charset=//');

	if [ "$encoding" != "utf-8" ] && [ "$encoding" != "binary" ];
	then
		iconv -f "$encoding" -t UTF-8 "$file" -o "$file.tmp" && mv "$file.tmp" "$file"
	fi
done <   <(find . \( -name '*.txt' -o -name '*.xml' -o -name '*.cfg' -o -name '*.res' \) -print0)

