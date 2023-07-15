
//duplicate string.
//1st approach-
/*function removeDuplicate(str){
var ary=[str]; //convertig string to a array having 1 element.
//console.log(ary);

for(i=0;i<ary[0].length;i++){
    for(j=i+1;j<=ary[0].length;){
        if(ary[0][i]==ary[0][j]){
            ary[0]=ary[0].substring(0,j)+ary[0].substring(j+1);    //time taken is 14 miliseconds.
            j=i+1;
            //console.log(ary);
        }else{
            j++;
        }
    }
}
return ary[0];
}

let start = Date.now();
console.log(removeDuplicate("tthis is my firstt dsa "))
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
*/

/*
//2nd aaproach:
function deleteDup2ndChr(str){
var chr=str.split("");
for(i=0;i<chr.length;i++){
    for(j=i+1;j<chr.length;){
        if(chr[i]==chr[j]){
            chr.splice(j,1);
            j=i+1;
        }else{
            j++;
        }
    }
}
return (chr.join(''));
}
let start = Date.now();
console.log(deleteDup2ndChr("tthis is my firstt dsa "));  //time taken is 8 milliseconds.
let timeTaken = Date.now() - start;
console.log("Total time taken : " + timeTaken + " milliseconds");
*/



//Day-1 ques-2

// Remove Duplicate characters from array of element and find the count of an elements using set

// duplicate_array = ['a', 'b', 'c', 'a', 'd', 'e', 'b', 'f', 'g', 'a'];


/**
 * 
 * @param {character_array} arr 
 * @step1 creata a function to take input from user.
 * @step2 first we will convert input array to set and store it n a variable st.
 * @step2_1 create empty object as freq 
 * @step3 Run our first loop to pick each elemnt of set. and wthin loop create count variable with initial value as -1.
 * @step4 run second loop  till length of array to compare each set element with each array element.
 * @step5 if value matches then remove that elemnt from array and increase the value of count by 1.
 * @step6 after second for loop add each set value to object as key and count value as its value.
 * @step7 return arr and 
 * 
 * */
function duplcate_set(arr){
    let st=new Set(arr);
    let freq={};
    for(let i of st){
        let count=-1;
        for (let j=0; j<arr.length;j++){
            if(i==arr[j]){
                arr.splice(j,1);
                count++;
                j=0;
            }
        }
        freq[i]=count;
    }
    return {'removed_dup': st, duplicate_cunt: freq};
}

console.log(duplcate_set(['a', 'b', 'c', 'a', 'd', 'e', 'b', 'f', 'g', 'a']));



// day 1 - ques-3
// Remove Duplicate characters from array of element using 


/**
 * 
 * @param {array} arr
 * @step1 create a functon to take input (array) from user.
 * @step2 create a new variable out to store output array of filter function.
 * @step3 we know that filter function will pass each array elemt to call back function and return only true value.
 * @step4 so call back function will take two value array elemt and aray itself.
 * @step5 return out
 */

let dupl_filter=(arr)=>{
    let out= arr.filter((e)=>{
        let count=-1;
        for(let i of arr){
            if(i==e){
                count++;
            }
        }
        return count==0;
    })
    return out;
}

console.log(dupl_filter(['a', 'b', 'c', 'a', 'd', 'e', 'b', 'f', 'g', 'a']));



// day1 ques4

// String reverse without reversing of individual words 
// (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join.

/**
 * 
 * @param {string} ary 
 * @step1 create a function to get inout from user.
 * @step2 create arr varable to store array of words from gven input string by splitting it on the basis of blank space
 * @step3 using reverse to reverse an array.
 * @step4 return string by joining each elemnt of reversed array.
 */

let rev=(str)=>{
    // str.split(" ");
    return str.split(" ").reverse().join(" ");
}

console.log(rev("Hello, how are you?"));


