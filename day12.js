// ques-1
// Checking all letters of second words should present in first word,
//  in the same order using indexOf without indexing i.e for-of loop.

/**
 *
 * @param {string} word1
 * @param {sting} word2
 * @step1 create a function to take input from user.
 * @step2 check if 2nd word is equal to 1stword in lowercase using indexof. if index0f() gives 0 then return true else false.
 */
let word_check = (word1, word2) => {
  return word1.toLowerCase().indexOf(word2.toLowerCase()) == 0;
};

console.log(word_check("Word", "word"));
console.log(word_check("Word", "wore"));

// ques-2
// Checking all letters of second words should present in first word,
//  in the same order using indexOf with indexing.

/**
 *
 * @param {string} word1
 * @param {Sting} word2
 * @step1 create a function to take input from user.
 * @step3 run a for of loop on word1. and within loop,
 *        check if indexof() each elemnt in word1 and word2(by converting them to lowercase) is not same then return false.
 * @step4 reurn true.
 */
let word_check_using_indexing = (word1, word2) => {
  for (let i of word1) {
    if (
      word1.toLocaleLowerCase().indexOf(i.toLowerCase()) !=
      word2.toLocaleLowerCase().indexOf(i.toLowerCase())
    ) {
      return false;
    }
  }
  return true;
};

console.log(word_check_using_indexing("word", "Word"));
console.log(word_check_using_indexing("word", "Woed"));

// ques-3
// Unique values only from 2 arrays i.e. union values
// const inputA = [1, 2, 3, 4, 5, 1];
// const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];
// Output
// [1, 2, 3, 4, 5, 6, 7, 8];

/**
 *
 * @param {array} arr1
 * @param {array} arr2
 * @step1 create a function to take input from user.
 * @step2 concatenate two aray into new array arr. Create an empty object obj
 * @step3 run a loop and create frequrncy table for arr.
 * @step4 store keys of above created object into new array union using Object.keys().
 * @step5 return union.
 */
let unique = (arr1, arr2) => {
  let obj = {};
  let arr = [...arr1, ...arr2];
  for (let i of arr) {
    if (obj[i]) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }
  let union = Object.keys(obj);
  return union;
};

console.log(unique([1, 2, 3, 4, 5, 1], [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8]));

// ques-4
// Remove Duplicates from 2 arrays using Set method

/**
 *
 * @param {array} arr1
 * @param {array} arr2
 * @step1 create a function to take input from user.
 * @step2 merge two array and create a set of merged array and then convert set to array and return array.
 */
let delete_duplcate_using_set = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};

console.log(
  delete_duplcate_using_set(
    [1, 2, 3, 4, 5, 1],
    [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8]
  )
);
