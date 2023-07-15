// ques-1
// To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method

/**
 * 
 * @param {string} str
 * @step1 create an function to get input from user (str).
 * @step2 create a empty string rev.
 * @step3 run a for loop from str1.length till 0 and concatenate each elemnet to rev.
 * @step4 check if str1 and rev are same in lower case, if yes then return true else return false.
 */
let pali=(str)=>{
    let rev='';
    for(let i =str.length-1;i>=0;i--){
        rev+=str[i];
    }
    return (str.toLowerCase()===rev.toLowerCase());
}

console.log(pali("Madam"));


// ques-2
// To check the string or number is palindrome or not( ex: 121,madam,anna) using diving length by 2 and then comparing

/**
 * 
 * @param {string} str
 * @step1 create an function to get input from user (str).
 * @step2 create a variable j and initialize it with str.length-1;
 * @step2 run a for loop from i=0 till str.length/2;
 * @step3 check if first character charcater is equql to last charater in lower case,
 *        if not return false else decrement the value of j by 1.
 * @step4 return true.
 */

let palin=(str)=>{
    let j=str.length-1;
    for(i=0;i<str.length/2;i++){
        if (str[i].toLowerCase()!=str[j].toLowerCase()){
            return false;
        }else{
            j--;
        }
    }
    return true;
}

console.log(palin("Madam"));


//ques-3
// To find longest word from a string using (for of Loop) means iterate by an elements not by indexing

/**
 * 
 * @param {string} str
 * @step1 create a function to get input from user (str).
 * @step2 split the stirng into array arr consisting of individual words. 
 * @step2_2 check if arr.length equal to 1 then return str.
 * @step3 create variable maxlen and initialize it with 0.
 * @step4 run for of loop on array of words and within loop check if maxlen>element.length than len=element.length.
 * @step5 using filter on arr and to get elemnts whose length is equal to maxlen and store it in new out array.
 * @step6 return   
 * 
 */
let longest_word=(str)=>{
    let arr=str.split(" ");
    if (arr.length==1){
        return str;
    }
    let max_len=0;
    for(let i of arr){
        if(max_len<i.length){
            max_len=i.length;
        }
    }
    let out=arr.filter((x)=>max_len===x.length);
    // console.log(out);
    return out;
}

console.log(longest_word("Hello how are you today"));


// que-4
// To find longest word from a string using functions.

/**
 * 
 * @param {string} str
 * @step1 create a function to get input from user (str).
 * @step2 split the stirng into array arr consisting of individual words. Create empty array len to store length of each words
 * @step3 check if arr.length equal to 1 then return str.
 * @step4 using foreach() function to calculate length of each word in array.
 * @step5 using Math.max to get max value of length.
 * @step6 using filter() function to get words whose length is equal to max length and store it in variable out.
 * @step7 return out.
 */

let longest_word1=(str)=>{
    let arr=str.split(" ");
    if(arr.length==1){
        return str;
    }
    let len=[];
    arr.forEach((elem)=>{
        len.push(elem.length);
        return len;
    });
    let max_len=Math.max(...len);
    let out= arr.filter((x)=>x.length===max_len);
    return out;
}

console.log(longest_word1("Hello how are you today"));










