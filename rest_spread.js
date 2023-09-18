// What is the rest parameter and spread operator ?

// Rest parameter and spread operator are introduced in ES6 (ES2015).
// They are denoted by three dots (…).
// They look very similar but they are used for different purposes.
// Rest parameter is used to represent an indefinite number of arguments as an array.
// Spread operator is used to split up array elements or object properties.
// Rest parameter is used to merge a list of function arguments into an array.
// Spread operator is used to split up array elements or object properties.

// Rest Parameter Example

function demo(a, b, c, ...d) {
  console.log(a, b, c, d);
}

demo(1, 2, 3, 4, 5, 6, 7); // Output: 1 2 3 [ 4, 5, 6, 7 ]

// Spread Operator Example

function newdemo(a, b, c, d) {
  console.log(a, b, c, d);
}

let arr = [1, 2, 3, 4];

// Now we can pass this array to the function using spread operator

newdemo(...arr); // Output: 1 2 3 4

// Also we can use spread operator to merge two arrays

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
console.log(...arr1, ...arr2); // Output: 1 2 3 4 5 6 7 8

// We can also use spread operator to merge two objects

let obj1 = { name: "John", age: 20 };
let obj2 = { address: "New York", phone: 1234567890 };

let newObj = { ...obj1, ...obj2 };
console.log(newObj); // Output: { name: 'John', age: 20, address: 'New York', phone: 1234567890 }
