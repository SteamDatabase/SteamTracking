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
rm -rf linux_bins/*
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
	unzip -lv "$z" | head -n-2 | tail -n+4 | awk '{print $(NF-1),$NF}' >> $DIR/ClientExtracted/ClientContentWindows.txt
done

for z in linux_archives/*.zip;
do
	if [[ "$z" == *"bins"* ]];
	then
		unzip -q -n "$z" -d linux_bins/
	fi
	unzip -lv "$z" | head -n -2 | tail -n+4 | awk '{print $(NF-1),$NF}' >> $DIR/ClientExtracted/ClientContentLinux.txt
done

sort -k 2 -o $DIR/ClientExtracted/ClientContentWindows.txt{,}
sort -k 2 -o $DIR/ClientExtracted/ClientContentLinux.txt{,}

#
# PROTOBUF DUMP
#

echo Dumping protobufs

# https://github.com/SteamRE/SteamKit/tree/master/Resources/ProtobufDumper
~/ProtobufDumper/ProtobufDumper bins/steamui.dylib "$DIR/Protobufs/" > /dev/null
~/ProtobufDumper/ProtobufDumper bins/steamclient.dylib "$DIR/Protobufs/" > /dev/null

# https://github.com/m4dEngi/steamworks_dumper
echo Dumping structs
#./steamworks_dumper/build/steamworks_dumper "linux_bins/ubuntu12_32/steamui.so" "$DIR/Structs/"
#./steamworks_dumper/build/steamworks_dumper "linux_bins/ubuntu12_32/steamclient.so" "$DIR/Structs/"

#
# BUILDBOT PATHS
#

echo Dumping buildbot paths

while IFS= read -r -d '' file
do
	echo "Dumping $file"

	name=$(basename "$file" .dylib);

	strings "$file" | grep "/buildbot/" | sed "s/^[^\/]*\//\//" | sed "s/\:[0-9]*$//" | sort -u > "$DIR/BuildbotPaths/$name.txt"
	./macho-strings/macho-strings -binary "$file" > "$DIR/Strings/$name.txt"

	if [ $? -ne 0 ]; then
		strings "$file" > "$DIR/Strings/$name.txt"
	fi

	./nm-with-macho -C -p "$file" | grep -Evi "GCC_except_table|google::protobuf|steam_rel_osx_builder" | awk '{$1=""; print $0}' | sort -u > "$DIR/Symbols/$name.txt"
done <   <(find bins/ -name '*.dylib' -print0)

./macho-strings/macho-strings -binary "$DIR/ClientExtracted/steam_osx" > "$DIR/Strings/steam_osx.txt"

#
# Jump to extracted folder
#

ProcessClientFolder()
{
	#
	# PRETTIFY JAVASCRIPT
	#

	echo Prettifying javascript

	while IFS= read -r -d '' file
	do
		if [[ "$file" == *.js ]]
		then
			php "$DIR/extract_json_from_webpack.php" "$(pwd)/$file"
			if [ $? -eq 200 ]
			then
				echo "Extracted json from $file"
				continue
			fi
		fi

		echo "Prettifying $file"

		npm run prettier "$(pwd)/$file"
	done <   <(find steamui/ clientui/ \( -name '*.js' -o -name '*.css' \) -print0)

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
}

cd "$DIR/ClientExtracted/" || exit 1
ProcessClientFolder
