console.log("A");

console.log("B");

setTimeout(() => {
    console.log("2");
}, 1000)

calc();

console.log("C");

 function calc() {
    //Script handle in a period time (5mins)
    //............
    console.log("Calculation finish!")
}