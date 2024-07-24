#!/bin/bash

# This script downloads wildcard files from the repository
# You need to execute this script in the directory where you want to download the files
# For sd-dynamic-prompts it will be "stable-diffusion-webui/extensions/sd-dynamic-prompts/wildcards/"
# For stable-diffusion-webui-wildcards it will be "stable-diffusion-webui/extensions/stable-diffusion-webui-wildcards/wildcards/"

API_CREDENTIALS=""
if [ -n "$GITHUB_CLIENT" ] && [ -n "$GITHUB_SECRET" ]; then
    echo "GitHub API credentials provided"
    API_CREDENTIALS="?client_id=$GITHUB_CLIENT&client_secret=$GITHUB_SECRET"
fi

SUPPORTED_DOWNLOAD_TOOLS=("aria2c" "wget" "curl")
SUPPORTED_ZIP_TOOLS=("unzip" "tar")

# Check if download tool is specified and if is in SUPPORTED_DOWNLOAD_TOOLS
if [ -z "$1" ]; then
    echo "Please specify download tool"
    exit 1
elif [[ ! " ${SUPPORTED_DOWNLOAD_TOOLS[@]} " =~ " ${1} " ]]; then
    echo "Unsupported download tool $1 (Supported: ${SUPPORTED_DOWNLOAD_TOOLS[@]})"
    exit 1
fi

DOWNLOAD_TOOL="$1"

REPO_URL="https://github.com/Avaray/stable-diffusion-simple-wildcards/"
REPO_URL_API="https://api.github.com/repos/Avaray/stable-diffusion-simple-wildcards/contents/${API_CREDENTIALS}"
ARCHIVE_URL="https://github.com/Avaray/stable-diffusion-simple-wildcards/archive/refs/heads/main.zip"

SUCCESS=0

# Default download method
if [ "$DOWNLOAD_TOOL" == "wget" ]; then
    wget -qO- $REPO_URL_API | grep -o 'https://[^"]*.txt' | xargs -n 1 -P 10 wget -q -P . -nc && SUCCESS=1
elif [ "$DOWNLOAD_TOOL" == "aria2c" ]; then
    # NEED TO DO THIS IN BASH WAY.
    # DOWNLOAD JSON FILE AND THEN EXTRACT URLS FROM IT
    # WORK FOR TOMORROW
    ARIA2_OPTS="-q --allow-overwrite=true"
    aria2c $ARIA2_OPTS $REPO_URL_API -o | grep -o 'https://[^"]*.txt' | xargs -n 1 -P 10 aria2c $ARIA2_OPTS -d . && SUCCESS=1
else
    # TODO: Need to check this, because it take much more time than with wget
    curl -sL $REPO_URL_API | grep -o 'https://[^"]*.txt' | xargs -n 1 -P 10 curl -s -O && SUCCESS=1
fi

# Check if default download method failed
if [ $SUCCESS -eq 0 ]; then
    echo "Default download method failed"
elif [ $SUCCESS -eq 1 ]; then
    echo "Wildcard files downloaded successfully"
    exit 0
fi

# If default download method failed, try to download files using alternative method
# Download zip file and extract files
echo "Trying to download files using alternative method"

# Check if any of the supported zip tools are installed and use the first one found
for ZIP_TOOL in "${SUPPORTED_ZIP_TOOLS[@]}"; do
    if command -v $ZIP_TOOL &> /dev/null; then
        ZIP_TOOL_FOUND="$ZIP_TOOL"
        break
    fi
done

# Give feedback on supported zip tools
if [ -n "$ZIP_TOOL_FOUND" ]; then
    echo "Supported zip tool found: $ZIP_TOOL_FOUND"
else
    echo "No supported zip tool found."
fi

# Download archive file
if [ -n "$ZIP_TOOL_FOUND" ]; then
    ARCHIVE_FILENAME="wildcards.zip"
    if [ "$DOWNLOAD_TOOL" == "wget" ]; then
        wget -q $ARCHIVE_URL -O $ARCHIVE_FILENAME
    elif [ "$DOWNLOAD_TOOL" == "aria2c" ]; then
        aria2c -q $ARCHIVE_URL -o $ARCHIVE_FILENAME
    else
        curl -sL $ARCHIVE_URL -o $ARCHIVE_FILENAME
    fi
    echo "Downloaded archive file $ARCHIVE_FILENAME"
fi

# Extract .txt files from archive
if [ -n "$ZIP_TOOL_FOUND" ]; then
    if [ "$ZIP_TOOL_FOUND" == "unzip" ]; then
        unzip -q $ARCHIVE_FILENAME "*.txt"
    else
        tar -xf $ARCHIVE_FILENAME --wildcards "*.txt"
    fi
fi

# Check if files are extracted successfully
if [ $? -eq 0 ]; then
    echo "Wildcard files extracted successfully"
    SUCCESS=1
else
    echo "Failed to extract wildcard files"
fi

# Clean up archive file
if [ -f "$ARCHIVE_FILENAME" ]; then
    rm $ARCHIVE_FILENAME
fi

# Desperate method: clone repository
if [ $SUCCESS -eq 0 ]; then
    echo "Last chance: cloning repository"
    git clone --depth 1 $REPO_URL
    if [ $? -eq 0 ]; then
        mv stable-diffusion-simple-wildcards/*.txt .
        rm -rf stable-diffusion-simple-wildcards
        echo "Wildcard files"
        SUCCESS=1
    else
        echo "Failed to clone repository"
    fi
fi

# 
if [ $SUCCESS -eq 0 ]; then
    echo "All download methods failed"
    exit 1
else
    exit 0
fi
