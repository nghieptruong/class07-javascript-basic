
//khai bao bien global
var a = 0;
let b =1;

let greeting = function sayHello() {
    let x = 1;
    const y = 2;
    var z = 3;
    console.log(a); // in ra 0
    console.log(b);
}
// console.log(x); //ko truy cap dc x trong function
// console.log(z); //ko truy cap dc y trong function

greeting();


//Default export --> import ở file khác: ko cần giống tên 
// (đặt tên khác dc) 
import calcSum, { multiplyNumbers, doubleNumber } from "./math_utils.js";
let sumNumbers = calcSum(1, 2);
console.log(sumNumbers)

// multiplyNumbers, doubleNumber: gọi là multiple export
//gọi import ở file khác: bỏ trong dấu này {} 
// và bắt buộc cùng tên

