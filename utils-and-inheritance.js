const util = require('util');

const Person = function() {
    this.name = "olivier",
    this.age = 25
};

const olivier = new Person;


Person.prototype.greet = function() {
    console.log(`Hello ${this.name}, you are ${this.age} years old`)
};

// olivier.greet();

const Employee = function() {
    Person.call(this);
    this.title = "web developper";
};

Employee.prototype.greet2 = function() {
    this.greet() + console.log(`You are a ${this.title}`)
}

util.inherits(Employee, Person);

const newEmployee = new Employee();
//newEmployee.greet();
newEmployee.greet2();

