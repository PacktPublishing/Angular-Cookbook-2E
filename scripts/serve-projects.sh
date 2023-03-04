#!/bin/bash

if [ -z $1 ]; then
  echo "error: App Name not provided" >&2
  exit 1
fi

APP_NAME=$1

if [ "$2" == "both" ]; then
  cd "start" && npx nx serve "$APP_NAME" --port=4200 -o &
  cd "final" && npx nx serve "$APP_NAME" --port=4201 -o && kill $!
  exit;
fi

if [ "$2" == "with-server" ]; then
  cd "start" && npx nx serve "$APP_NAME" --port=4200 -o &
  cd "codewithahsan" && npx nx serve "fake-be" && kill $!
  exit;
fi

if [ "$2" == "final" ]; then
  cd "final" && npx nx serve "$APP_NAME" --port=4201 -o && kill $!
  exit;
fi

cd "start" && npx nx serve "$APP_NAME" --port=4200 -o
