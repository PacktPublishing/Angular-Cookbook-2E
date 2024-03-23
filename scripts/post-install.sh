#!/bin/bash

cd "./apps/chapter10/ng-jest-setup" && npm i --legacy-peer-deps > /dev/null 2>&1 &
pid1=$!

cd "./apps/chapter13/ng-pwa-conversion" && npm i --legacy-peer-deps

kill $pid1 2>/dev/null

exit
