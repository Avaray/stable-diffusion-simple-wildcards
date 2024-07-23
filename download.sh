#!/bin/bash

# Usage:
# wget -qO- https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/main/download.sh | bash -s -- wget
# curl -sL https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/main/download.sh | bash -s -- curl

if [ -z "$1" ]; then
    echo "Download tool not specified"
    exit 1
fi

REPO_URL="https://github.com/Avaray/stable-diffusion-simple-wildcards/"
REPO_URL_API="https://api.github.com/repos/Avaray/stable-diffusion-simple-wildcards/contents/"
ZIP_URL="https://github.com/Avaray/stable-diffusion-simple-wildcards/archive/refs/heads/main.zip"

DOWNLOAD_TOOL="$1"
DOWNLOAD_COMMAND=""
METHOD=1
DONE=0

# determine download command based on download tool
if [ "$DOWNLOAD_TOOL" == "wget" ]; then
    DOWNLOAD_COMMAND="wget -qO-"
elif [ "$DOWNLOAD_TOOL" == "curl" ]; then
    DOWNLOAD_COMMAND="curl -sL"
else
    echo "Unsupported download tool"
    exit 1
fi

# Default download method 
echo "Trying default download method"
$DOWNLOAD_COMMAND $REPO_URL_API | grep -o 'https://[^"]*.txt' | xargs -n 1 -P 8 wget -q -P . -nc
if [ $? -eq 0 ]; then
    DONE=1
else
    METHOD=$((METHOD+1))
fi

# check if DONE is set to 1
if [ $DONE -eq 0 ]; then
    echo "No luck"
    exit 1
elif [ $DONE -eq 1 ]; then
    echo "Success"
    exit 0
fi
