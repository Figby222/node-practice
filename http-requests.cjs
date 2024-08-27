const axios = require("axios");
const https = require("https");

const options = {
    hostname: "example.com",
    port: 443,
    path: "/cookies",
    method: "GET",
};

const request = https.request(options, response => {
    console.log(`statusCode: ${response.statusCode}`);

    response.on('data', data => {
        process.stdout.write(data);
    });
});

request.on('error', error => {
    console.log(error);
});

request.end();

axios.get("https://blahblahblah.com")
    .then(response => response.JSON())
    .then(response => console.log(response))
    .catch(console.log);

axios.post("https://blahblahblah.com/cookies", {
    cookies: [ "Chocolate Chip" ]
})
.then(response => {
    console.log(`statusCode: ${response.status}`);
    console.log(response);
})
.catch(error => console.log(error));