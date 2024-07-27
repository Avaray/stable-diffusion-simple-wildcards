#!/bin/bash

source_file="DOWNLOAD.md"

cp "$source_file" "$source_file"_backup

markdown_content=$(tac "$source_file" | awk '/###/{flag=1} flag{print; next} {print}' | tac)

wildcards=$(find wildcards -type f -name "*.txt" | sort)

url="https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/main/wildcards/"

wildcards_list_as_markdown=""
for file in $wildcards; do
    name=$(basename "$file" .txt)
    file_path=$(basename "$file")
    wildcards_list_as_markdown+="- [$name]($url$file_path)
"
done

combined_content="$markdown_content 

$wildcards_list_as_markdown"

echo "$combined_content" > "$source_file"

# Check if the file has changed
if ! cmp -s "$source_file" "$source_file"_backup; then
    echo "DOWNLOAD.md has been updated"
    rm "$source_file"_backup
    exit 0
else
    echo "DOWNLOAD.md failed to update"
    exit 1
fi
