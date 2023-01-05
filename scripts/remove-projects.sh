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

confirm_remove () {
  while true; do
    read -p "Do you wish to remove this folder \"$CHAPTER/$APP_NAME\" ? " yn
    case $yn in
        [Yy]* ) break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
  done
}

CHAPTER="chapter$1"
APP_NAME=$2

echo "$CHAPTER/$APP_NAME"

confirm_remove

rm -rf "start/apps/$CHAPTER/$APP_NAME"
rm -rf "final/apps/$CHAPTER/$APP_NAME"

echo "$CHAPTER/$APP_NAME removed";
