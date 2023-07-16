// ques-1
// To find unique values from 2 arrays and keep into one array. i.e. Union.

/**
 * 
 * @param {array} arr1 
 * @param {array} arr2 
 * @step1 create a function to take input from user.
 * @step2 concatenate two aray into new array arr. Create an empty object obj
 * @step3 run a loop and create frequrncy table for arr.
 * @step4 store keys of above created object into new array union using Object.keys().
 * @step5 return union.
 */
let union=(arr1,arr2)=>{
    let obj={};
    let arr=[...arr1, ...arr2];
    for(let i of arr){
        if(obj[i]){
            obj[i]+=1;
        }else{
            obj[i]=1;
        }
    }
    let union=Object.keys(obj);
    return union;
}

console.log(union([1, 2, 3, 4, 5, 1],[1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8]));

// ques-2
// Find first duplicate element from an array.

/**
 * 
 * @param {array} arr
 * @step1 create a function to take input from user.
 * @step2 create an empty object to store frequency table of given array.
 * @step3 create a frequency table by iterating over array element.
 * @step4 create an array value to store value of above object using Object.values().
 * @step5 iterate through value array and check where the elment of value is 
 *        greater than 1, return the correspondind key using Object.Keys().
 */
let first_dup=(arr)=>{
    let obj={};
    for(let i of arr){
        if(obj[i]){
            obj[i]+=1;
        }else{
            obj[i]=1;
        }
    }
    let value=Object.values(obj);
    for(let i=0;i<=value.length;i++){
        if(value[i]>1){
            return Object.keys(obj)[i];
        }
    }
}

console.log(first_dup([1, 2, 3, 4, 5, 3, 7, 6, 4, 3, 8]));


// ques-2
// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz".
// For numbers which are multiples of both three and five, print "FizzBuzz".

/**
 * @step1 create a function function with no paramenter.
 * @step2 run a loop from 1 till 100.
 * @step3 check if i is divisible by both 3 and 5 then console.log "FizzBuzz" 
 *        else if i is divisible by only 5 then console.log "Buzz" 
 *        else if i divisible by 3 only than console.log "Fizz" else console.log i.
 */
let prnt_100=()=>{
    for(let i=1;i<=100;i++){
        // if((i%3==0) && (i%5==0)){
        //     console.log("FizzBuzz");
        // }else if(i%5==0){
        //     console.log("Buzz");
        // }else if(i%3==0){
        //     console.log("Fizz");
        // }else{
        //     console.log(i);
        // }
        console.log(((i%3==0) && (i%5==0))? "FizzBuzz": i%5==0 ? "Buzz": i%3==0 ? "Fizz": i);
    }
}

prnt_100();


// ques-4
// Uppercase of each first letter of a words

/**
 * 
 * @param {string} str
 * @step1 create a function to get input from user.
 * @step2 create an array arr to store words using str.split(" ").
 * @step3 iterate over arry and convert first letter of each word using toUpperCase() and concatenate rest of letter.
 * @step4 return arr.join(" "); 
 */
let upper_firs_letter=(str)=>{
    let arr=str.split(" ");
    for(let i=0; i<arr.length;i++){
        arr[i]=arr[i][0].toUpperCase()+arr[i].substring(1);
    }
    return arr.join(" ");
}


console.log(upper_firs_letter("The old oak tree stood tall and proud"));


// ques-5
// Uppercase of each first letter of a words using Array map function

/**
 * 
 * @param {string} str
 * @step1 create a function to get input from user.
 * @step2 create an array to store words of string using str.split(" ").
 * @step3 create a new array update to store values of map() on array.
 * @step4 within map function pass a callback function
 *        that returns word while converting its first leetr to uppercase.
 * @step5 return update.join(" ");
 */
let upper_first_uppercase_map=(str)=>{
    let arr=str.split(" ");
    // let update=arr.map((x)=> x[0].toUpperCase()+x.substring(1));
    // return update.join(" ");
    return arr.map((x)=> x[0].toUpperCase()+x.substring(1)).join(" ");
}

console.log(upper_first_uppercase_map("The old oak tree stood tall and proud"));



