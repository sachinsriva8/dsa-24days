// ques-1
// Fibonacci Series (0,1,1,2,3,5,8,13....) where keeping in array

/**
 * 
 * @param {number of terms} num
 * @step1 create a function to takeinput from user.
 * @step2 create an array fiboo having 0 & 1 as elemnt in it.
 * @step3 run a for loop from i=3 till num and push sum of last and second last element in fiboo.
 * @step4 return fiboo. 
 */
let fibonacci=(num)=>{
    if(num==1){
        return [0];
    }
    let fiboo=[0,1];
    for(let i=3;i<=num;i++){
        fiboo.push(fiboo[fiboo.length-1]+fiboo[fiboo.length-2]);
    }
    return fiboo;
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(7));


//Que-2 
// Finding a missing elements in an array and then add with existing elements.
//  (-1 means if elements not found then it will return always -1 as per rule)

/**
 * 
 * @param {array[number]} arr
 * @step1 create a function to take inout from user.
 * @step2 create a variable to store min and max value of array.
 *        Create a variable n_term=min-max+1. Create a variable ex_sum=((n_term)*(2*min+((n_term-1)*1))-it is basicaly summation of ap.
 * @step3 calculate sum of array by running for loop and store it in variable sum.
 * @step4 create a variable and store diff b/w sum and ex_sum.
 * @step5 if diff==0, yes-than return -1. 
 * @step6 push diff in arr and return arr. 
 */
let missing_element=(arr)=>{
    let min=Math.min(...arr);
    let max=Math.max(...arr);
    let n_term=max-min+1;
    let ex_sum=((n_term)*((2*min)+(n_term-1)*1))/2;
    let sum=0;
    for(let i of arr){
        sum+=i;
    }
    let diff= ex_sum-sum;
    if(diff==0){
        return -1;
    }

    arr.push(diff);
    return arr;
}

console.log(missing_element([1,2,3,4,5,6]));
console.log(missing_element([1,4,3,2,6]));



// ques-2
// Find the missing number from an array

/**
 * 
 * @param {array[number]} arr
 * @step1 create a function to take input from user.
 * @step2 create a variable to store min and max value of array.
 *        Create a variable n_term=min-max+1. Create a variable ex_sum=((n_term)*(2*min+((n_term-1)*1));
 * @step3 using reduce function to calculate sum of array.
 * @step4 create a variable diff=ex_sum-sum;
 * @step5 if diff==0 then return -1;
 * @step6 return diff;
 */
let missing_no=(arr)=>{
    let min=Math.min(...arr);
    let max=Math.max(...arr);
    let n_term=max-min+1;
    let ex_sum=((n_term)*((2*min)+(n_term-1)*1))/2;
    let sum=arr.reduce((x,a)=>{return x+a});
    let diff=ex_sum-sum;
    if(diff==0){
        return -1;
    }
    return diff;
}
console.log(missing_no([1,2,3,4,5,6]));
console.log(missing_no([1,4,3,2,6]));








