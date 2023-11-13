#!/bin/bash

if [ -z $1 ]; then
  echo "error: Chapter Name not provided" >&2
  exit 1
fi

if [ -z $2 ]; then
  echo "error: App Name not provided" >&2
  exit 1
fi

CHAPTER_NAME=$1
APP_NAME=$2
PORT=$3

if [ -z $3 ]; then
  npx cross-env PORT=8080
fi

if [ "$4" == "final" ]; then
  npm run build $APP_NAME final &
  npx http-server "final/dist/apps/$CHAPTER_NAME/$APP_NAME" --port=$PORT -o && kill $!
  exit;
fi

npm run build $APP_NAME && npx http-server "start/dist/apps/$CHAPTER_NAME/$APP_NAME" --port=$PORT -o
