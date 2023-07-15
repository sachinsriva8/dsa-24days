
//que-1
//To find a first pair from a number array whose sum is zero


/**
 * 
 * @param {array[number]} arr
 * @step1 create a function to take input from user.
 * @step2 iterate over a given array and check if any elemnt have its negative equivalent value
 *        using indexOf() if yes then retur the values.
 * @step3 return -1;
 */
let first_pair=(arr)=>{
    for(let i of arr){
        if(arr.indexOf(-i)>-1){
            return `${i} ${-i}`;
        }
    }
    return -1;
}

console.log(first_pair([-3, 1, 2, -1, -2, 3]));


//ques-2
//To find a first pair from a number array whose sum is zero using indexing

// [-3, 1, 2, -1, -2, 3]

/**
 * 
 * @param {array[numbers]} arr
 * @step1 create a function to take input from user (arr)
 * @step2 run a for loop from i=0 till length of arr on arr and pick each elememt
 *        and check with rest of the  elemnt by running loop from j=i+1 till length of array
 * @step3 if i+j==0 then return the pair. 
 * @step4 return -1;
 */
let first_pair_zero=(arr=[-3, 1, 2, -1, -2, 3])=>{
    for(let i=0;i<=arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==0){
                return `${arr[i]} ${arr[j]}`;
            }
        }
    }
    return -1;
}

console.log(first_pair_zero());


// ques-3
// To find the largest pair of the 2 elements using indexing with unsorted elements

/**
 * 
 * @param {array[number]} arr 
 * @step1 create a function to take input from user.
 * @step2 create a empty string to store largest pair.
 * @step3 run a loop 2 time from i=0 till i less than 2, create a variable num_max=0 and position
 * @step4 calculate max_num by running for loop from j=0; till array.length.
 * @step5 once we get max_num then splice that max_value from array and repaet above 
 *        process once again to get second highest value. join highest and second highest value.
 * @step6 return highest and second highest value.
 */
let largest_pair=(arr)=>{
    let out=``;
    for(let i=0;i<2;i++){
        let max_num=0;
        let a=0;
        for(let j=0; j<arr.length;j++){
            if(max_num<arr[j]){
                max_num=arr[j];
                a=j;
            }
        }
        arr.splice(a,1);
        out+=` ${max_num}`;
    }
    return out;
}

console.log(largest_pair([20, 5, 30, 15, 10, 25, 1]));







