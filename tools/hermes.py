#!/usr/bin/python3
#-*- encoding: Utf-8 -*-

import sys
import os
from argparse import ArgumentParser

script_dir = os.path.dirname(os.path.abspath(__file__))
parsers_dir = os.path.join(script_dir, 'hermes-dec', 'src', 'parsers')
sys.path.insert(0, parsers_dir)

try:
    from hbc_file_parser import HBCReader
except ImportError as e:
    print(f"Failed to import HBCReader from {parsers_dir}")
    print(f"Error: {e}")
    print(f"Files in directory: {os.listdir(parsers_dir) if os.path.exists(parsers_dir) else 'Directory does not exist'}")
    sys.exit(1)

def main():
    parser = ArgumentParser(description="Extract strings from Hermes bytecode files")
    parser.add_argument('input_file', help='Input Hermes bytecode file')
    parser.add_argument('strings_output', help='Output file for sorted strings')

    args = parser.parse_args()

    with open(args.input_file, 'rb') as file_descriptor:
        hbc_reader = HBCReader()
        hbc_reader.read_whole_file(file_descriptor)

        # Extract strings and sort them, filtering out binary data
        valid_strings = []
        for string in hbc_reader.strings:
            try:
                # Check if string can be encoded as UTF-8 and doesn't contain null bytes
                if '\x00' not in string and string.isprintable():
                    string = string.strip()
                    string.encode('utf-8', errors='strict')
                    valid_strings.append(string)
            except UnicodeEncodeError:
                pass  # Skip strings that can't be encoded as UTF-8

        valid_strings = sorted(valid_strings)

        # Write strings to output file
        with open(args.strings_output, 'w', encoding='utf-8') as f:
            for string in valid_strings:
                f.write(string + '\n')

        print(f"Extracted {len(valid_strings)} valid strings to {args.strings_output}")

if __name__ == '__main__':
    main()

