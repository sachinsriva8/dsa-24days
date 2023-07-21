// ques-1
// Print of all numbers from start to end given number

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @step1 create a function to get input from user.
 * @step2 run a for loop from i=num1 till i=num2 and consoloe log each i within loop.
 */
let printNumber=(num1,num2)=>{
    for(let i=num1; i<=num2;i++){
        console.log(i);
    }
}
nbvcx 
printNumber(3,9);

// ques-2
// Remove or Delete elements from an array using various ways

// ways to delete element from loop are: 
// 1. pop().- delete last element of array.
let popElemnet=(arr)=>{
    arr.pop();
    return arr
}

// 2. splice().- delete any number of consecutive elements from an array.
let spliceElement=(arr)=>{
    arr.splice(2,1);
    return arr;
}

// 3. shift().-delete 1st elemt of array.
let deleteUsingShift=(arr)=>{
    arr.shift();
    return arr;
}

// 4.-delete operator
let deleteUsingdelete=(arr)=>{
    delete arr[1];        //using delete will create empty space within array.
    return arr;
}

console.log(popElemnet([1,2,3,4,5]));
console.log(spliceElement([1,2,3,4,5]));
console.log(deleteUsingShift([1,2,3,4,5]));
console.log(deleteUsingdelete([1,2,3,4,5]));


// ques-3
// Spiral Matrix Printing | Print the elements of a matrix in spiral form

// Input
// var input = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
// Output -> [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];

/**
 * 
 * @param {array[array]} arr
 * @step1 create a function to take input from user.
 * @step2 create an empty array out.
 * @step3 create  variable b=0 for indexing in out array.
 * @step4 run a while loop until arr.length!==0.
 * @step5 use shift() to extract first  row of matrix and store in out.
 * @step6 use pop() to extract last coloumn of matrix and store in out.
 * @step7 use pop() to extract last row of matrix and store in out.
 * @step8 use shift() to extract the 1st column of matrix and store in out.
 * @step9 step5-step8 will be repeated till arr.length==0.
 * @step10 return out.
 * 
 */
let spiralMatrixPrinting=(arr)=>{
    let b=0;
    let out=[];
    let i=0;
    while(arr.length!=0){
        while(arr[i].length!=0){
            out[b]=arr[i].shift();
            b++;
        }
        arr=arr.filter(function(x){return x.length!==0});
        if(arr.length!==0){
            while(i!=arr.length){
                out[b]=arr[i].pop();
                b++;
                i++;
            }
            i--;
            arr=arr.filter(function(x){return x.length!==0});
            if(arr.length!=0){
                while(arr[i].length>0){
                    out[b]=arr[i].pop();
                    b++;
                }
                arr=arr.filter(function(x){return x.length!==0});
                i--;
                if(arr.length!=0){
                    while(i!=0){
                        out[b]=arr[i].shift();
                        b++;
                        i--;
                    }    
                }
                arr=arr.filter(function(x){return x.length!==0});
            }
        }

    }
    return out;
}

console.log(spiralMatrixPrinting([[1, 2, 3, 4],
                                  [5, 6, 7, 8],
                                  [9, 10, 11, 12],
                                  [13, 14, 15, 16]]))




