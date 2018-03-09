# rest-hotels-api [![Build Status](https://travis-ci.org/lexmartinez/rest-hotels-api.svg?branch=master)](https://travis-ci.org/lexmartinez/rest-hotels-api)


:hotel: REST Hotels API: A simple node/express API exercise.

> Created as part of technical test for **mobile dev** role at Hays Recruiting - Almundo.com

### Quick start

```bash
# clone repo
$ git clone https://github.com/lexmartinez/rest-hotels-api

# change directory to cloned app
$ cd rest-hotels-api

# install the dependencies with npm
$ npm install

# start dev server (with live-reload)
$ npm start
```
go to [http://localhost:8080](http://localhost:8080) in your browser.


# Table of Contents

* [Dependencies](#dependencies)
* [Developing](#developing)
* [Environment](#environment)
* [Testing](#testing)
* [Production](#production)
* [Service Endpoints](#service-endpoints)
* [Deployment](#deployment)
    
 ## Dependencies
 
 You'll need to run this app:
 * `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
 * Ensure you're running Node (`v8.9.4`+) and NPM (`5.6.0`+)
 
 ## Developing
 
 After you have installed all dependencies you can now start developing with:
 
 * `npm start`
 
 It will start a local server using `nodemon` which will watch, build (in-memory), and reload for you. The application can be checked at `http://localhost:8080`.
 
 ## Environment
 Environment variables must be configured into `.env` file located at project root

```
DB_URL = localhost:27017/database
DB_USER = username
DB_PASSWORD = password
```````

## Testing

In order to check the coding standard, this project has `eslint` integration to run it use

* `npm run test`

## Production

To build your application, run:

* `npm run build`

You can now go to `/dist` and deploy that to your server!

> You also can run your compiled project locally  using the command `npm run serve`

## Service Endpoints
This REST API includes the following endpoints:

+ getCities
```ruby
    GET: /v1/cities
```

+ getHotels
```ruby
    GET: /v1/hotels
```

+ getHotelsByCity
```ruby
    GET: /v1/hotels?city={city}
```

+ getHotelById
```ruby
    GET: /v1/hotels/{id}
```

## Hotel Schema
The model for our hotel objects is defined as follows:

```json
{
    "name" : "Dummie Hotel",
    "stars" : 3,
    "images" : ["http://dummie-hotel.com/image1.jpg","http://dummie-hotel.com/image2.jpg"],
    "price" : 1596,
    "city": "Paris",
    "address": "Champ de Mars, 5 Avenue Anatole France, 75007",
    "latitude": 48.858093,
    "longitude": 2.294694,
    "country": "France",
    "description": "Sed elementum tempus tellus, a efficitur massa molestie in. Vivamus tempus libero metus, sit amet scelerisque leo mattis eu. Vestibulum et nisl maximus, consequat felis eu, varius erat. Pellentesque fermentum tincidunt dui non porttitor.",
    "website": "http://dummie-hotel.com",
    "phone": "+33 (2) 753 343 43443",
    "email": "contact@dummie-hotel.com",
    "amenities": {
        "wifi": true,
        "pool": false,
        "spa": false,
        "parking": true,
        "ac": false,
        "restaturant": true,
        "bar": true,
        "gym": false
    }    
}
```

## Deployment
A demo for this app is running on Heroku at 

> [https://rest-hotels-api.herokuapp.com/](https://rest-hotels-api.herokuapp.com/)

###### Deploy powered by [TravisCI](https://travis-ci.org/) & [Heroku](https://heroku.com)
###### Dummy Generated Data powered by [JSON Generator](https://www.json-generator.com/)

> Demo data is a lot of dummy information, thus the different addresses, locations, phones and so on not match any real hotel