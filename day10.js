// ques-1
// To check ending of the string matches with given character/s using inbuilt function

/**
 *
 * @param {string} str
 * @param {string} end
 * @step1 create a function to take input from user.
 * @step2 return result of endsWith().
 */
let ending_match = (str, end) => {
  return str.endsWith(end);
};

console.log(
  ending_match(
    "Life is what happens when you're busy making other plans",
    "plans"
  )
);

// ques-2
// To check ending of the string with given character/s using custom implementation.

/**
 *
 * @param {string} str
 * @param {strin} end
 * @step1 create a function to take input from user.
 * @step2 calculate the length of end str and store it in end_len.
 * @step3 return end==str.slice(-end_lem);
 */
let ending_match_custom = (str, end) => {
  return end == str.slice(-end.length);
};

console.log(
  ending_match_custom(
    "Life is what happens when you're busy making other plans",
    "plans"
  )
);

// 2nd-approach-without using any inbuilt function.

/**
 *
 * @param {string} str
 * @param {string} end
 * @step1 create a function to take input from user
 * @step2 create a variable j and initialize it with (str.length-end.length).
 *        This will give the starting position of end string in input string.
 * @step3 run a for loop from i =0 till end.length.
 * @step4 check if chracter of end string not matches with character from input string then return false.
 * @step5 return true.
 */
let ending_match_custom_without_inbuilt = (str, end) => {
  let j = str.length - end.length;
  for (let i = 0; i < end.length; i++) {
    if (str[j] != end[i]) {
      return false;
    }
    j++;
  }
  return true;
};
console.log(
  ending_match_custom_without_inbuilt(
    "Life is what happens when you're busy making other plans",
    "plan"
  )
);

// ques-3
// To find the largest elements fro the 2 dimensional array.

/**
 *
 * @param {array[array]} arr
 * @step1 create a function to take input from user.
 * @step2 crate an empty out array to store max values of input 2D array.
 * @step3 run a for of loop on arr.
 * @step4 if elemnt of arr is an array than find the max value of array
 *        using Math.max and push the value in out array. If element is not array then push the element itself.
 * @step5 return out.
 */

let largest_2D_array = (arr) => {
  let out = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      out.push(Math.max(...i));
    } else {
      out.push(i);
    }
  }
  return out;
};

const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 9],
  [45, 76, 2, 1],
  [89, 90, 87, 9],
];

console.log(largest_2D_array(input));

// ques-4
// Print string n times using inbuilt function

/**
 *
 * @param {string} str
 * @param {number} n
 * @step1 create a function to take input from user.
 * @step2 use repeat() to repeat the string n times and reurn it.
 */
let string_ntimes = (str, n) => {
  return str.repeat(n);
};

console.log(string_ntimes("abc", 6));

// 2nd-approach -using array and join.

/**
 *
 * @param {string} str
 * @param {number} n
 * @step1 create a function to take input from user.
 * @step2 create an array of length n+1 and
 *        use join() to multiply string by passing string as argumnet in join and retur it.
 */
let string_ntimes_using_join = (str, n) => {
  return Array(n + 1).join(str);
};

console.log(string_ntimes_using_join("abc", 6));


