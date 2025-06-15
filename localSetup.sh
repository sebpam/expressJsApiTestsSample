#!/bin/bash
#!/bin/bash
npm i -g mocha
npm i -g ts-node
cd ./src
npm install
cd ../test
npm install
cd ../src
nohup node index.js &
cd ../test
node deletePreviousReport.js
npm run test
nohup node index.js &