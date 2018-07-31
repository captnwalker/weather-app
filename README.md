# CLI Weather Apps

## A simple CLI weather app built with Node - 2 versions

> This repo contains 2 different versions of a similar asynchronous, javascript weather app. Both use Google Maps to resolve location based on input of a zip code, city name, or full street address; and both pull the local weather from the Dark Sky API. Steps to deploy locally are below.
1. `app.js` has the code broken into 3 seperate files, has been programmed to pull in additional weather information and has CLI output styled with the Chalk npm. Run command is `node app.js -a "[city or zip code]"`
2. `app-promises.js` is a single file with dependecies. The Axios npm dependency allows *promises* to be used. Run command is `node app-promises.js -a "[city or zip code]"`

### Screenshot of project v1 (app.js)

![WeatherApp](https://raw.github.com/captnwalker/weather-app/master/img/screenshot.gif "WeatherApp")

### Tech Stack

- NodeJS
- JavaScript
- Google Maps API
- Dark Sky Weather API
- Request
- Yargs
- Chalk (v1 only)
- Axios (v2 only)

### Steps to deploy this project locally

1.  Clone this repo
2.  Run `npm install` to re-build dependencies
3.  Available Flags: `-a` = address/city/zip_code || `-h` = help
4.  v1 - From the root of the project, in a cli, run `node app.js -a "[city or zip code]"`
5.  v2 - From the root of the project, in a cli, run `node app-promises.js -a "[city or zip code]"`

#### Created August 2018, MIT