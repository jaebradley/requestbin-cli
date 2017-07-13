# Request Bin CLI

[![codecov](https://codecov.io/gh/jaebradley/requestbin-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/jaebradley/requestbin-cli)
[![Build Status](https://travis-ci.org/jaebradley/requestbin-cli.svg?branch=master)](https://travis-ci.org/jaebradley/requestbin-cli)

## Purpose
[Request Bin](https://requestb.in/) is a pretty cool service - wouldn't it be great to get bin and request details in the command line?

## Installation
Install via NPM

`npm install requestbin-cli`

## Usage

### Create a Bin

`rb create [-c / --copy] [-p / --private]`

* Use the `-c` or `--copy` flag to have the bin id copied to your clipboard.
* Use the `p` or `--private` flag to create a "private" Request Bin.

![alt-text](http://i.imgur.com/0BdqxUy.png)

* Note that there are four required fields:
  * `Bin Id` - this is Request Bin's id for some bin
  * `Requests` - the request count for a given bin
  * `Private` - indicates if a particular bin is private (or not)
  * `Colors` - I don't know what this is but it's part of the response

### Get Bin Details

`rb bin {requestBinId}`

![alt-text](http://i.imgur.com/0BdqxUy.png)

### Get Requests Details

`rb requests {requestBinId}`

![alt-text](http://imgur.com/ALgulYB.png)

* Note that there are three required fields:
  * `Request ID` - this is Request Bin's id for each request in a given bin
  * `Method` - this is the HTTP verb associated with a given request
  * `Executed At` - timestamp associated with a given request

* There are also two optional fields:
  * `Query Parameters` - If a request has any query parameters, they will be listed here
  * `Form Data` - If a request has any form information, they will be listed here

### Get Request Details

`rb request {requestBinId} {requestId}`

![alt-text](http://imgur.com/ipsIlJ9.png)
