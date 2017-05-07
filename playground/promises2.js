const request = require("request");

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        const local = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${local}`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject("Something went wrong about the connection");
            } else if (body.status === "ZERO_RESULTS") {
                reject("Cannot find this adress");
            } else if (body.status === "OK") {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            };
        });
    });
};

geocodeAddress("88804540").then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});