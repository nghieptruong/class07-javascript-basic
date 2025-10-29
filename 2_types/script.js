// kiểu dữ liệu cơ bản
// 1. kiểu string
let first_name = "Tom";
console.log(first_name);
console.log(typeof first_name);

// 2. kiểu number
let x = 1;
console.log(typeof x);
let y = 1.5;
console.log(typeof y);

// 3. kiểu boolean
let isFlag = true;
console.log(typeof isFlag);

// 4. kiểu undefined
let z;
console.log(typeof z);

// 5. kiểu null
let w = null; 
console.log(typeof w); //object
console.log(typeof null); // object

// 6. kiểu symbol (ES6)
let m = Symbol("Hello");
let n = Symbol("Hello");
console.log(typeof m); //symbol
console.log(m == n); // false
console.log(m === n); // false

// 7. kiểu bigint
let a = BigInt("1");
console.log(typeof a); //bigint
// bigint có giới hạn min, max ko? ==> ko. lưu con số bao nhiêu cũng dc, nhưng tùy vào cấu hình máy
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

//kiểu dữ liệu tham chiếu (reference)
let person = {
    name: "John",
    age: 20,
    classes: [
        {
            id: "Testing07",
            name: "Fullstack Testing Course"
        },
        {
            id: "AITesting01",
            name: "Gen AI in Testing Course"
        }
    ]
}
console.log(typeof person); //object
console.log(person.name); // John
console.log(person.classes);
console.log(typeof person.classes); //object

//kiểu array (mảng)
let students = ["John", "Tom", "Thomas"];
console.log(typeof students); //object

//kiểu function
function greeting() {
    console.log("Hello");
}
//first-class 
let sayHello = greeting();
let print = function printReport() {
    console.log("Printing...");
};
console.log(typeof print); // function
print(); //Printing...


