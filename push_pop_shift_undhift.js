// Push

// The push() method adds one or more elements to the end of an array and returns the new length of the array.

// Example

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');

console.log(count); // output: 4
console.log(animals); // output: ['pigs', 'goats', 'sheep', 'cows']

// Pop

// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

const fruits = ['apple', 'mango', 'banana'];

const newFruits = fruits.pop();

console.log(newFruits); // output: banana
console.log(fruits); // output: ['apple', 'mango']

// Shift

// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

const game = ['cs', 'gta', 'bgmi'];

const newGame = game.shift();

console.log(newGame); // output: cs
console.log(game); // output: ['gta', 'bgmi']

// Unshift

// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.