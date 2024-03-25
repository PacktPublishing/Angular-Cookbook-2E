#!/bin/bash

# Install dependencies in the first project
cd "./apps/chapter10/ng-jest-setup" && npm i

# Check if the first installation succeeded
if [ $? -eq 0 ]; then
    # Install dependencies in the second project
    cd "../../chapter13/ng-pwa-conversion" && npm i
else
    echo "Installation failed in chapter10/ng-jest-setup, skipping chapter13/ng-pwa-conversion"
    exit 1
fi
