#!/bin/bash

re='^[0-9]+$'
if ! [[ $1 =~ $re ]]; then
  echo "error: Chapter is not a number" >&2
  exit 1
fi

if [ -z $2 ]; then
  echo "error: App Name not provided" >&2
  exit 1
fi

CHAPTER="chapter$1"
APP_NAME=$2

mkdir -p "final/apps/$CHAPTER"

rm -rf "final/apps/$CHAPTER/$APP_NAME"
cp -r "start/apps/$CHAPTER/$APP_NAME" "final/apps/$CHAPTER"

echo "Copied $CHAPTER/$APP_NAME to final"
