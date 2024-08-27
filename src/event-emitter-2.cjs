const events = require("events");
const eventEmitter = new events.EventEmitter();

const myEventHandler = () => {
    console.log("COOKIES");
};

eventEmitter.on("scream", myEventHandler);

eventEmitter.emit("scream");