# Instructions

## Overview
Basic app that puts focus on integration and webpack. User can enter a 
URL pointing to an online news or blog article written in either Spanish or English.
MeaningCloud API is then used to perform NLP on this text providing 
multiple sentiment predictions.

https://www.meaningcloud.com/developer/sentiment-analysis

## Setup
Run ``npm install``

Client side run ``npm run build-dev`` to start webpack dev server. Runs on localhost:8080.

Server side run ``npm run start`` to start node server. Runs on localhost:8081

## Tests
There is no mocking for local API. So start server with ``npm run start`` first.

Then run ``npm run test``

## Validation
Validation with appropriate error messages is provided for both url and language selection.

## Routes
Single POST route ``/sentiment``