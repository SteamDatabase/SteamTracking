#!/bin/bash

#
# PREPARE EVERYTHING
#

export LC_ALL=C

DIR="$(dirname "$(readlink -f "$0")")"

cd "$DIR/.support"

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

for z in *.zip;
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

mono ProtobufDumper/ProtobufDumper.exe bins/steamui.dylib "$DIR/Protobufs/" > /dev/null
mono ProtobufDumper/ProtobufDumper.exe bins/steamclient.dylib "$DIR/Protobufs/" > /dev/null

echo Dumping structs
./steamclient_tracker/machrec bins/steamclient.dylib "$DIR/Structs/"

#
# BUILDBOT PATHS
#

echo Dumping buildbot paths

#find ubuntu/ | sort > "$DIR/BuildbotPaths/ubuntu_binaries.txt"

for i in $(find bins/ -name '*.dylib');
do
	echo "Dumping $i"
	
	name=$(basename "$i" .dylib);
	
	strings "$i" | grep "/buildbot/" | sed "s/^[^\/]*\//\//" | sed "s/\:[0-9]*$//" | sort -u > "$DIR/BuildbotPaths/$name.txt"
	
	./nm-with-macho -C -p "$i" | grep -Evi "GCC_except_table|google::protobuf|steam_rel_osx_builder" | awk '{$1=""; print $0}' | sort -u > "$DIR/Symbols/$name.txt"
done

strings bins/steamui.dylib | grep "/api/" | sort > "$DIR/API/Storefront.txt"

#
# CHANGE CRAPPY ENCODINGS TO UTF-8
#

cd "$DIR/ClientExtracted/"

echo Fixing encodings

for i in $(find -name '*.txt' -o -name '*.xml' -o -name '*.cfg' -o -name '*.res');
do
	encoding=$(file -bi "$i" | sed -e 's/.*[ ]charset=//');
	
	if [ "$encoding" != "utf-8" ] && [ "$encoding" != "binary" ];
	then
		iconv -f "$encoding" -t UTF-8 "$i" -o "$i.tmp" && mv "$i.tmp" "$i"
	fi
done

#
# CONVERT .TGA AND .ICO TO .PNG
#

#echo Converting images to pngs

#for i in $(find -name '*.tga');
#do
#	convert -strip "$i" "$i.png"
#done
