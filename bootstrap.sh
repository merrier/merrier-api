#!/bin/bash
CURRENT_DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd $CURRENT_DIR

. ~/.nvm/nvm.sh
nvm use v8.1

sleep 1
pm2 start app.json