console.log("Hello");
console.log("Javascript");
console.log("Typescript 123");

// Variables trong javascript: let, const, var
// 1. var
console.log(x); // in ra undefined (hoisted|hoisting)
var x = 1;

// Khái niệm: Temporal Dead Zone (TDZ) là gì?

// TDZ (Temporal Dead Zone) là khoảng thời gian từ khi biến được "hoisted" (nâng lên đầu phạm vi) đến khi biến được khởi tạo (initialized).

// Trong khoảng thời gian đó, nếu bạn cố gắng truy cập biến let hoặc const, JavaScript sẽ báo lỗi ReferenceError (vì ko có giá trị mặc định nào).

//var cho phép khai báo lại
var x = 2;
x = 3;

// Giải thích:
// var x; //mặc định là undefined
// console.log(x);
// x = 1;

//2. let
// console.log(y); // ReferenceError
// let y = 2;

// Giải thích:
// let x; // mặc định là ko có giá trị
// console.log(x); // ReferenceError
// x = 1;

let y = 3;
console.log(y); // 3

y = 4; //gán lại giá trị

//3. const: ko thay giá trị
const z = 1;
// z = 2; // báo lỗi Uncaught TypeError: Assignment to constant variable

//let, const phạm vi là block scope
if(true) {
    let a = 1;
    const b = 2;
    var c = 3;
    console.log("a - In block scope: " + a);
    console.log("b - In block scope: " + b);
    console.log("c - In block scope: " + c);
}
// console.log("a - In block scope: " + a); // lỗi is not defined
// console.log("b - In block scope: " + b); // lỗi is not defined
console.log("c - In block scope: " + c); // 3 vì var là function scope

