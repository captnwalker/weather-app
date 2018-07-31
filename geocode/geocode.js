const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address)

  // Request to Google.Map.API
  request({
    url: `https://www.google.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {

    // Error checking statements
    if (error) {
      callback('Unable to connect to Google Servers.')

    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to locate that address. Please enter a vaild address, city or zip code.')

    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};


module.exports.geocodeAddress = geocodeAddress;