// In JavaScript, values can be evaluated in conditions as either "truthy" or "falsy,
// "depending on whether they are considered logically true or false. This concept is 
// essential for understanding how conditions and expressions work in JavaScript.

// All values are truthy unless they are defined as falsy 
// (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

// Example

let value1 = true;
let value2 = 0;
let value3 = '';
let value4 = null;
let value5 = 'Hello';

if (value1) {
  console.log('Value1 is truthy');
}

if (!value2) {
  console.log('Value2 is truthy');
}

if (!value3) {
  console.log('Value3 is truthy');
}

if (value4) {
  console.log('Value4 is falsy');
}

if (value5) {
  console.log('Value5 is truthy');
}

