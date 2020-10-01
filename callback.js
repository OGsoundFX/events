const greet = (callback) => {
    console.log("Hello");
    let name = "Olivier";
    callback(name);
};

const callback = (entry) => {
    console.log(`My name is ${entry}`);
};

greet(callback);