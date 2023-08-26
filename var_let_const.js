// Variables

// In JavaScript, variables are used to store and manage data in a program. They act as 
// containers that hold values, which can be of various types such as numbers, strings, 
// objects, functions, and more.


var variableName = value; // Declaration and Initialization

//constants
// In JavaScript, a constant is a type of variable that, once assigned a value, cannot be 
// re-assigned or changed. It provides a way to declare a variable whose value remains 
// constant throughout the program's execution. The const keyword is used to declare 
// constants in JavaScript.

const constantName = value; // Declaration and Initialization

// Example

const pi = 3.14159; // Declaration and Initialization
console.log(pi); // Outputs: 3.14159

// Attempting to reassign a constant will result in an error
pi = 3.14; // Throws an error: Assignment to constant variable

// Constants with non-primitive types
const person = { firstName: "Alice", lastName: "Johnson" };
person.firstName = "Bob"; // Modifying a property is allowed

const numbers = [1, 2, 3];
numbers.push(4); // Modifying an array is allowed


// let
// In JavaScript, the let keyword is used to declare variables with block-level scope. 
// Variables declared with let have similar characteristics to variables declared with var, 
// but they are limited in scope to the block, statement, or expression they are declared 
// within. This block-level scoping helps prevent variable leaks and unintended side effects.

let variableName = value; // Declaration and Initialization

// Example 

if (true) {
    let x = 10; // x is only accessible within this block
    console.log(x); // Outputs: 10
  }
  
  // x is not accessible outside of the block
  console.log(x); // Throws an error: x is not defined
  
  // Using let in loops
  for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs: 0, 1, 2, 3, 4
  }
  
  // i is not accessible outside of the loop
  console.log(i); // Throws an error: i is not defined
  
