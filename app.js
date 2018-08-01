const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(chalk.redBright.bold(results.address));

    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(chalk.magenta.bold(`It's currently ${weatherResults.temperature} F. It feels like ${weatherResults.apparentTemperature} F and the current conditions are ${weatherResults.summary} with a wind speed of ${weatherResults.windSpeed} MPH.`));
      }
    });
  }
}, 4000);

console.log(chalk.yellow('Loading weather info...'));