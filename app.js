const request = require('request');
const yargs = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address)

request({
  url: `https://www.google.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {

  if (error) {
    console.log('Unable to connect to Google Servers.')

  } else if (body.status === 'ZERO_RESULTS') {
    console.log('Unable to locate that address. Please enter a vaild address, city or zip code.')

  } else if (body.status === 'OK') {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }


});