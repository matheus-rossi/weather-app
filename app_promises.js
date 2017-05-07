const yargs = require("yargs");
const axios = require("axios");

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: "address",
            describe: "Look weather for",
            string: true
        }
    })
    .help()
    .alias("help", "h")
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === "ZERO_RESULTS") {
        throw new Error("Unable to find address");
    }
    var lat = response.data.results[0].geometry.location.lat
    var lon = response.data.results[0].geometry.location.lng

    var weatherUrl = `https://api.darksky.net/forecast/12a5964c341744399587fe4356ae1475/${lat},${lon}`;
    console.log(response.data.results[0].formatted_address);

    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`Temperature is: ${temperature} and apparentTemperature is: ${apparentTemperature}`);
}).catch((e) => {
    if (e.code === "ENOTFOUND") {
        console.log("Unable to connect");
    } else {
        console.log(e.message);
    }
});