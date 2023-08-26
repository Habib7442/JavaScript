// In JavaScript, data types can be broadly categorized into two groups: primitive types 
// and reference types.


// Primitive types
// Primitive types are simple, immutable (cannot be changed) data types that store 
// their values directly. 

// There are six primitive types in JavaScript:

// Number: Represents numeric values, including integers and floating-point numbers.
// String: Represents sequences of characters, such as text.
// Boolean: Represents true or false values.
// Undefined: Represents an uninitialized variable.
// Null: Represents the intentional absence of any object value.
// Symbol: Introduced in ECMAScript 6, represents a unique and immutable value used as object property keys.

// When you work with primitive values, you are dealing with the actual value itself. 
// Primitives are compared by their value.

// Primitive type
let num1 = 10;
let num2 = num1; // num2 is a copy of num1's value


// Reference in JS

// Reference types are more complex and refer to objects that are stored in memory. 
// They are accessed by reference, which means you work with a reference to the 
// memory location where the actual data is stored. There are three main reference 
// types:

// Object: A collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type.
// Array: A specialized object used to store ordered collections of data.
// Function: A special type of object that can be invoked.

let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 references the same array in memory

arr2.push(4);
console.log(arr1); // Outputs: [1, 2, 3, 4] (both variables po
