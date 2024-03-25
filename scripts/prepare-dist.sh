#!/bin/bash

(
  cd "start" && npx nx run-many --target build
) &

(
  cd "start/apps/chapter10/ng-jest-setup" && npm run build
) &

(
  cd "start" && npx nx build ng-pwa-app-shell
) &

(
  cd "start/apps/chapter13/ng-pwa-conversion" && npm run build
) &

(
  cd "final" && npx nx run-many --target build
) &

(
  cd "final/apps/chapter10/ng-jest-setup" && npm run build
) &

(
  cd "final" && npx nx build ng-pwa-app-shell
) &

(
  cd "final/apps/chapter13/ng-pwa-conversion" && npm run build
) &

wait # Wait for all background processes to complete


# Define the root directory, adjust this path according to your actual root directory location
ROOT_DIR="./"

# Loop through each folder in <root>/start/dist/apps/ to get chapter names dynamically
for CHAPTER_PATH in "${ROOT_DIR}/start/dist/apps/"*; do
    # Extract the chapter name from the path
    CHAPTER_NAME=$(basename "$CHAPTER_PATH")

    # Now loop through each app within the chapter
    for APP_PATH in "${CHAPTER_PATH}"/*; do
        # Extract the app name from the path
        APP_NAME=$(basename "$APP_PATH")

        # Define source and destination paths for the start folder
        SRC_START="${ROOT_DIR}/start/dist/apps/${CHAPTER_NAME}/${APP_NAME}"
        DEST_START="${ROOT_DIR}/dist/apps/${CHAPTER_NAME}/${APP_NAME}/start"

        # Ensure the destination directory exists
        mkdir -p "$DEST_START"

        # Copy everything from the source to the destination
        cp -r "${SRC_START}/." "$DEST_START"

        echo "Copied start content for ${CHAPTER_NAME}/${APP_NAME}"
    done
done

# Repeat the process for the final folder
for CHAPTER_PATH in "${ROOT_DIR}/final/dist/apps/"*; do
    CHAPTER_NAME=$(basename "$CHAPTER_PATH")

    for APP_PATH in "${CHAPTER_PATH}"/*; do
        APP_NAME=$(basename "$APP_PATH")

        SRC_FINAL="${ROOT_DIR}/final/dist/apps/${CHAPTER_NAME}/${APP_NAME}"
        DEST_FINAL="${ROOT_DIR}/dist/apps/${CHAPTER_NAME}/${APP_NAME}/final"

        mkdir -p "$DEST_FINAL"
        cp -r "${SRC_FINAL}/." "$DEST_FINAL"

        echo "Copied final content for ${CHAPTER_NAME}/${APP_NAME}"
    done
done

cp dist-app/* ./dist/apps
