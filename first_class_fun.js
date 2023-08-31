// What is first class functions in javascript?

// 1. A function can be stored in a variable
// 2. A function can be stored in an array
// 3. A function can be stored in an object
// 4. A function can be passed as an argument to another function
// 5. A function can be returned from another function
// 6. Anonymous functions (functions without names) can also be used as first-class values.

// Example 1: A function can be stored in a variable
function sayHello() {
  return "Hello ";
}
var hello = sayHello(); // Assigning function to a variable
console.log(hello);

// Example 2: A function can be stored in an array
function sayHello() {
  return "Habib ";
}
var arr = [1, 2, 3, sayHello, "John"];
console.log(arr[3]()); // Accessing function from an array


// Example 3: A function can be stored in an object
function sayHello() {
  return "Habib ";
}
var obj = { name: "John", age: 30, sayHello: sayHello };
console.log(obj.sayHello()); // Accessing function from an object

// Example 4: A function can be passed as an argument to another function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Example 5: A function can be returned from another function

function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}
console.log(multiplyBy(2)(3));
