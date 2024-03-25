#!/bin/bash

cd "start" && npx nx run-many --target build &
cd "start/apps/chapter10/ng-jest-setup" && rm -rf ./node_modules && npm i && npm run build &
cd "start" && npx nx build ng-pwa-app-shell &
cd "start/apps/chapter13/ng-pwa-conversion" && rm -rf ./node_modules && npm i && npm run build &
cd "final" && npx nx run-many --target build &
cd "final/apps/chapter10/ng-jest-setup" && rm -rf ./node_modules && npm i && npm run build &
cd "final" && npx nx build ng-pwa-app-shell &
cd "final/apps/chapter13/ng-pwa-conversion" && rm -rf ./node_modules && npm i && npm run build
