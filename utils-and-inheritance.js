const util = require('util');

const Person = function() {
    this.name = "olivier",
    this.age = 25
};

Person.prototype.greet = function() {
    console.log(`Hello ${this.name}, you are ${this.age} years old`)
};

const Employee = function(title) {
    Person.call(this);
    this.title = title;
};

Employee.prototype.greet2 = function() {
    this.greet() + console.log(`You are a ${this.title}`)
}

util.inherits(Employee, Person);

// const olivier = new Person();
// olivier.greet();
const olivier = new Employee("web developper");
olivier.greet2();

// console.log(olivierTitle.__proto__);
// console.log(olivierTitle.__proto__.__proto__);
// console.log(olivierTitle.__proto__.__proto__.__proto__);
