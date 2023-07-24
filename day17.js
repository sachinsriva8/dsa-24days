// ques-1
// print star pattern:

// *****
// ****
// ***
// **
// *

/**
 *
 * @param {Number} n
 * @step1 create a function to take input from user.
 * @step2 run a for loop fron i=0 till n-1, basically for number of rows.
 * @step3 create an empty string str.
 * @step4 runa for for loop from j=1 till j<n-i and concatenate * to empty string.
 * @step4 print str.
 */
let pattern1 = (n) => {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n - i; j++) {
      str += `*`;
    }
    console.log(str);
  }
};
pattern1(5);


// ques-2
// print star pattern:

// *****
// *****
// *****
// *****
// *****

/**
 *
 * @param {Number} n
 * @step1 create function from to take input from user.
 * @step2 create a string str having stars equal to given input n. sing Array(n+1).join("*");
 * @step3 run a for loop from i=0 till n-1 and console log str.
 */
let pattern2 = (n) => {
  let str = Array(n + 1).join("*");
  for (let i = 0; i < n; i++) {
    console.log(str);
  }
};
pattern2(6);


// ques-3
// print pattern

// 11111
// 2222
// 333
// 44
// 5

/**
 *
 * @param {Number} n
 * @step1 create a function to take input from user.
 * @step2 run a for loop fron i=1 till n, basically for number of rows.
 * @step3 create an empty string str.
 * @step4 runa for for loop from j=1 till j<=(n+1-i) and concatenate i to empty string.
 * @step4 print str.
 */
let pattern3 = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = ``;
    for (let j = 1; j <= n + 1 - i; j++) {
      str += i;
    }
    console.log(str);
  }
};

pattern3(5);


// ques-4
// print pattern

// 12345
// 2345
// 345
// 45
// 5

/**
 *
 * @param {Number} n
 * @step1 create a function to take input from user.
 * @step2 run a for loop for nmber of rows from i=1 till i<=n
 * @step3 create and empty str str.
 * @step4 run a for loop from j=i till j<=n;
 * @step5 console log str.
 */
let pattern4 = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = ``;
    for (let j = i; j <= n; j++) {
      str += j;
    }
    console.log(str);
  }
};
pattern4(5);


// ques-5
// print star pattern:

// *
// **
// ***
// ****
// *****

/**
 *
 * @param {Number} n
 * @step1 create a function to take input from user.
 * @step2 create an string str='*'.
 * @step3 run a for loop from i=1; till i<=n;
 * @step4 console log str. and concatenate '*' in str.
 */
let pattern5 = (n) => {
  let str = "*";
  for (let i = 1; i <= n; i++) {
    console.log(str);
    str += `*`;
  }
};

pattern5(5);


