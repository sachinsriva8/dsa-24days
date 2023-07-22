// que-1
// String reverse with reversing of individual words

/**
 *
 * @param {string} str
 * @Step1 create a function to take inout string from user.
 * @step2 split the array in array of characters,
 * thereafter using revrse fnction revrse the array and join the array charters and return it.
 */

let rev1 = (str) => str.split("").reverse().join("");

console.log(rev1("Hello, how are you?"));

// que-2
// String reverse without using inbult function

/**
 * @step1 create a function to take input from user (str).
 * @step3 create empty string rev.
 * @step2 run a for loop from str.length-1 till 0 and within loop cocatenate each character of inout string in empty string.
 * @step3 return rev.
 */

let rev2 = (str) => {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
};

console.log(rev2("Hello, how are you?"));

// ques-3
// Find factorial of user input number

/**
 *
 * @param {number} num
 * @step1 create a function to take input (num) from user.
 * @step2 create a variable fact and initialize it with 1.
 * @step3 run a for loop from i=num till 1 and multiply i with fact.
 * @step4 return fact.
 */

let factorial = (num) => {
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact *= i;
  }
  return fact;
};

console.log(factorial(5));

// 2nd approach- Recurrsion
/**
 *
 * @param {number} num
 * @step1 create a function to get input (number) from user.
 * @step2 breaking condition for recurssion would be if num==1.If yes thena return 1.
 * @step3 return num*factorial2(num-1).
 */

let factorial2 = (num) => {
  if (num == 1) {
    return num;
  }
  return num * factorial2(num - 1);
};

console.log(factorial2(5));

// ques-4
// Check if a string is an Anagram

// 1st approach

/**
 *
 * @param {string} st1
 * @param {string} str2
 * @returns true or false
 * @step0 Create a function to get two strings from user
 * @step1 check if length of both strings are not qual then return false & also check if both string is empty then return true.
 * @step2 Create two empty object to store frequency of each letter in both string
 * @step3 To create frequency table we need to iterate over each character in both string and check if there is any occurence then increase value by 1 else substitute 1
 * @step4 Using Object.entries to get key value pair as an array for both frequency table and store itin two new array arr1, arr2.
 * @step5 Now need to pick 1st key of str-1 frequency object and and check whether it is present in second string frequency tables key if not then return false,
 *        if yes than check if values of frequency table are same for particular key,if same then repeat the process (using nested loop) else return false.
 * @step6 return true.
 */

let anagram1 = (str1, str2) => {
  // step-1
  if (str1.length !== str2.length) {
    return false;
  }

  if (str1.length === 0 && str2.length === 0) {
    //if both string is empty then also its anagram.
    return true;
  }

  // step-2
  let obj1 = {};
  let obj2 = {};

  // step-3
  for (let i of str1) {
    if (obj1[i]) {
      obj1[i] += 1;
    } else {
      obj1[i] = 1;
    }
  }

  for (let i of str2) {
    if (obj2[i]) {
      obj2[i] += 1;
    } else {
      obj2[i] = 1;
    }
  }

  // step-4
  let arr1 = Object.entries(obj1);
  let arr2 = Object.entries(obj2);

  // Step-5
  for (let i = 0; i < arr1.length; i++) {
    let a = 0;
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i][0] == arr2[j][0]) {
        if (arr1[i][1] == arr2[j][1]) {
          a = 1;
        } else {
          return false;
        }
      }
    }
    if (!a) {
      return false;
    }
  }

  // step-6
  return true;
};

console.log(anagram1("abcd", "dbca"));

// 2-nd approach
//using splice

/**
 *
 * @param {string} str1
 * @param {string} str2
 * @step1 create an funcion to get input from user.
 * @step2 check if length of str1 not equal to that of str2 than return false.
 * @step3 convert string 2 into array of character using split function and store it in variable arr.
 * @step4 run a for loop from i=0 till str.length to select each elemet of  str1 as i
 * @step5 run a for loop from j=0 till arr.length to check whether str1[i] is present in arr
 *        if yes than remove that element from arr and break the loop and continue with next character of str1
 * @step6 check if the length of arr is ) return true else return false.
 */

let anagram2 = (str1, str2) => {
  let arr = str2.split("");
  if (str1.length != str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (str1[i].toLowerCase() == arr[j].toLowerCase()) {
        arr.splice(j, 1);
        console.log(arr);
        break;
      }
    }
  }
  return arr.length == 0;
};

console.log(anagram2("abcd", "dbca"));

// 3rd approach

/**
 *
 * @param {string} strr1
 * @param {string} strr2
 * @step1 create an funcion to get input from user.
 * @step2 check if length of str1 not equal to that of str2 than return false.
 * @step2_1 conver noth strin to lower case and store it in new variables.
 * @step3 convert string 2 into array of character using split function and store it in variable arr.
 * @step4 run a for loop from i=0 till str.length to select each elemet of  str1 as i
 * @step5 run a for loop from j=0 till arr.length to check whether str1[i]  is present in arr
 *        if yes than replace the elemnet with undefined and break the loop and continue with next character of str1
 * @step6 check if each element of arr is undefined using filter than return true else false.
 */

let anagram3 = (strr1, strr2) => {
  if (strr1.length != strr2.length) {
    return false;
  }
  let str1 = strr1.toLowerCase();
  let str2 = strr2.toLowerCase();
  let arr = str2.split("");

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (str1[i] === arr[j]) {
        arr[j] = 0;
      }
    }
  }
  let ary = arr.filter((x) => x != 0);
  return ary.length == 0;
};

console.log(anagram3("abcd", "dbca"));

// ques-5
// Swapping of 2 numbers with third variable

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @step1 create a function to take input from user (num1,num2)
 * @step2 create a variable temp and initialize it with zero.
 * @step3 tem=num2; num2=num1; num1=temp;
 * @step4 return num1,num2;
 */
let swap = (num1, num2) => {
  let temp = 0;
  temp = num2;
  num2 = num1;
  num1 = temp;
  return `${num1} ${num2}`;
};

console.log(swap(6, 7));

// ques-6
// Swapping of 2 numbers without third variable

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @step1 create a function to get input from user (num1,num2)
 * @step2 num1=num1+num2; num2=num1-num2; num1=num1-num2.
 * @step3 return num1,num2.
 */

let swapWitoutThirdVariable = (num1, num2) => {
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;
  return `${num1}, ${num2}`;
};

console.log(swapWitoutThirdVariable(4, 20));
