// ques-1
// Sorting of a string/characters

/**
 * 
 * @param {string} str
 * @step1 create a function to take input from user.
 * @step2 split string into array using split().
 * @step3 use sort() funcion for sorting character array in ascending
 *        order and comparing character by converting each character to uppercase or lowercase.
 * @step4 return arrary.join(''). 
 */
let sort_char=(str)=>{
    let arr=str.split("");
    arr= arr.sort((a,b)=>{return a.toLowerCase()==b.toLowerCase() ?0 :a.toLowerCase()>b.toLowerCase()?1:-1});
    return arr.join("");
}

console.log(sort_char("dghyjhdbacf"));
console.log(sort_char("dghYjhdbAacf"));


// apparach-2 without using sort() buil in function.
/**
 * 
 * @param {string} str 
 * @step1 create a function to take input from user.
 * @step2 split string into array using split().
 * @step3 run a for loop from j=0 till j< arr.length-1 for sorting of entire array.
 * @step4 run a for loop from i=0 till i< arry.leght-1 and check 
 *        if ascii value of character at i > ascii value at i+1 if yes than swap the values in array. 
 * @step5 return arr.join() 
 */
let sort_char_without_sortfunction=(str)=>{
    let arr=str.split("");
    for(let j=0; j<arr.length-1;j++){
        for(let i=0; i<arr.length-1;i++){
            let temp='';
            if(arr[i].toLowerCase().charCodeAt(0)>arr[i+1].toLowerCase().charCodeAt(0)){
                temp=arr[i+1];
                arr[i+1]=arr[i];
                arr[i]=temp;
            }
        }
    }
    return arr.join("");
}

console.log(sort_char_without_sortfunction("dghyjhdbacf"));
console.log(sort_char_without_sortfunction("dghYjhdbAacf"));



// ques-2
// Sorting of a number array with or without inbuilt methods

/**
 * 
 * @param {array[numbers]} arr
 * @step1 create a function to get input from user.
 * @step2 use sort() inbuilt function on array and 
 *        within sort function pass callback anonymous 
 *        function (a,b)=>{if (a<b) return 1;if(a>b) return -1; if(a==b) return 0} for sorting in descending order.
 * @step3 return arr;
 */
let num_sort=(arr)=>{
    arr=arr.sort((a,b)=>{
        if (a<b) return 1;
        if (a>b) return -1;
        if (a==b) return 0;
    })
    return arr;
}

console.log(num_sort([0 , 2, 4, 99, 22, 13, 111, 121]));

/**
 * 
 * @param {array[numbers]} arr
 * @step1 create a function to get input from user. 
 * @step2 run a for loop from j=0 till arr.length for sorting entire array
 * @step3 run a for loop from i=0; till arr.length-1 and comparing if elemnt at i position is < element at i+1,
 *        if yes then swap their values.
 * @step4 return arr.
 */
let num_sort_without_inbuilt=(arr)=>{
    for(let j=0; j<arr.length-1;j++){
        for(let i=0; i< arr.length-1;i++){
            let temp=0;
            if(arr[i]<arr[i+1]){
                temp=arr[i+1];
                arr[i+1]=arr[i];
                arr[i]=temp;
            }
        }
    }
    return arr;
}

console.log(num_sort_without_inbuilt([0 , 2, 4, 99, 22, 13, 111, 121]));



// ques-3
// To check if given number is prime or not

/**
 * 
 * @param {Number} n
 * @step1 create a function to take input from user.
 * @step2 run a for loop from i=2 till n-1 and check if n is divisible by i, if yes than return false.
 * @Step3 return true.
 */
let is_prime=(n)=>{
    if(n==0){
        return `Enter number greater than 0`;
    }
    for(let i=2; i<n; i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

console.log(is_prime(2));
console.log(is_prime(121));
console.log(is_prime(11));
console.log(is_prime(0));


// ques-4
// To print all the prime numbers from 2 to 100

/**
 * @step1 create an anonymous function and immediately invoke it.
 * @step2 within anonymous function create a function prime that takes number and 
 *        check prime and return true or false.
 * @step3 create an empty string prm to concatenate each prime number from 2 to 100.
 * @step4 run a for loop from i=2 till 100. pass each i to prime function created 
 *        and check if returns true than concatenate i in prm.
 * @step5 console.log(prm).
 * 
 */


(()=>{
    function prime(n){
        for (let i=2;i<n;i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
    let prm=``;
    for(let i=2;i<100;i++){
        if(prime(i)){
            prm+=` ${i}`;
        }
    }
    console.log(prm);
})();



























