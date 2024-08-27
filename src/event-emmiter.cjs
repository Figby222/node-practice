const EventEmitter = require("node:events");

const eventEmitter = new EventEmitter();

eventEmitter.on("start", (number, end) => {
    console.log(`started from ${number} to ${end}`);
});

eventEmitter.emit("start", 23, 100);

console.log(eventEmitter.eventNames());
console.log(eventEmitter.getMaxListeners());
console.log(eventEmitter.listenerCount("start"));
console.log(eventEmitter.listeners("start"));

eventEmitter.once("cookies", () => {
    console.log("cookies");
});

eventEmitter.emit("cookies");
eventEmitter.emit("cookies");

eventEmitter.removeAllListeners("start");

eventEmitter.emit("start", 24, 100);

const doSomething = () => {
    console.log("blahblahblah")
};
eventEmitter.on("stuff", doSomething);
eventEmitter.emit("stuff");
eventEmitter.removeListener("stuff", doSomething);

eventEmitter.setMaxListeners(444444);