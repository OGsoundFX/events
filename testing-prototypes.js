function Burger() {
    this.ingredients = {};
};

const veggie = new Burger();

veggie.ingredients["pattie"] = "beyond meat";
veggie.ingredients["sauce"] = "ketchup";

// a prototype is an object that is attached to an Object Constructor but is not part of it
// In the console.logs bellow we can see that to call the prototype we have to specifically call it
// If we call the object instance, the information stored in the prototype is not
Burger.prototype.drink = "cola"


// see how this works:
console.log(veggie);
console.log(veggie.drink);

const vegan = new Burger();

console.log(vegan);
console.log(vegan.drink);


// Here is an example of how to use a prototype as a funtion
Burger.prototype.order = function() {
    return `You have ordered a burger with ${this.ingredients["pattie"]} and ${this.ingredients["sauce"]}. Your drink is ${this.drink}`;
};

console.log(veggie.order());