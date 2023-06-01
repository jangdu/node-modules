let num = 1;

// 몇초마다 {}안 반복
const interval = setInterval(() => {
  console.log(num++);
}, 1000);

// 6초뒤 interval그만
setTimeout(() => {
  clearInterval(interval);
}, 6000);
