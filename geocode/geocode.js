const request = require("request");

var geocodeAddress = (address, callback) => {
    const local = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${local}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Something went wrong about the connection");
        } else if (body.status === "ZERO_RESULTS") {
            callback("Cannot find this adress");
        } else if (body.status === "OK") {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        };
    });
}

module.exports = {
    geocodeAddress
}