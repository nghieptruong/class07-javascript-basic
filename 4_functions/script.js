//1. cách khai báo truyền thống
function sayHello() {
    console.log("Hello")
}

//2. function expression
let x = function() {
    console.log("Hello Function Expression");
}

//3. arrow function
let y = () => console.log("Hello Arrow Function");

//Gọi hàm
let z = sayHello;
console.log(typeof z); // function
console.log(z); // in ra nội dung function (xem nội dung)
z(); // gọi hàm 

x();

y();

//Immediately Invoke function (chạy lun)
(function hi() {
    console.log("Hi! How are you?");
})();

//Nested functions (function lồng nhau)
function outer() {
    function inner() {
        console.log("I am inner");
    }
    inner();
}

//gọi hàm
outer();

function outer2() {
    function inner2() {
        console.log("I am inner 2");
    }
    return inner2;
}
let result = outer2(); //function
console.log(typeof result); // function
//gọi hàm
result(); // trả I am inner 2