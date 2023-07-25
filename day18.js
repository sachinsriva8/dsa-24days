// ques-1
// To find the square root of every element of an array

/**
 * 
 * @param {Array} arr
 * @step1 create a function to get input from user.
 * @step2 use map() on array. pass a callback function which returns the sqareroot of input element.
 * @step3 return the result of map().  
 */
let sqrtArray=(arr)=>arr.map((e)=>Math.sqrt(e));

console.log(sqrtArray([4, 9, 16, 25, 36]));

// ques-2
// Make alternate character to upper case

/**
 * 
 * @param {string} str 
 * @step1 create a funcion totakeinput from user.
 * @step2 convert string to array of character.
 * @step3 apply map() on array. within callback functiopass two values one array element and second index.
 *        within call back function check if index is even then return upeercase of that elemente,
 *        else teturn element as it is.
 * @step4 return the result of map by using join.
 */
let alternateCharaterToUpperCase=(str)=>str.split("").map((e,i)=>{
    if(i%2==0){
        return e.toUpperCase();
    }
    return e;
}).join("");

console.log(alternateCharaterToUpperCase("Priyya Bagde"));


// ques-3
// To find the negative values in an array or 2D Array
// Input = [[1, -1],[-1, -1]];
// Output--> 3;

/**
 * 
 * @param {Array/Array[Array]} arr 
 * @step1 create a function to get input from user.
 * @step2 create a varable count=0
 * @step3 run a for of loop on input array.
 * @step4 check if i is an Array, if yes then run a for of loop on i and 
 *        count the number of negative value by checking condition that if element
 *        is less than zero then increment the count by 1.
 *        If i is not elemmrt then check if i is less than zero if yes the increment he value of count by 1.
 * @step5 return value of count.
 */
let countNegativeValue=(arr)=>{
    let count=0;
    for(let i of arr){
        if(Array.isArray(i)){
            for(let j of i){
                if(j<0){
                    count++;
                }
            }
        }else{
            if(i<0){
                count++;
            }
        }
    }
    return count;
}

console.log(countNegativeValue([[1, -1],[-1, -1],-4,8,-6]));

// ques-4
// Find first repeating character with its index from an array. 
// You need to tell which element is having the first repetation inside an array.
// input = [1, 0, 2, 3, 4, 4, 5, 7, 7];
//  output = 4;

/**
 * 
 * @param {Array} arr
 * @step1 create a function to take input from user.
 * @step2 create an empty object obj.
 * @step3 run a for of loop on i check if obj[i] is not undefined,
 *        if true then intilaize the value for particular key as 1, if false then return i. 
 */
let firstRepeatingElement=(arr)=>{
    let obj={};
    for(let i of arr){
        if(!obj[i]){
            obj[i]=1;
        }else{
            return i;
        }
    }
}

console.log(firstRepeatingElement([1, 0, 2, 3, 4, 4, 5, 7, 7]));
console.log(firstRepeatingElement([2, 1, 0, 8, 2, 3, 4, 4, 5, 7, 7]));


// ques-5
// To find all the subsets of the set
// input = [1, 2];
// Output= [[1], [1, 2], [2], []];

// if input =[1,2,3,4]
// then, output= [[1], [2],[3],[4],[1,2],[1,3],[1,4], [2,3], [2,4], [3,4], [1,2,3],[1,2,4],[2,3,4],[3,4,1],[],[1,2,3,4]];
let allSubsetofSet=(arr)=>{


}

// [1,2,3,4,5]
// [1],[2],[3],[4],[5]
// 1,2  1,3  1,4  1,5  2,3  2,4  2,5  3,4  3,5  4,5  
// 1,2,3  1,2,4  1,2,5  1,3,4  1,3,5  1,4,5   2,3,4  2,3,5  2,4,5  3,4,5 
// 1,2,3,4  1,2,3,5  1,2,4,5  1,3,4,5   2,3,4,5
// []


