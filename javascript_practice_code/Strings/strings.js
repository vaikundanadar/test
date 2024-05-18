// JavaScript Strings
// Topic covered in strings
// 1. Strings & its properties
// 2. Escape Character
// 3. String search Methods
// 4. Extracting String Parts
// 5. Extracting String Characters
// 6. Replacing String Contents
// 7. Other Useful Methods


//strings in JavaScript are a fundamental data type that represents a sequence of characters

// Note
//strings created with single and double quotes works the same
//There is no difference between the two
// 1.Strings  Properties
//length: Property that returns the length of the string (number of characters)

// 2.Escape Character
//Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

// Code		Result		Description
// \’		‘		Single quote
// \”		“		Double quote
// \\		\		Backslash

// let text = "hello 'Durgesh' and \"Savio\"";
// console.log(text);

// 3.String Search Methods
//a indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:

// let text ="Vaikunda Nadar";
// console.log(text.indexOf("N"));

// let strArr =Array.from(text);
// console.log(strArr);

// let strMap = strArr.map((currentElem, index) =>`${currentElem} - ${index}`)
// console.log(strMap);

// search()
//c search(): The search() method searches a string for a string (or a regular expression) and return the position of the match
//return the index number where the first match is found. Returns -1 if no match is found.
// let text = "welcome to JavaScript programming ";

// let result = text.search(/Javascript/i);
// console.log(result);

// match()
//match(): returns an array of the matched values or null if no match is found
// let text = "welcome to JavaScript programming hello all JavaScript developer";
// let result = text.match(/Javascript/gi);
// console.log(result);

// matchAll()
//matchAll(): Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found
// let text = "welcome to JavaScript programming hello all JavaScript developer";
// let result = text.matchAll("JavaScript");
// console.loṇg(...result);

// for (let item of result){
//     console.log(item[0]);
// }

// include()
//includes(): Returns true if the string contains the specified value, and false otherwise.
// let text = "welcome to JavaScript programming hello all JavaScript developer";
// let result = text.includes("JavaScript");
// console.log(result);
// Note include is case sensitive. include() is an ES6 feature


// startsWith()
//startsWith(): The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false:
// let text = "welcome to JavaScript programming hello all JavaScript developer";
// let result = text.startsWith("JavaScript");
// console.log(result);
//start position for the search can be specified
// let result = text.startsWith("JavaScript",11);
// console.log(result);

// endsWith()
// endswith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false

// let text = "welcome to JavaScript programming hello all JavaScript developer";
// let result = text.endsWith("developer");
// console.log(result);

//a slice() extracts a part of a string and returns the extracted part in a new string
// 1. JavaScript counts position from zero
// 2. slice() extracts up to but not including indexEnd

//todo JavaScript count position from zero
//first position is 0. Second position is 1
// let text = "welcome to JavaScript programming hello all JavaScript developer";
// let result = text.slice(6);
// let result = text.slice(6,15);
// console.log(result);

// subString()
//a substring: Extracts a portion of the string based on starting and ending indices
//camelCase is used to separate words, substring is not to be intended as Sub String but as  Substring


// let text = "welcome to JavaScript programming hello all JavaScript developer";
// let result =text.substring(0);
// let result =text.substring(1);
// let result =text.substring(-5);
// console.log(result);

// Similarities

// In both the slice() and substring() methods, the end parameter indicates the ending index up to which the extraction occurs, but the character at the end index is executed from the extracted substring.

// let text = "Welcome to JavaScript programming hello all JavaScript developer";
// let result = text.slice(1);
// let result = text.replace("W", " ");
// let result = text.substring(1);
//optional
// let result = text.replaceAll("JavaScript", "LiveScript");
// console.log(result);

// 5. Extracting String Characters
// There are three method to extracting string characters:

// The charAt(position) Method
// The charCodeAt(position) Method
// The at(position) Method

// let text = "Welcome to JavaScript programming hello all JavaScript developer";
// let result = text.charAt(-6);
// console.log(result);

//charCodeAt(): The charcodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535

// let text = "Welcome to JavaScript programming hello all JavaScript developer";
// let result = text.charCodeAt(12);
// console.log(result);

// at()
//todo ES2022 introduced the string method at():
//at(): The at() method returns the character at a specified index (position) 	in a string. The at() method returns the same as charAt()
// 1: It allows the use of negative indexes while charAt() does not.

// let text = "Welcome to JavaScript programming hello all JavaScript developer";
// let result = text.at(-9);
// console.log(result);

// 6. Replacing String Contents
// replace()
//replace(): The replace() method is used to replace a specified value with another value.

// const str ="hello world";
// const result = str.replace("world","JavaScript");
// console.log(result);

//Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use the i Flag in the regular expression

// let originalString = "Hello, World! How are you, World?";
// let replacedString = originalString.replace(/world/gi,"vaikunda");
// console.log(replacedString);

// 7. Other Useful Methods
// toUpperCase and toLowerCase: Converts the string to uppercase or lowercase

// let str = "JavaScript";
// let capitalLetters = str.toUpperCase();
// let smallLetters = str.toLowerCase();
// console.log(`${capitalLetters} - ${smallLetters}`);

//trim: Removes whitespace from both ends of the string.

// const str ="            vaikunda        ";
// console.log(str.length);
// let whiteSpace = str.trim();
// console.log(whiteSpace);
// console.log(whiteSpace.length);

//splits: Splits the string into an array of substrings based on a specified delimiter. 

// let str = "apple,banana,orange";
// let strArr = str.split(",").reverse().join();
// console.log(strArr);

// Interview Question
//1. write a JavaScript function that prints the letters ‘a’ through ‘z’ in the console. You should use a loop to iterate through the letters and print each one on a new line.

// for (let char =97; char <= 122; char++){
//     console.log(String.fromCharCode(char));
// }

//2. write a function to count the number of vowels in a strings
// const checkAllVowelsPresentsOrNot = (str)=>{
//     let counts=0;
//     const vowels = 'aeiou';
//     for(let char of str){
//         if(vowels.includes(char)){
//             counts++;
//         }
//     }
//     return counts;
// }

// console.log(checkAllVowelsPresentsOrNot("my name is vaikunda"));
//3. write a function to check if all the vowels presents in a string or not

// const checkAllVowelsPresentsOrNot = ((str)=>{
//     const vowels = 'aeiou';
//     for(let char of vowels){
//         if(!(str.includes(char))){
//             return false;
//         }
//     }
//     return true;
// })

// console.log(checkAllVowelsPresentsOrNot("my name is vaikunda"));

// Write a JavaScript function isPangram that takes a string as input and returns true if the string is a pangram (contains all letters of the alphabet) and false otherwise. The function should be case-insensitive and ignore spaces.
// Constrains:
// 1: The input string will consist of alphabetic characters and spaces.
// 2: The function should handle both uppercase and lowercase letters
// 3: Consider the English alphabet with 26 letters.

const pangramChecker =(str) =>{
    let inputArr =str.toLowerCase().split("");

    const value=inputArr.filter((currentElem)=>
        currentElem.charCodeAt() >= "a".charCodeAt() && currentElem.charCodeAt() <="z".charCodeAt()
    )

    //return [...new Set(value)].length === 26;
    return new Set(value).size === 26;
}

console.log(pangramChecker("The quick brown fox jumps over the lazy dog"));
