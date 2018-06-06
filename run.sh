#!/bin/bash

notInstalled="nodejs is not installed."

if [ -x "$(command -v node)" ]; 
then 
    node main.js
else
    echo $notInstalled
    exit 1
fi