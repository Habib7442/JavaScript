// Check if user exists or not in an object

let users = [
  {
    name: "John",
    age: 20,
  },
  {
    name: "Mark",
    age: 22,
  },
  {
    name: "Mary",
    age: 24,
  },
  {
    name: "Mike",
    age: 26,
  },
];

// Solution 1

// const isUserExists = (name,users) => {
//   let exists = false;

//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === name) {
//       exists = true;
//     }
//   }
//   return exists;
// };


// console.log(isUserExists("John",users)); // true


// Solution 2

// const isUserExists = (name,users) => {
//   const user = users.find((user) => user.name === name);
//   return Boolean(user);
// }

// console.log(isUserExists("Mike",users)); // true

// Solution 3

// const isUserExists = (name,users) => {
//   const index = users.findIndex((user) => user.name === name);
//   return index !== -1;
// }

// console.log(isUserExists("Johns",users)); // true

// Solution 4

const isUserExists = (name,users) => {
  const user = users.some((user) => user.name === name);
  return user;
}

console.log(isUserExists("Mikes",users)); // true