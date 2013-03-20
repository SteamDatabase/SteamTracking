#!/bin/bash

#test

php update.php

git commit -a -m "`git status --porcelain`"
git push
