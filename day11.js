// queston-1
// Print string n times in custom way using loops

/**
 *
 * @param {string} str
 * @param {number} n
 * @step1 create a function to take input from user.
 * @step2 create an empty string out.
 * @step3 run a loop from i=0 till i<n and concatenate the input string in out.
 * @step4 return out.
 */
let print_string = (str, n) => {
  let out = ``;
  for (let i = 0; i < n; i++) {
    out += str;
  }
  return out;
};

console.log(print_string("abc", 5));

// ques-2
// Truncate the string upto specific character.
// For ex ("I am priya", 3) => "I am..."

/**
 *
 * @param {string} str
 * @param {number} n
 * @step1 create a function to take input from user.
 * @step2 create an empty srting out. Create a variable count and initialize it with 0.
 * @step3 run a for of loop.
 * @step4 within loop use regular expression to know whether charcater match with (" ", ',',"'",'"','!').
 *        If yes then concatenate i to out. else increase the value of count and concatenate i to out.
 * @Step5 if count==n then concatenate  "..."  to out and return it.
 */
let truncate_string = (str, n) => {
  let out = ``;
  let count = 0;
  for (let i of str) {
    if (i.match(/[ ,'"!]/g)) {
      out += i;
    } else {
      out += i;
      count++;
    }
    if (count == n) {
      out += "...";
      return out;
    }
  }
};

console.log(truncate_string("I am priya", 3));
console.log(truncate_string("I am priya", 5));

// ques-3
// Converting one dimensional array into n dimensional array using slice.
// input = covertArryInOneDimension(["a", "b", "c", "d"], 2);
// Output-->
// [
//   ["a", "b"],
//   ["c", "d"],
// ];

/**
 *
 * @param {array-1-dimensional} arr
 * @param {number} dim
 * @step1 create a function to get input from user.
 * @step2 create an empty array out. check if dim==1 then return input array.
 * @step3 run a for loop from i=0 til i<arr.len
 * @step4 within loop push arr.slice(i,(i+dim)) to out array and i=i+dim;
 * @step5 return out;
 */
let convert_1D_to_ND = (arr, dim) => {
  if (dim == 1) {
    return arr;
  }
  let out = [];
  for (let i = 0; i < arr.length; ) {
    out.push(arr.slice(i, i + dim));
    i = i + dim;
  }
  return out;
};

console.log(convert_1D_to_ND(["a", "b", "c", "d", "e", "f"], 3));

// ques-4
// To find only truthy values from an array.
// input = ["priya", 0, "", false, null, undefined, "ate", NaN, 9];
// Output ["priya", "ate", 9];

/**
 *
 * @param {array} arr
 * @step1 create a function to take input from user.
 * @step2 create an empty array out.
 * @Step3 run for of loop on array and check if value is truthy than push the elemet to out.
 * @step4 return out
 */
let truthy_values = (arr) => {
  let out = [];
  for (let i of arr) {
    if (i) {
      out.push(i);
    }
  }
  return out;
};

console.log(
  truthy_values(["priya", 0, "", false, null, undefined, "ate", NaN, 9])
);

// ques-5
// To find only truthy values using filter.

/**
 * 
 * @param {array} arr 
 * @step1 create a function to take input from user.
 * @step2 use filter on array and within filter pass callback function that checks if value is thruthy.
 * @step3 return the result of filter.
 */
let truthy_value_using_filter = (arr) => {
    return arr.filter((e)=>e);
};

console.log(truthy_value_using_filter(["priya", 0, "", false, null, undefined, "ate", NaN, 9]));

