// ques-1
// To find the maximum repetation of the character in a string
// input = "aaaabbaaccccccccccccccccccde";
// Output={
// character: 'c',
// count: 18
// }

/**
 *
 * @param {String} str
 * @step1 create a function to get input from user.
 * @step2 create few variables, i=0, j=1, c='', max=0,rep=1.
 * @step3 run a while loop while until i<=str.length-1.
 * @step4 check if string element at i is equal to element at j, if true,then increment count,i &j.
 *        if fasle then check if count>max then if yes than max=count and c=str[i], and increment i and j.
 * @step5 create an object with with key as character and count an dreturn it.
 */
let maxRepetationCharacter = (str) => {
  let i = 0;
  let j = 1;
  let max = 0;
  let rep = 1;
  let c = ``;
  letobj = {};
  while (i <= str.length - 1) {
    if (str[i] == str[j]) {
      rep++;
      i++;
      j++;
    } else {
      if (rep > max) {
        max = rep;
        c = str[i];
      }
      i++;
      j++;
      rep = 1;
    }
  }
  obj["character"] = c;
  obj["count"] = max;
  return obj;
};

console.log(maxRepetationCharacter("aaaabbaaccccccccccccccccccde"));

// ques-2
// To find all the missing numbers from an array
// input = [1, 2, 6];
// Output=[3, 4, 5];

/**
 *
 * @param {Array[Number]} arr
 * @step1 create a function to get input from user.
 * @step2 run a for loop to calculate min and max value from an array.(to skip loop can use Math.max &Math.min())
 * @step3 run a for lop from min+1 till max and check if i is present in array if not the pust i to output array.
 * @step4 return output
 */
let missingNumbers = (arr) => {
  let out = [];
  let min = 0;
  let max = 0;
  for (let i of arr) {
    if (i >= max) {
      max = i;
    }
    if (i <= min) {
      min = i;
    }
  }
  for (let i = min + 1; i < max; i++) {
    if (arr.indexOf(i) == -1) {
      out.push(i);
    }
  }
  return out;
};
console.log(missingNumbers([1, 2, 6]));

// ques-3

//[5,3,4,6]==> min=3 max=6

// ques-4
// Create a new array by adding one to each elements of the existing array

// input = [1, 2, 3, 4];
// Output=[2, 3, 4, 5];

/**
 *
 * @param {Array} arr
 * @step1 creata a function to take input from user.
 * @step2 use map() on input array. Callback function will return the value as 1-(-element).
 *        so, that if user pass array with numbers as string then also code works. Return the result of map().
 */
let addOneToEachElement = (arr) => arr.map((e) => 1 - -e);

console.log(addOneToEachElement([1, 2, 3, 4]));
console.log(addOneToEachElement(["1", "2", "3", "4"]));





