# Sample Rest API built with ExpressJs and associated Mocha Tests

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

## No Docker
### Steps:
- Clone repository from https://github.com/sebpam/expressJsApiTestsSample
- From GitBash or VS Code Bach terminal option, Run the following command:

```
localSetup.sh
```
- Swagger page for mock api @ http://localhost:3000/api-docs/
- Reports are viewable @ http://localhost:8080/report/apiTestsResults


-----