#!/bin/bash

if [ -z $1 ]; then
  echo "error: App Name not provided" >&2
  exit 1
fi

APP_NAME=$1

if [ "$2" == "both" ]; then
  cd "start" && npx nx build "$APP_NAME"
  cd "final" && npx nx build "$APP_NAME"
  exit;
fi

if [ "$2" == "with-stats" ]; then
  cd "start" && npx nx build "$APP_NAME" --stats-json
  exit;
fi

if [ "$2" == "with-server" ]; then
  cd "start" && npx nx build "$APP_NAME" &
  cd "codewithahsan" && npx nx build "fake-be" && kill $!
  exit;
fi

if [ "$2" == "final" ]; then
  cd "final" && npx nx build "$APP_NAME" && kill $!
  exit;
fi

cd "start" && npx nx build "$APP_NAME"
