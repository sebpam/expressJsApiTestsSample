# Sample Rest API built with ExpressJs and associated Typescript automated tests



## Installation
### Prerequisites:

- Installation of Nodes js https://nodejs.org/en/
- Installation of docker https://www.docker.com/
- Installation of VScode https://code.visualstudio.com/ or Git https://git-scm.com/downloads

-----

## Docker
### Steps:

- Clone repository from https://github.com/sebpam/expressJsApiTestsSample
- From the root directory 

```
docker compose build
docker compose up
```

- Swagger page for mock api @ http://localhost:3000/api-docs/
- Reports are viewable @ http://localhost:8080/report/apiTestsResults
-----


-----
-----

## Local host
### Steps:
- Clone repository from https://github.com/sebpam/expressJsApiTestsSample
- From GitBash, Run the following command:

```
localSetup.sh
```
- Verify that the ExpressJs app is running by navigating to its associated swagger page: http://localhost:3000/api-docs/
- Navigate to http://localhost:8080/report/apiTestsResults to see The mocha tests report


-----