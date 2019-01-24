#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs

# if you are deploying to a custom domain
echo "dominicserrano.com" > CNAME
echo "This project is hosted here [dominicserrano.com](https://dominicserrano.com)." > README.md

git init
git add -A
git commit -m "Deploy"

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:dmserrano/dmserrano.github.io.git master

cd ..

# remove the docs directory after a deploy
rm -rf docs