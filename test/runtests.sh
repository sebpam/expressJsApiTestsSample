#!/bin/bash
ts-node ./node_modules/mocha/bin/mocha --spec=./specs/*/*.ts
node index.js