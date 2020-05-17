#!/bin/bash
# Read from the file file.txt and output the tenth line to stdout.
# sed -n 10p file.txt
# head -n 10 "./file.txt" | tail -n +10
cut -d$'\n' -f 10 file.txt