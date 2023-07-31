// ques-1
// Find triplets whose sum is given as a second argument
// const input = findTriplets([-1, -4, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0);
// Output:
// -1, -4, 5;
// -1, 0, 1;
// -4, 0, 4;
// -4, 1, 3;
// -9, 0, 9;
// -9, 1, 8;
// -9, 2, 7;
// -9, 3, 6;
// -9, 4, 5;

/**
 *
 * @param inputArr {Array<Number>}
 * @param sum {Number}
 * @step1 run a for loop from i=0 till i<arr.lenth-2
 * @step2 run a for loop from j=i+1 till j< arr.length-1;
 * @step3 run a for loop from k=j+1 till k<arr.length;
 * @step4 check if sum of elemts at i,j,k === sum than console.log these elements.
 */
let findTriplets = (inputArr, sum) => {
  for (let i = 0; i < inputArr.length - 2; i++) {
    for (let j = i + 1; j < inputArr.length - 1; j++) {
      for (let k = j + 1; k < inputArr.length; k++) {
        if (inputArr[i] + inputArr[j] + inputArr[k] == sum) {
          console.log(`${inputArr[i]}, ${inputArr[j]}, ${inputArr[k]}`);
        }
      }
    }
  }
};

findTriplets([-1, -4, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0);

// ques-2
// Convert an Array into an object
// input = ["John", "Peter", "Sally", "Jane"];
// Output = { 0: "John", 1: "Peter", 2: "Sally", 3: "Jane" }

/**
 *
 * @param {Array} arr
 * @step1 create a function to take input from user.
 * @step2 create an empty object output.
 * @step3 run a for loop from i=0 till i<arr.length and make i as key to outpu object and element at i as is value.
 * @step4 return output;
 */
let convertArrayToObject = (arr) => {
  let output = {};
  for (let i = 0; i < arr.length; i++) {
    output[i] = arr[i];
  }
  return output;
};
console.log(convertArrayToObject(["John", "Peter", "Sally", "Jane"]));
