const axios = require("axios");

axios.get("https://blahblahblah.com")
    .then(response => response.JSON())
    .then(response => console.log(response))
    .catch(console.log);