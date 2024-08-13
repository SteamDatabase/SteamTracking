#!/bin/bash

#
# PREPARE EVERYTHING
#

export LC_ALL=C

DIR="$(dirname "$(readlink -f "$0")")"

cd "$DIR/.support" || exit 1

echo Deleting existing files

# Scary!
rm -rf linux_bins/*
rm -rf "$DIR"/ClientExtracted/*
rm -f "$DIR"/BuildbotPaths/*
rm -rf "$DIR"/Protobufs/*

#
# EXTRACT EVERYTHING
#

echo Extracting archives

for z in linux_archives/*.zip;
do
	if [[ "$z" == *"bins"* ]];
	then
		unzip -q -n "$z" -d linux_bins/
	else
		unzip -q -o "$z" -d "$DIR/ClientExtracted/"
	fi

	unzip -lv "$z" | head -n -2 | tail -n+4 | awk '{print $(NF-1),$NF}' >> "$DIR/ClientExtracted/ClientContentLinux.txt"
done

sort -k 2 -o "$DIR/ClientExtracted/ClientContentLinux.txt" "$DIR/ClientExtracted/ClientContentLinux.txt"

#
# PROTOBUF DUMP
#

echo Dumping protobufs

PROTOBUF_DUMPER="$DIR/SteamKit/Resources/ProtobufDumper/ProtobufDumper/bin/Release/linux-x64/publish/ProtobufDumper"

"$PROTOBUF_DUMPER" linux_bins/ubuntu12_32/steamui.so "$DIR/Protobufs/" > /dev/null
"$PROTOBUF_DUMPER" linux_bins/ubuntu12_32/steamclient.so "$DIR/Protobufs/" > /dev/null

# https://github.com/m4dEngi/steamworks_dumper
echo Dumping structs
#./steamworks_dumper/build/steamworks_dumper "linux_bins/ubuntu12_32/steamui.so" "$DIR/Structs/"
#./steamworks_dumper/build/steamworks_dumper "linux_bins/ubuntu12_32/steamclient.so" "$DIR/Structs/"

#
# STRINGS
#

echo Dumping strings

while IFS= read -r -d '' file
do
	echo "Dumping $file"

	name=$(basename "$file" .so)

	"$DIR/DumpStrings/DumpStrings" -target elf -binary "$file" | sort --unique > "$DIR/Strings/$name.txt"
done <   <(find linux_bins/ubuntu12_32/ -name '*.so' -print0)

"$DIR/DumpStrings/DumpStrings" -target elf -binary "$DIR/ClientExtracted/ubuntu12_32/steam" | sort --unique > "$DIR/Strings/steam.txt"

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
	done <   <(find steamui/ clientui/ siteserverui/ \( -name '*.js' -o -name '*.css' \) -print0)

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
