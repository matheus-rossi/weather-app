const request = require("request");

var getWeather = (lat, lon, callback) => {
    request({
        url: `https://api.darksky.net/forecast/12a5964c341744399587fe4356ae1475/${lat},${lon}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback("Unable to fetch weather");
        }
    });
};

module.exports.getWeather = getWeather;