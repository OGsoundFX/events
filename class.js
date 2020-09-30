class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    greet() {
        console.log(`Hello ${this.name}, you are ${this.age} years old`)
    };
};

const olivier = new Person("olivier", 25);
olivier.greet();