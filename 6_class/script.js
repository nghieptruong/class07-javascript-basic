class Person {

    name;
    age;

    constructor(name = "John", age = 20) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    print() {
        // console.log("name = " + this.name + " age = "+ this.age); // name = John age = 20
        console.log(`name = ${this.name}  age = ${this.age}`);
    }
}

let p = new Person();
console.log(p);
p.print(); // name = John  age = 20

let p2 = new Person("Tom", 30);
p2.print();