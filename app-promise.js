const yargs = require('yargs');
const axios = require('axios');
const chalk = require('chalk');

const argv = yargs

  // Define Flags: -a = address || -h = help
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

// Default location if nothing is entered after the `-a` flag
var defaultAddress = "tierra del fuego";

var encodedAddress = encodeURIComponent(argv.address || defaultAddress);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address.');
  }

  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/8c90be54d03045220f53c9e0166e1e44/${lat}, ${lng}`;
  console.log(chalk.red.bold(response.data.results[0].formatted_address));

  return axios.get(weatherUrl);

}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(chalk.cyanBright(`It's currently ${temperature}. It feels like ${apparentTemperature}.`));

}).catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers.');
  } else {
    console.log(e.message);
  }
}, 4000);

console.log(chalk.yellow('Loading weather info...'));

