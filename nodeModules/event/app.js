// 커스텀이벤트
const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = (arg) => {
  console.log("first callback - ", arg);
};
emitter.on("duho", callback1);

emitter.on("duho", (arg) => {
  console.log("second callback - ", arg);
});

emitter.emit("duho", { message: 1 });
emitter.emit("duho", { message: 2 });
// emitter의 콜백 하나 삭제
emitter.removeListener("duho", callback1);
emitter.emit("duho", { message: 3 });
