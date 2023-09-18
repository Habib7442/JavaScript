// Find duplicates elements in an array ?

const  array = [2,4,8,4,9,3,2,10];

const  duplicates = array.filter((item, index) => array.indexOf(item) != index);

console.log(duplicates); // [2, 4]


// How to find the count of duplicate values in array ?

const  months = ["Jan", "Feb", "Aug", "Jan", "Aug", "Dec"];

