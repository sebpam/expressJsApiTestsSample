# Sample Rest API built with ExpressJs and associated Typescript automated tests



## Installation
### Prerequisites:

- Installation of Nodes js https://nodejs.org/en/
- Installation of docker https://www.docker.com/
- Installation of VScode https://code.visualstudio.com/ or Git https://git-scm.com/downloads


-----

## Docker
### Steps:

- From the root of the directory 

```
docker compose build
docker compose up
```

- Reports are viewable @ http://localhost:8080/report/apiTestsResults
-----



-----
-----

## Local host
### Steps:
- Clone repository from https://github.com/sebpam/expressJsApiTestsSample
- Run the following commands sequentially:

```
npm i -g mocha
npm i -g ts-node
cd ./src
npm install
cd ../test
npm install
cd ..
```


-----

## App run
### Steps:

- Assuming GitBash or VS code Bash Terminal is in use, run the command below to start the app in detached mode:
```
cd ./src
nohup node index.js &
cd ..
```
- Verify that the ExpressJs app is running by navigating to its associated swagger page: http://localhost:3000/api-docs/

-----

## Tests run
### Steps:

```
cd ./test
npm run test
cd ..
```

-----
## Viewing Report
### Steps:

- Ensure no reports are displayed: http://localhost:8080/report/apiTestsResults 
- Command below can ensure that the report is cleared before tests run
```
node deletePreviousReport.js
```

```
nohup node ./test/index.js &
```
- Navigate to http://localhost:8080/report/apiTestsResults
- A validation bug has been left in place to demo test failures


-----