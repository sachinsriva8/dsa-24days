// ques-1
// To find the power of x with or without using Math function

/**
 *
 * @param number {Number to input}
 * @param exponent {Exponent}
 * @returns number
 * @step1 create a function to take input from user.
 * @step2 create a variable product=1.
 * @step3 run a for loop from i=1 till i<=exponenet and mulitply the number by itself.
 * @step4 return product
 * 2nd Approach=> return Math.pow(number,exponenet);
 */
let findPowOfNumber=(number, exponent)=>{
    // Write your logic here
    let product=1;
    for(let i=1; i<=exponent;i++){
        product*=number;
    }
    return product;
  }
  console.log(findPowOfNumber(2, 3));

//   2nd approach
let findPowOfNumberV2=(number,exponent)=>Math.pow(number,exponent);

console.log(findPowOfNumberV2(2,3));


// ques-2
// Grouping of an Anagram

// const input = (["bag", "gab", "foo", "abg", "oof", "ofo"]);
// output = [ ["bag", "gab", "abg"], ["foo", "oof", "ofo"] ];

/**
 * 
 * @param {Array[Strings(Anagram)]} arr
 * @step1 create a function to take input from user
 * @step2 ceate an empty object obj.
 * @step3 run a for of loop on arr and calculate the sum of Ascii value of each element using reduce.
 * @step4 check if sum is present as key in object if not than initialize the value as array and push elemtent i in it.
 *        if yes than push the value in value array for particlar key.
 * @step5 return the values of obj.
 */
let findGroupsOfAnagram=(arr)=>{
    let obj={};
    for(let i of arr){
        let sum=i.split('').reduce((total,e)=>total+e.toLowerCase().charCodeAt(0),0);
        // console.log(sum);
        if(!obj[sum]){
            obj[sum]=[];
            obj[sum][0]=i;
        }else{
            obj[sum].push(i);
        }
    }
    // console.log(obj);
    return Object.values(obj);
}

console.log(findGroupsOfAnagram(["bag", "gab", "foo", "abg", "oof", "ofo"]));


// ques-3
// Sort an array of an element by parity means even then odd elements
// input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Output= [2, 4, 6, 8, 1, 3, 5, 7, 9];

/**
 * 
 * @param {Array[Numbers]} arr 
 * @step1 create a function to take input from user
 * @step2 create empty array odd & even and sort  arr in ascending order.
 * @step3 run a for of loop on arr and check if i is divisble by 2 the push i even else push i in odd.
 * @step4 return merged array of even and odd. 
 */
let sortByParity=(arr)=>{
    let even=[];
    let odd=[];
    arr.sort((a,b)=>a-b);
    for(let i of arr){
        if(i%2==0){
            even.push(i)
        }else{
            odd.push(i);
        }
    }
    return [...even,...odd];
}

console.log(sortByParity([1, 2, 3, 4, 5, 6, 7, 8, 9]));


// ques-4
// Move all the zeroes at the end of an elements
// input = [1, 0, 2, 0, 0, 9, 0, 6, 7];
// Output = [1, 2, 9, 6, 7, 0, 0, 0, 0];

/**
 * 
 * @param {Array} arr
 * @step1 create a function to take input from user.
 * @step3 creata a empty array zero , out.
 * @step2 run a for of loop on arr and if element==0 then push elemt to zeros else push element to out;
 * @step4 return merged array of out and zeros.
 *        
 */
let moveZerosAtEnd=(arr)=>{
    let out=[];
    let zero=[];
    for(let i of arr){
        if (i==0){
            zero.push(i);
        }else{
            out.push(i);
        }
    }
    return [...out, ...zero];
}

console.log(moveZerosAtEnd([1, 0, 2, 0, 0, 9, 0, 6, 7]));


// ques-5
// Print consecutive numbers
// input = 10
// Output = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

/**
 * 
 * @param {Number} num 
 * @step1 create a function to take input from user.
 * @step2 create a variable consecutive=1
 * @step3 runa for loop from i=2 till i=num and concatenate i to consecutive.
 * @step4 return consecutive.
 */
let getConsecutiveNumbers=(num)=>{
    let consecutive=1;
    for (let i = 2;i<=num;i++){
        consecutive+=`, ${i}`;
    }
    return consecutive;
}

console.log(getConsecutiveNumbers(10));



