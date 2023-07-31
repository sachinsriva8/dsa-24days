// ques-1
// 4 Ways to empty an array. You need to comeup with 4 different approaches

// 1st approach
// making array length as zero

let emptyAnArrayV1=(arr)=>{
    arr.length=0;
    return arr;
}
console.log(emptyAnArrayV1([1,2,3,4,7]))

// 2nd approach
// using splice()

let emptyAnArrayV2=(arr)=>{
    arr.splice(0,arr.length);
    return arr;
}

console.log(emptyAnArrayV2([1,2,3,4,,5]));


// 3rd approach
// using pop()

let emptyAnArrayV3=(arr)=>{
    let len=arr.length;
    for (let i =0; i<len;i++){
        arr.pop();
    }
    return arr;
}
console.log(emptyAnArrayV3([1,2,3,4,5]));

// 4th approach
// using shift()

let emptyAnArrayV4=(arr)=>{
    let len=arr.length;
    for(let i =0;i<len;i++){
        arr.shift();
    }
    return arr;
}
console.log(emptyAnArrayV4([1,2,3,4,5]));



// ques-2
// Create a function to calculate the sum of all the numbers in a jagged array
// input = sumOfNestedArrayElements([1, 2, [3, [4], [5, 6]], [7]]);
// Output = 28

/**
 * 
 * @param {Array} arr
 * @step1 create a function to take input from user.
 * @step2 using flat() to flattened the array to 1D.
 * @step3 sum up elemnts of fatenned array using reduce();
 * @return the result of reduce.
 */
// let sumOfNestedArrayElements=(arr)=>{
//     console.log(arr.flat(2))
// };

// console.log(sumOfNestedArrayElements([1, 2, [3, [4], [5, 6]], [7]]));



// ques-3
// To verify whether perfect number. Any number from 1 to n should be valid. 
// Other input should not be a perfect integer containing 0.

/**
 * 
 * @param {Number} num
 * @step1 create a function to get input from user.
 * @step2 check if input number divisible by 10 then return false.
 * @step3 run a for loop from i=1 till num and check if i divides num then sum up the number.
 * @step4 check if sum is equal to input number then return true else false.
 */
let isPefrectNumber=(num)=>{
    if(num%10==0){
        return false;
    }
    let sum=0;
    for(let i=1;i<num;i++){
        if (num%i==0){
            sum+=i;
        }
    }
    return sum==num;
}

console.log(isPefrectNumber(6));
console.log(isPefrectNumber(28));
console.log(isPefrectNumber((50)));


// ques-4
// calculate number of days between two dates.

/**
 * 
 * @param {Date} date1 
 * @param {Date} date2
 * @step1  creat a function to take input from user.
 * @step2 convert both input date to date object using new Date().
 * @step3 calculate the difference b/w two dates (use math.abs() to get positive value).
 *        Difference will be in misslisecond. we need to convert it in days by dividing it with (1000*60*60*24)
 */
let daysBetweenTwoDates=(date1,date2)=>{
    date1=new Date(date1);
    date2=new Date(date2);
    return Math.abs(date1-date2)/(1000*60*60*24);
}

console.log(daysBetweenTwoDates("12-24-2020", "12-24-2021"));


// ques-5
// To find todays date only.

let todaysDate=()=>Date();

console.log(todaysDate());

// ques-6
// Implement String Compression (Microsoft, Amazon etc)
// const input = stringCompression("aaaabbcaabbaa");
// Output = ("a4b2c1a2b2a2");

/**
 * 
 * @param {String} str 
 * @step1 create a function to get input from user.
 * @step2 create an empty string out. Create variables i=0,count,j=1.
 * @step3 run a whle loop till i<str.length.
 * @step4 check if character at i is equal to character at j then increase value of count, i,j
 *        if false than concatenate the character at i as well count to string out and increase 
 *        the value of i,j and make count as 0
 * @step5 return str.
 */
let stringCompression=(str)=>{
    let i=0;
    let out='';
    let count=1;
    let j=1;
    while (i<str.length){
        if(str[i]!=str[j]){
            out+=str[i]+count;
            count=1;
            i++;
            j++;
        }else{
            count++;
            i++;
            j++;
        }
    }
    return out;
}
console.log(stringCompression("aaaabbcaabbaa"));


