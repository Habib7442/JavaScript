// Write a program to count no. of vowels in a given word

const countVowels = (word) => {
  let vowels = ["a", "e", "i", "o", "u"];

  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      count++;
    }
  }

  return count;
};

console.log(countVowels("hello"));
