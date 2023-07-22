// ques-1
// Reverse of a nuber using converting into string with or without builtin methods.

/**
 *
 * @param {number} num
 * @step1 create a function to take input from user.
 * @step2 convert the number to string using template literal and store it in a new variable str.
 * @step3 break the string into array and then use reverse on array and return the array by using join().
 */
let reverseNumber = (num) => `${num}`.split("").reverse().join("");

console.log(reverseNumber(12345));

// ques-2
// Reverse of a number

/**
 *
 * @param {Number} num
 * @step1 create a function to get input from user.
 * @step2 creata an empty string reversed.
 * @step3 run a while loop till number>0.
 * @step4 within loop get last digit of number by concatinating the remainder of number divided by 10 into reversed
 *        thereafter update the number by dividing number by 10.
 * @step5 return reversed.
 */
let reverseNumberByCustomMethod = (num) => {
  let reversed = ``;
  while (num > 0) {
    reversed += num % 10;
    num = Math.trunc(num / 10);
  }
  return reversed;
};

console.log(reverseNumberByCustomMethod(12345));

// ques-3
// Check Armstrong Number

/**
 *
 * @param {Number} num
 * @step1 create a function to get input from user.
 * @step2 create a variable cube=0. Store the num in new variable n.
 * @step3 run a wile loop till n>0.
 * @step4 sum up the cube of each last digit of number and store in cube. therafter update the n by dividing n by 10.
 * @step5 return boolean result of whether input number equal to sqr.
 */
let isArmstrong = (num) => {
  let n = num;
  let cube = 0;
  while (n > 0) {
    cube += (n % 10) * (n % 10) * (n % 10);
    n = Math.trunc(n / 10);
  }
  return num === cube;
};

console.log(isArmstrong(153));
console.log(isArmstrong(1));
console.log(isArmstrong(121));

// ques-4
// To find the second largest number in an array

/**
 *
 * @param {array} arr
 * @step1 create a function to get input from user.
 * @step2 create a variable first, second and initialize them with 0.
 * @step3 run a for loop to iterate over an array.
 * @step4 check if arr[i]>first, then second =first and first=arr[i],
 *        else check if arr[i]>second and arr[i]!=first then asecond=arr[i].
 * @step5 return second.
 */

// let a=[234,65,2,234,87,78,98,101,87];

let secondLargest = (arr) => {
  let first = 0;
  let second = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    }
  }
  return second;
};

console.log(
  secondLargest([-234, -1, 0, 234, 101, 65, 101, 234, 0, 87, 78, 98, 101, 87])
);

// ques-5
// To find the closest number in an array from the given input
// Input --> const inputArr = [1, 10, 7, 2, 4, 9],   const nearbyNumber = 5;
// Output-->4

/**
 *
 * @param {array[Numbers]} arr
 * @param {Number} num
 * @step1 create a function to take input from user.
 * @step2 create a variable dif=0, dif2=0 and closest= a largest positive number in js
 * @step3 run a for of loop on arr and calculate difference b/w num and element (absolute value) of array
 *        and check if diff<less than close then close=diff.
 * @step4 return close.
 */
let closest = (arr, num) => {
  let dif = 0;
  let dif2 = Math.pow(2, 32) - 1;
  let closest;
  for (let i of arr) {
    dif = Math.abs(i - num);
    if (dif < dif2) {
      dif2 = dif;
      closest = i;
    }
  }
  return closest;
};

console.log(closest([1, 10, 7, 2, 4, 9], 5));


