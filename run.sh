#!/bin/bash

notInstalled="nodejs does not installed."

if [ -x "$(command -v node)" ]; 
then 
    node main.js
else
    echo $notInstalled
    exit 1
fi