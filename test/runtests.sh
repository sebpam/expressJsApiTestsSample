#!/bin/bash
export ENV=docker
node deletePreviousReport
ts-node ./node_modules/mocha/bin/mocha --spec=./specs/*/*.ts
node index.js
