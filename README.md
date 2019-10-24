# Credit Card Verify API

# About the test specifications

* Strongly typed `typescipt` langauge been used.
* Request specification is upgraded to give more context the the verify request.
* `Docker` files to run the app in the dockerised environmentfor portability.
* `Mongodb` database is used and saved every request for demonstration pupose.
* Request and Response Schema and type validations in place to demonstrate the utilization of `json schema`.
* `Jest` Test suite is implimented to run unit tests.
* Integrated tests added to test endpoints end to end functionality and the suite uses `newman` suite.

## intro

Node v10.xx is used for development.

Enpoing is developed using `koa.js` framework and `mongodb` document database.

Code is written in Typescript and compilation is performed using typescript engine.

Typescript linter is avalable in the project in order to ensure coding standards and can be ran typing `yarn lint`.

Note: yarn package manager is used to lock the package versions and npm is used within the docker images to start node server.

## Endponts

* POST /creditcard/verify - calidate credit card numbers and the sample paylload can be found under API Test section in this document.

## Payload Validations

For the endpoing request and response payload validations `vlc`  `json schema` validation tool have been used. any violation of these json schemas for request and response will return 422 error response from the api. Json schemas documents can be refered  from `src/schema` folder in the repository.

## Seting Up the project

follow following set of steps to setup the project

* Clone the project.
* Make sure computer has node v10 or greater.
* Install yarn by typing following command `npm install -g yarn`.
* Run command `yarn install` to install.

### Building Application

This Application requere to be compiled in order to run and the application.

* Make sure npm modules installed.
* Run `yarn build` to compile application.

### Unit Tests

Number of Demonstrative tests avalable under the `jest` test suit.

* Make sure npm modules exist if not run `yarn install`.
* Run `yarn test:unit`

### Unit Tests Coverage

Coverage report is added to jest test suite and and during the test suite run it will produce a coverage report.

Currently coverage is set to low number and used for demonstration purpose.

### Intigration Tests

Number of Demonstrative tests avalable under the `jest` test suit.

* Make sure npm modules exist if not run `yarn install`.
* Run `yarn test:integration`

### Starting up Service

* Run `yarn build` to compile the typescipt.
* Make sure the host computer has latest version of docker running.
* make sure application is build (refer to "Building Application" section above or run `yarn build`.
* Run start run `yarn start-app` to stand up docker infrastructure.
* To stop the server run `yarn stop-app`
* Running `yarn test:integration` will be testing the dockerized application endpoints with postman/newman tests.
* For manual testing test sending a request to the api endpoint. {refer to API Test section below to send request to test the api}

Note: On error deploying docker setup try removing existing images with same name.

### API Test

* Download and install Postman from following website <https://www.getpostman.com>.
* Import following postman file to the postman </Users/prasad.udugama/develop/compare-the-market/resources/postman/comparethmarket.postman_collection.json>.
* This  will create new collection named Compare-the-market and will be able to send request to the server by the tool.
* Endpoint request payload body is as follows:

`{
 "customerId": 1,
 "document": "creditcard",
 "type": "Visa",
 "name": "Prasad S Udugama",
 "number": 4408041234567893,
 "csv": 120
}`

* Endpoint response payload body is as follows:

`{
    "status": "valid",
    "content": {
        "customerId": 1,
        "document": "creditcard",
        "type": "Visa",
        "name": "Prasad S Udugama",
        "number": 4408041234567893,
        "csv": 120
    }
}`

request headers must consist following attribute :

`Content-Type: 'application/json'`
