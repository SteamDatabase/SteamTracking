#!/bin/bash

unzip -j "steam.apk" "assets/index.android.bundle" -d "."
mv index.android.bundle Scripts/WebUI/steammobile_app.js
npm run prettier Scripts/WebUI/steammobile_app.js
