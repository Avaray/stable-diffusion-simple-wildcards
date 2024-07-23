#!/bin/bash

# Usage:
# wget -qO- https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/main/download.sh | bash -s -- wget
# curl -sL https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/main/download.sh | bash -s -- curl
SUPPORTED_DOWNLOAD_TOOLS=("wget" "curl")
SUPPORTED_ZIP_TOOLS=("unzip" "tar")

# Check if download tool is specified
if [ -z "$1" ]; then
    echo "Please specify download tool"
    exit 1
elif [[ ! " ${SUPPORTED_DOWNLOAD_TOOLS[@]} " =~ " $1 " ]]; then
    echo "Unsupported download tool"
    exit 1
fi

DOWNLOAD_TOOL="$1"
DOWNLOAD_COMMAND=""

REPO_URL="https://github.com/Avaray/stable-diffusion-simple-wildcards/"
REPO_URL_API="https://api.github.com/repos/Avaray/stable-diffusion-simple-wildcards/contents/"
ZIP_URL="https://github.com/Avaray/stable-diffusion-simple-wildcards/archive/refs/heads/main.zip"

SUCCESS=0

# Default download method
if [ "$DOWNLOAD_TOOL" == "wget" ]; then
    wget -qO- $REPO_URL_API | grep -o 'https://[^"]*.txt' | xargs -n 1 -P 10 wget -q -P . -nc && SUCCESS=1
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

# Check if any of the supported zip tools are installed and use the first one found
for ZIP_TOOL in "${SUPPORTED_ZIP_TOOLS[@]}"; do
    if command -v $ZIP_TOOL &> /dev/null; then
        ZIP_TOOL_FOUND="$ZIP_TOOL"
        break
    fi
done

# Extract downloaded files
if [ -z "$ZIP_TOOL_FOUND" ]; then
    echo "No supported zip tool found"
    exit 1
else
    echo "Using $ZIP_TOOL_FOUND to extract files"
    if [ "$ZIP_TOOL_FOUND" == "unzip" ]; then
        unzip -oq '*.txt'
    else
        tar xf '*.txt'
    fi
fi

# Check if files are extracted successfully
if [ $? -eq 0 ]; then
    echo "Wildcard files extracted successfully"
    exit 0
else
    echo "Failed to extract wildcard files"
    exit 1
fi
