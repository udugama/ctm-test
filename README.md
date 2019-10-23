# Credit Card Verify API

# About the test dspecifications

* Strongly typesd typescipt Langage been used.
* `VS Code` Editor is used with typescipt and tslint plugin.
* Request specification is upgraded to give more context the the verify request.
* Docker files to run the app in the dockerised environmentfor portability.
* Mongo db database is used and saved every request for demonstration pupose.
* Request and Response Schema and type validations in place to demonstrate the utilization of json schema.
* Jest Test suite is implimented to run unit tests.

## intro

Enpoing is developed using `koa.js` framework and mongodb document database.

Code is written in Typescript and compilation is performed using typescript engine.

Typescript linter is avalable in the project in order to ensure coding standards and can be ran typing `yarn lint`.

Note: yarn package manager is used to lock the package versions and npm is used within the docker images to start node server.

## Endponts

* POST /creditcard/verify - create a Pet with the given payload.

## Payload Validations

For the endpoing request and response payload validations `vlc`  `json schema` validation tool have been used. any violation of these rules will return 422 error response from the api;

## Seting Up the project

follow following set of steps to setup the project

* Clone the project.
* Make sure computer has node v10 or greater.
* Install yarn by typing following command `npm install -g yarn`.
* Run command `yarn install` to install.

### Unit Tests

Number of Demonstrative tests avalable under the `jest` test suit.

* Make sure npm modules exist if not run `yarn install`.
* Run `yarn test`

### Starting up Service

* Run `yarn build` to compile the typescipt.
* Make sure the host mashine has latest version of docker running.
* Run start run `docker-compose up` to stand up docker infrastructure.
* Test sending a request to the api endpoint. {refer to API Test section below to send request to test the api}

Note: On error deploying docker setup try removing all existing images with same name.

### API Test

* Download and install Postman from following website <https://www.getpostman.com>.
* Import following postman file to the postman <resources/postman/test.postman_collection.json>.
* Endpoint request payload body is as follows:

```{
 "customerId": 1,
 "document": "creditcard",
 "type": "Visa",
 "name": "Prasad S Udugama",
 "number": 4408041234567893,
 "csv": 120
}```

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
