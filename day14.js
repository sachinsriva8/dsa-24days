// ques-1
// Currying function i.e sum of multiple argument functions //inner function can access outer function variables but
// outer functions can't able to acceess inner function.

// currying is basically creating nested functions with
// single parameter each to get same result as single function with multiple paramater.
// Curring is possible in JS due to closures. Number of nested loop directly depends on number of parameter

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(1, 2, 3));

let sumUsingCurrying = (a) => (b) => (c) => a + b + c;

console.log(sumUsingCurrying(1)(2)(3));

// ques-2
// Find SUM, PRODUCT AND AVERAGE of the numbers,
// accumulation means collection.

let accumulationUsingCurrying = (a) => (b) => (c) =>
  `Sum: ${a + b + c} Product: ${a * b * c} Average: ${(a + b + c) / 3}`;
console.log(accumulationUsingCurrying(1)(2)(3));

// ques-3
// Convert 2D/3D array into 1D using reduce function and inbuilt function i.e flat
// input->const arr = [["a", "b"],["c", "d"],["e", "f"]];
// Output-->["a", "b", "c", "d", "e", "f"];

// 1. using reduce();

/**
 *
 * @param {array[array]} arr
 * @step1 create a function to take input from user.
 * @step2 create an empty array initial=[];
 * @step3 apply reduce() on arr, an dwithin callback fucntion for reduce pass two
 *        parameters, acc and e, where e refers t each array element and acc acts as accumulating each array element.
 *        store the result of rduce function in out.
 * @step4 return out.
 */

let transformTo1D = (arr) => {
  let initial = [];
  let out = arr.reduce((acc, e) => {
    return acc.concat(e);
  }, initial);
  return out;
};

console.log(
  transformTo1D([
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
  ])
);

// 2. using flat().

/**
 *
 * @param {array[array]} arr
 * @step1 create a function to take input from user.
 * @step2 apply flat() on array to flattned te input array to 1D array and return the result.
 */

let transformTo1dUsingFlat = (arr) => arr.flat();

console.log(
  transformTo1dUsingFlat([
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
  ])
);
