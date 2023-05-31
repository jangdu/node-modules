// 브라우저와 다른 node에서의 this

// 함수에서 this는 global을 가리킨다.
function hello() {
  console.log("this in function");
  console.log(this);
  console.log(this === global);
}

hello();

// 클래스에서 this는 그 클래스를 가리킨다.
class A {
  constructor(num) {
    this.num = num;
  }

  memberFunction() {
    console.log("this in classfunction");
    console.log(this);
    console.log(this === global);
  }
}

const a = new A(1);
a.memberFunction();

// 글로벌에서의 this는 module.exports와 같다.
console.log("this in global");
console.log(this);
console.log(this === module.exports);
