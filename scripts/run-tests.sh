#!/bin/bash

if [ -z $1 ]; then
  echo "error: App Name not provided" >&2
  exit 1
fi

APP_NAME=$1


if [ "$2" == "both" ]; then
  cd "start" && npx nx test "$APP_NAME" &
  cd "final" && npx nx test "$APP_NAME" && kill $!
  exit;
fi

if [ "$2" == "final" ]; then
  cd "final" && npx nx test "$APP_NAME"
  exit;
fi

cd "start" && npx nx test "$APP_NAME" --watch
