const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/8c90be54d03045220f53c9e0166e1e44/${lat}, ${lng}`,
    json: true
  }, (error, response, body) => {

    if (error) {
      callback('Unable to contect to Forecast.io server.');
    } else if (response.statusCode === 404) {
      callback('Unable to fetch weather')
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        windSpeed: body.currently.windSpeed,
        summary: body.currently.summary
      });
    }
  });
};


module.exports.getWeather = getWeather;






// if (!error && response.statusCode === 200) {
  //   console.log(body.currently.temperature);
  // } else {
  //   console.log('Unable to fetch weather');
  // }