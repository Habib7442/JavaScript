// What is default parameter ?

// Default parameters are parameters that take a default value if no argument is passed or if undefined is passed.


// Example

function a(a,b,c) {
    console.log(a,b,c);
}

a(1,2,3); // Output: 1 2 3
a(1,2); // Output: 1 2 undefined
a(1); // Output: 1 undefined undefined

// So to avoid this undefined we can use default parameters

function b(a=0, b=0 ,c=0) {
    console.log(a,b,c);
}

b(1,2,3); // Output: 1 2 3
b(1,2); // Output: 1 2 0
b(1); // Output: 1 0 0