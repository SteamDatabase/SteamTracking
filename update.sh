#!/bin/bash

php update.php

# TODO: Remove trailing comma
git commit -a -m "`git status --porcelain -z | tr '\0' ', '`"
git push
