// ques-1
// To find kth smallest or largest element in an array
// input = findKthSmallestOrLargest[2,1,4,3,6,5,7], 3);
// Output{smallest: 3,largest: 5};

/**
 * 
 * @param {Array} arr 
 * @param {Number} k
 * @step1 create a function to get input from user.
 * @step2 sort the array in ascending order.
 * @step3 create an object having keys as smallest & largest and its values as arr[k-1] and arr[arr.length-k]
 * @step4 return object. 
 */
let findKthSmallestOrLargest=(arr,k)=>{
    arr.sort((a,b)=>a-b);
    let obj={};
    obj.smallest=arr[k-1];
    obj.largest=arr[arr.length-k];
    return obj;
}
console.log(findKthSmallestOrLargest([2,1,4,3,6,5,7],3));


// ques-2
// sort by frequency of the letters
// input = frequencySort("cCaaAAbbbBBB"));
// Output="bbbBBBaaAAcC"

/**
 * 
 * @param {String} str
 * @step1 creata a function to take input from user.
 * @step2 create an empty object. create an empty str.
 * @step3 run a for of loop on str, check if elemnt(within lowercase) is present as key in obj,
 *        if true then, within array increase the count of 1st element and concatenate i to array's second element.
 *        if false then, within array put 1st element as 1 and second elemt as string i.
 * @step4 use object.values to get      
 */
let frequencySort=(str)=>{
    let obj={};
    for(let i of str){
        let small=i.toLowerCase();
        if(!obj[small]){
            obj[small]=[];
            obj[small][0]=1;
            obj[small][1]=i;
        }else{
            obj[small][0]+=1;
            obj[small][1]+=i;
        }
    }
    // console.log(obj);
    // console.log(Object.values(obj).sort((a,b)=>b[0]-a[0]));
    return Object.values(obj).sort((a,b)=>b[0]-a[0]).reduce((total,e)=>total+e[1],'');
}

console.log(frequencySort("cCaaAAbbbBBB"));
console.log(frequencySort("ssdgaabbcCDtSeS"));


// ques-3
// To find the occurance of the character in a string
// input = findOccurance("cCaaAAbbbBBB")
// output = { c: 1, C: 1, a: 2, A: 2, b: 3, B: 3 }
/**
 * 
 * @param {String} str
 * @step1 create a function to take input from user.
 * @step2 create an empty object occurance.
 * @step3 run a for of loop on str and create a frequency table .
 * @step4 return occurance. 
 */
let findOccurance=(str)=>{
    let occurance={};
    for(let i of str){
        if(occurance[i]){
            occurance[i]+=1;
        }else{
            occurance[i]=1;
        }
    }
    return occurance;
}

console.log(findOccurance("cCaaAAbbbBBB"))


//let
//    let  lte etl elt tle tel 

// abcd
//      abcd abdc acbd acdb adbc adcb