// log level
console.log("log");
console.info("info");
console.warn("warn");
console.error("error");

// 조건이 참이면 출력
console.assert(2 === 2, "same!");

const student = { name: "jangdu", age: 25, school: { name: "dandea" } };
console.log(student);
// 테이블 형식 출력
console.table(student);
// 옵션에 맞게 출력 결과 조절, depth: 오브젝트안에 오브젝트 몇개까지?
console.dir(student, { showHidden: true, colors: false, depth: 0 });

// time과 timeEnd사이에 걸린시간 출력
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop");

// counting: 해당하는 부분 몇번실행됐는지 출력
function a() {
  console.count("a function");
}
a();
// count초기화
console.countReset("a function");
a();

// trace
// 해당 부분 함수 호출한 출처 출력
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  // 이 함수를 불러온 게 누군지 출력함
  console.trace();
}
f1();
