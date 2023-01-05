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

if [ -z "$3" ]; then
  echo "App Title not provided" >&2
  exit 1
fi

CHAPTER="chapter$1"
APP_NAME=$2
APP_FULL_NAME=`echo "$CHAPTER/$APP_NAME" | sed -r 's/[/]+/-/g'`
APP_TITLE=$3

echo "creating project for start"
cd "start" && npx nx g @codewithahsan/ng-cookbook-recipe:ng-cookbook-recipe "$APP_NAME" --title="$APP_TITLE" --directory="$CHAPTER" --style scss --routing --e2eTestRunner none --skipDefaultProject --addTailwind
npx nx run "$APP_FULL_NAME:rename"

if [ "$4" == "both" ]; then
  echo "creating project for final as well"
  cd .. && cd "final" && npx nx g @codewithahsan/ng-cookbook-recipe:ng-cookbook-recipe "$APP_NAME" --title="$APP_TITLE" --directory="$CHAPTER" --style scss --routing --e2eTestRunner none --skipDefaultProject --addTailwind
  npx nx run "$APP_FULL_NAME:rename"
fi
