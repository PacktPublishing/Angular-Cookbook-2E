#!/bin/bash

if [ -z $1 ]; then
    echo "error: App Name not provided" >&2
    exit 1
fi

APP_NAME=$1

if [ "$2" == "both" ]; then
    cd "start" && nx build "$APP_NAME"
    cd "final" && nx build "$APP_NAME"
    exit;
fi

if [ "$2" == "with-stats" ]; then
    cd "start" && nx build "$APP_NAME" --stats-json
    exit;
fi

if [ "$2" == "with-server" ]; then
    cd "start" && nx build "$APP_NAME" &
    cd "codewithahsan" && nx build "fake-be" && kill $!
    exit;
fi

if [ "$2" == "final" ]; then
    cd "final" && nx build "$APP_NAME" && kill $!
    exit;
fi

cd "start" && nx build "$APP_NAME"
