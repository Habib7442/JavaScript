// What are call, apply and bind methods ?
//  call, apply and bind are the methods available on every function in JavaScript.
//  They are used to set the this value independent of how the function is called.
//  They are used to borrow methods from other objects.
//  They are used to invoke functions and pass arguments in different ways.
//  They are used to create functions that can be called later in different ways.


// call method

let person1 = {
    name: "John",
    age : 20,
    greet: function(country) {
        console.log(`Hello ${this.name} from ${country}`);
    }
}

person1.greet("USA");

let person2 = {
    name: "Mary",
    age : 25
}

person1.greet.call(person2, "India");

// apply method

let person3 = {
    name: "Habib",
    age : 20,
    greet: function(country, state) {
        console.log(`Hello ${this.name} from ${country}, ${state}`);
    }
}

person3.greet.apply(person3,["India", "Assam"]);

// bind method

let person4 = {
    name: "John",
    age : 20,
    greet: function(country) {
        console.log(`Hello ${this.name} from ${country}`);
    }
}

let greet = person4.greet.bind(person4, "India");
greet();