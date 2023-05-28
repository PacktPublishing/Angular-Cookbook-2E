#!/bin/bash

rm -rf start/globals/style.scss
rm -rf final/globals/style.scss
cp codewithahsan/packages/ng-cookbook-recipe/src/styles/globals.scss ./start/globals
mv ./start/globals/globals.scss ./start/globals/styles.scss

cp codewithahsan/packages/ng-cookbook-recipe/src/styles/globals.scss ./final/globals
mv ./final/globals/globals.scss ./final/globals/styles.scss

