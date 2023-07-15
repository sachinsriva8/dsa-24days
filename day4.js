// ques-1
// To find longest word from a string using custom code

/**
 * 
 * @param {string} str
 * @step1 create a function to take input from user (str)
 * @step2 break string into array of words. Declare and initialize max_len to zero.
 * @step3 calculating max_length of longest word by iterating though the array.
 * @step4 now pushing the word whose length matches to above calculated max_length into new array out.
 * @step5 return the out.
 */
let longest_custom=(str)=>{
    let arr= str.split(" ");
    let out=[];
    let max_len=0;
    for(let i =0; i<arr.length;i++){
        if (max_len<arr[i].length){
            max_len=arr[i].length;
        }
    }
    for (let i of arr){
        if(max_len==i.length){
            out.push(i);
        }
    }
    return b;
}

console.log(longest_custom("how Hello are you today"));


// let obj={1:3,4:5, 1:8};
// console.log(obj[1]);

// Second approach--using object.

/**
 * 
 * @param {string} str
 * @step1 create a function to take iput from user
 * @step2 create an array of words from input string. Create empty object obj.
 * @step3 In object my key would be word's length and value would be word.
 * @step4 to achieve step 3 we iterate over each word of array and
 *        within object we check if length is present or not, if present than add concatenate new word within it followed by space
 *        if not then add word to it.
 * @step5 now create an array key to store keys using Object.keys(obj).
 * @step6 run a for of loop over key to find maximum value among key. to skip loop we can use Math.max().
 * @step7 return obj[max_key]
 */

let longestword_object=(str="how Hello are you today")=>{
    let arr=str.split(" ");
    let obj={};

    for(let i of arr){
        if(obj.hasOwnProperty(i.length)){
            obj[i.length]+=` ${i}`;
        }else{
            obj[i.length]=`${i}`;
        }
    }
    let key=Object.keys(obj);
    let max_len=0;
    // max_len=Math.max(...(Object.keys(obj)));

    for(let i of key){
        if(max_len<(i)){
            max_len=i;
        }
    }
   return obj[max_len];
}
console.log(longestword_object("how Hello are you today"));



// ques-2
// To find longest common string from array of strings

/**
 * 
 * @param {array[string]} arr
 * @step1 create a function to get input from user (arr).
 * @step2 create an empty object and empty string (out). In object key would be the string and value would be its count.
 * @step3 iterate over array and check if object contain a string or not, 
 *        if it contain then increment the value by 1, else initialize value one to it.
 * @step4 create a array key_val to store key value pair of object using Object.entries(obj). 
 *        Create vaiable flag and initialize it with false (i.e.., common string present.)
 * @step5 iterate over each element of key_val and check if value greater than 1, 
 *        then calculate max_len of longest word as well as make flag as true.
 * @step6 if flag is false return -1, i.e.., no common string in array.
 * @step7 iterate through the loop of key_val and check which word is having length equal to 
 *        max_len and concatenate it with out (if there are multtiple word with same character)
 * @step8 return out. 
 */
let longest_common_word=(arr)=>{
    let obj={};
    let out='';
    for(let i of arr){
        if(obj.hasOwnProperty(i)){
            obj[i]+=1;
        }else{
            obj[i]=1;
        }
    }
    console.log(obj);

    let entry=Object.entries(obj);
    let flag=false;
    let max_len=0;
    let max_val=0;

    for(let i of entry){
        if(i[1]>1){
            flag=true;
            if(max_val<i[1]){   // calculating maximum occurance value  
                max_val=i[1];
                if( i[1]==max_val){   // calculating max_leng of word where word is having maximum occurence 
                    max_len=i[0].length;
                }
            }
        }
    }
    console.log(`max_len: ${max_len}`);
    console.log(`max_val : ${max_val}`);
    if (flag==false){
        return -1;
    }

    for(let i of entry){
        if(i[1]==max_val){
            out+=`${i[0]} `
        }
    }
    return out;
}

// && i[1]==max_val
// i[0].length==max_len && 

console.log(longest_common_word(["Hello", "World", "OpenAI", "Chatbot", "JavaScript",
                                "Programming", "OpenAI", "Web Development"]));

console.log(longest_common_word(["Hello", "World", "OpenAI", "Chatbot", "JavaScript",
                                 "Programming", "Web Development", "Array"]));

console.log(longest_common_word(["Element 1", "Element 2", "Element 3", "Element 4",
                                 "Element 5", "Element 1", "Element 7", "Element 3"]));

console.log(longest_common_word(["Element 1", "Element 2", "Element 3", "Element 3",
            "Element 5", "Element 1", "Element", "Element 3","Element 12","Element 12","Element 12","Element 12"]));                                 

console.log(longest_common_word(["Element 1", "Element 2", "Element 3", "Element 3",
            "Element 5", "Element 1", "Element", "Element 3","Element 12","Element 12","Element 12","Element 12"]));            


            



// ques-3
// To find vowels and its count in a given string

/**
 * 
 * @param {string} str
 * @step1 create a function to take string from user.
 * @step2 create a array of vowel (a,e,i,o,u) if uppercase vowel convert it to lower case while comparing.
 * @step3 create an empty object obj to store frequency of each vowel in a given string.Create an empty object out.
 * @step4 run a for of loop over string and check if i(character) is present in object, 
 *        if yes then increase value b 1 and if not initialize 1.
 * @step5 run a for loop over vowel array and check if vowel is present as key in obj,if yes store it in out object
 * @step6 return out.
 */
let vowel_count=(str="ThE quick brown fox jumps over the lazy dog.")=>{
    let v_arr=['a','e','i','o','u'];
    let obj={};
    for(let i of str){
        if(obj[i.toLowerCase()]){
            obj[i.toLowerCase()]+=1;
        }else{
            obj[i.toLowerCase()]=1;
        }
    }
    let out={};
    for(let i of v_arr){
        if(obj.hasOwnProperty(i)){
            out[i]=obj[i];
        }
    }
    console.log(out);
}

vowel_count();


// ques-4
// To find character occurance from the string

/**
 * 
 * @param {string} str
 * @step1 create a function to take string from user.
 * @step2 create a array of vowel (a,e,i,o,u) if uppercase vowel convert it to lower case while comparing.
 * @step3 create an empty object obj to store frequency of each vowel in a given string.Create an empty object out.
 * @step4 run a for of loop over string and check if i(character) is present in object, 
 *        if yes then increase value b 1 and if not initialize 1.
 * @step5 return obj. 
 */
let char_occu=(str)=>{
    let obj={};
    for(let i of str){
        if(obj[i]){
            obj[i]+=1;
        }else{
            obj[i]=1;
        }
    }
    return obj;
}








