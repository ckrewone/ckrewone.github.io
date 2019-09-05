#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR
cd ..

rm -rf ./css ./img ./js ./index.html
echo Deleted old bundle
cp ./dist/* ./
echo Moved new version
git add .
git commit -m "Deploy"
git push
echo Deploy finished
