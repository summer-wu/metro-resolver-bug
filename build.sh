#!/bin/bash
SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPTDIR/rn_app_plain_js"
node_modules/.bin/react-native bundle --entry-file index.js  --platform ios --dev false  --bundle-output bundleOut/index.ios.bundle
