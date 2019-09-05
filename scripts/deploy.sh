#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR
cd ..

rm -rf ./css ./img ./js ./index.html
echo Deleted old bundle
mv ./dist/* ./
echo Moved new version
rm -rf ./dist
echo Dist deleted

