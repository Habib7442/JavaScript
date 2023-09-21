// Find duplicates elements in an array ?

const  array = [2,4,8,4,9,3,2,10];

const  duplicates = array.filter((item, index) => array.indexOf(item) != index);

console.log(duplicates); // [2, 4]

// Remove duplicates elements in an array ?

// Solution 1

function removeDuplicates(elem) {
    const unique = [];
    if(!unique.includes(elem)) {
        unique.push(elem);
    }

    return unique;
}

console.log(removeDuplicates(array)); // [2, 4, 8, 9, 3, 10]

// Solution 2

const  uniqueFilter = array.filter((item, index) => array.indexOf(item) === index);

console.log(uniqueFilter); // [2, 4, 8, 9, 3, 10]

// Solution 3

const  uniqueSet = [...new Set(array)];
console.log(uniqueSet); // [2, 4, 8, 9, 3, 10]

// Solution 4

const uniqueReduce = array.reduce((acc, item) => {
    return acc.includes(item) ? acc : [...acc, item];
},[])

console.log(uniqueReduce); // [2, 4, 8, 9, 3, 10]
