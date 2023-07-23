// ques-1
// To check whether particular word/number present in sentence or not using inbuilt function

/**
 *
 * @param {String} str
 * @param {string/Number} value
 * @step1 create a function to take input from user.
 * @step2 check if input value is present in input string and then return the result.
 */
let isPresent = (str, value) => {
  if (typeof value == "number") {
    value = `${value}`;
  }
  return str.toLowerCase().includes(value.toLowerCase());
};

console.log(isPresent("Hi how are you 1", 1));

// ques-2
// To check whether particular word/number present in sentence or not using custom function

/**
 *
 * @param {string} str
 * @param {string/number} value
 * @step1 create a function to take input from user.
 * @step2 check if value is Number typecast it to string.
 * @step3 run a for loop from i=0 till i<str.length-1.
 * @step4 check if str[i]==value[0],
 *        if yes then check if substring from position i in input string till the length of value
 *        is equal to value, if yes then return true. (need to check either in lowercase or uppercase)
 * @step5 return false.
 */
let isPresentCustomMethod = (str, value) => {
  if (typeof value == "number") {
    value = `${value}`;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == value[0].toLowerCase()) {
      if (
        str.substring(i, i + value.length).toLowerCase() == value.toLowerCase()
      ) {
        return true;
      }
    }
  }
  return false;
};

console.log(isPresentCustomMethod("Hi how are you 1", "HI"));

// ques-3
// To delete the property of an object

/**
 *
 * @param {Object} obj
 * @param {string} property
 * @step1 create a function to take input from user.
 * @step2 check if property is present using hasOwnProperty() and return its result.
 */

let isPropertyPresent = (obj, property) => obj.hasOwnProperty(property);

console.log(
  isPropertyPresent(
    { model: "XYZ-2000", color: "Black", storageCapacity: "128GB" },
    "color"
  )
);

// ques-4
// To delete the property of an object

/**
 *
 * @param {object} obj
 * @param {string} prop
 * @step1 create a function to take input from user
 * @step2 use delete operator to delete a property.
 * @step3 return obj.
 */
let toDeleteProperty = (obj, prop) => {
  delete obj[`${prop}`];
  // console.log(obj.hasOwnProperty(`${prop}`))
  return obj;
};
console.log(
  toDeleteProperty(
    { model: "XYZ-2000", color: "Black", storageCapacity: "128GB" },
    "color"
  )
);

// ques-5
// To find the length of the array in custom way

// 1. using for of loop

/**
 *
 * @param {array} arr
 * @step1 create a function to take input from user.
 * @step2 create a variable count=0;
 * @step3 run a for loop on arr and increment the count each time.
 * @step4 return count.
 */
let findArrayLength = (arr) => {
  let count = 0;
  for (let i of arr) {
    count++;
  }
  return count;
};

console.log(findArrayLength([1, 2, 3, 4, 5]));

// 2. using reduce()

/**
 *
 * @param {array} arr
 * @step1 create a function to take input from user
 * @step2 use reduce and within reduce function pass callback function that returns the length
 *        Callback function will take take first argument as len and return len+1 every time.
 */
let arrayLengthUsingreduce = (arr) => arr.reduce((len) => len + 1);

console.log(arrayLengthUsingreduce([1, 2, 3, 4, 6, 7]));
