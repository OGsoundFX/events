function Burger() {
    this.ingredients = {};
};

const veggie = new Burger(
);

veggie.ingredients["pattie"] = "beyond meat";
veggie.ingredients["sauce"] = "ketchup";


Burger.prototype.order = function() {
    console.log(`You have ordered a burger with ${this.ingredients["pattie"]} and ${this.ingredients["sauce"]}`)
};

console.log(veggie);

veggie.order();
