// ques-1
// find the largest pair of the 2 elements using indexing with unsorted elements

/**
 * 
 * @param {array[numbers]} arr
 * @step1 create a function to take input from user
 * @step3 Since array is sorted we can directly return last and second last number.
 */

let largest_pair_sorted=(arr)=>{
    return `${arr[arr.length-1]} ${arr[arr.length-2]}`;
}

console.log(largest_pair_sorted([ 5, 10, 15, 20,  25, 30]));


// ques-2
// To find the index of an element from an array

/**
 * 
 * @param {array} arr 
 * @param {element} element 
 * @step1 create a function to take input from user (array, element for which index should be given).
 * @step2 create a empty object. IN object our key would be array elemts and values would be index position of those.
 * @step3 run a for loop from i=0 till array length and check if object contain key if yes than concatenate the value with its currentposition,
 *        if not then initialize it with just index position.
 * @step4 return obj[element]
 */
let index=(arr,element)=>{
    let obj={};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]+=` ${i}`;
        }else{
            obj[arr[i]]=`${i}`;
        }
    }
    return obj[element];
}

console.log(index([7, 5, 4, 1, 9, 6, 9, 10, 2, 5, 3, 8, 7, 9],9));


//ques-3
//Fibonacci Series (0,1,1,2,3,5,8,13....)

/**
 * 
 * @param {number of terms to be printed} n 
 * @info  fibonacci series is sum of elemnts of its two previous term.
 * @step1 creat a function to get input from user.
 * @step2 check if n==1, then return 0;
 * @step3 create variable a=0; b=1. Create a variable out and concatenate a and b in it with comma. 
 *        create a temp variable and nitialize it with zero. 
 * @step4 run a for loop from i=3 till i less than or equal to n.
 * @step5 within loop add a and b and concatenate the result in out and make a=b, and b=sum calculated.
 *        so that in next iteration value of a and b would be last two terms values. 
 * @step6 return out.
 */
let fibonacci=(n)=>{
    let a=0;
    let b=1; 
    if(n==1){
        return a;
    }
    let out=`${a}, ${b}`;
    let temp=0;
    for(let i=3;i<=n;i++){
        out+=` ,${a+b}`;
        temp=b;
        b=a+temp;
        a=temp;
    }
    return out;
}

console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(9));















