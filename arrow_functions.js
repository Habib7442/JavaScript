// What are arrow functions ?

// Arrow functions are a new way to write anonymous function expressions.
// They are also called fat arrow functions because they use a double arrow (=>) for their syntax.
// They are introduced in ES6 (ES2015), and are syntactically different from normal function expressions.
// They are a way to write shorter function expressions compared to the traditional function declaration syntax.

// Basic Syntax

const functionName = (parameter) => {
  // code to be executed
  return value;
};

// And for single-expression arrow functions, you can omit the curly braces and the return statement:

const funcName = (parameter) => expression;

// Example

const addNormalFunction = (a, b) => {
  return a + b;
};

const addArrowFunction = (a, b) => a + b;

console.log(addNormalFunction(2, 3)); // Output: 5
console.log(addArrowFunction(2, 3)); // Output: 5
