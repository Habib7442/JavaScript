// Adding an element to an array

let nums = [1,2,3,4,5];
// nums.push(6);
console.log(nums); // [1,2,3,4,5,6]

// But push method mutates the original array. 
//If you want to avoid mutation, you can use the spread operator:

let newNums = [...nums,6];
console.log(newNums); // [1,2,3,4,5,6]

