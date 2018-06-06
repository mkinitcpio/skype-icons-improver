#!/bin/bash

notInstalled="nodejs is not installed."

if [ -x "$(command -v node)" ]; 
then 
    node ./src/main.js
else
    echo $notInstalled
    exit 1
fi