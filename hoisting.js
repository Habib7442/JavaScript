// What is hoisting ?

// Hoisting is a JavaScript mechanism where variables and function declarations are moved 
//to the top of their scope before code execution.

// Inevitably, this means that no matter where functions and variables are declared, 
//they are moved to the top of their scope regardless of whether their scope is global 
//or local.

console.log(a); // Outputs: undefined
var a = 10;
console.log(a); // Outputs: 10


hoist()
function hoist() {
    var message = "Hoisting is all the rage!"
    console.log(message);
}


console.log(y); // Throws an error: Cannot access 'y' before initialization
let y = 10;

