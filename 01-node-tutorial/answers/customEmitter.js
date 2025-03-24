const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit("greet", "Alice");
emitter.emit("greet", "Bob");

emitter.on("timer", (msg) => {
  console.log(`Timer Event Triggered: ${msg}`);
});

setInterval(() => {
  emitter.emit("timer", "hi there");
}, 2000);

emitter.on("start", () => {
  console.log("Start event received!");
  emitter.emit("process");
});

emitter.on("process", () => {
  console.log("Processing started...");
  setTimeout(() => {
    emitter.emit("complete", "Process complete!");
  }, 3000);
});

emitter.on("complete", (msg) => {
  console.log(msg);
});

emitter.emit("start");

const waitForEvent = () => {
  return new Promise((resolve) => {
    emitter.on("happens", (msg) => resolve(msg));
  });
};

const doWait = async () => {
  const msg = await waitForEvent();
  console.log("We got an event! Here it is:", msg);
};

setTimeout(() => {
  emitter.emit("happens", "Hello World!");
}, 5000);

doWait();
