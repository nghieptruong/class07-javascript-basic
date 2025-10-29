// 1. Destructuring Array
const arr1 = [1 , 2, 3];
console.log(arr1[0]);
let x = arr1[0];
let y = arr1[1];
let z = arr1[2];

//viết lại bằng destructuring
let [a, b, c] = arr1;
console.log(a);
console.log(b);
console.log(c);

//nhu cầu bạn chỉ muốn lấy phần tử đầu tiên
//lấy phần còn lại vào 1 array khác (biến khác)
let [m, ...n] = arr1;
console.log(m);
console.log(n);
console.log(typeof n);

//2. Destructuring object
const person = {
    name: "John",
    age: 20
}
// let name = person.name;
// let age = person.age;

//viết lại bằng destructuring
let {name: first_name, age: years} = person;
console.log(first_name); // John
console.log(years); // 20
