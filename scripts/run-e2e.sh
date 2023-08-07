#!/bin/bash

if [ -z $1 ]; then
  echo "error: App Name not provided" >&2
  exit 1
fi

APP_NAME=$1


if [ "$2" == "both" ]; then
  cd "start" && npx nx run "$APP_NAME-e2e:e2e" &
  cd "final" && npx nx run "$APP_NAME-e2e:e2e" && kill $!
  exit;
fi

if [ "$2" == "with-server" ]; then
  cd "start" && npx nx run "$APP_NAME-e2e:e2e" --watch &
  cd "codewithahsan" && npx nx serve "fake-be" && kill $!
  exit;
fi


if [ "$2" == "final" ]; then
  cd "final" && npx nx run "$APP_NAME-e2e:e2e" --watch
  exit;
fi

cd "start" && npx nx run "$APP_NAME-e2e:e2e" --watch
