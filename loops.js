// forEach

// It is a method that executes a function once for each array element.

let arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
    console.log(val + 2 )
})

// for...in

// It is a loop that iterates over the enumerable properties of an object.

let obj = {
    name: 'John',
    age: 30,
    city: 'New York'
}

for (let key in obj) {
    console.log(key + ': ' + obj[key]);
}