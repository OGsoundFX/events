const obj = {
    name: "olivier",
    greet: function(city, weather) {
        console.log(`Hello ${this.name}. Welcome to ${city}, the weather is ${weather}`);
    }
};

obj.greet("Tokyo", "Monsoon");
obj.greet.call({name: "sarah"}, "berlin", "sunny");
obj.greet.apply({name: "caroline"}, ["paris", "rainy"]);