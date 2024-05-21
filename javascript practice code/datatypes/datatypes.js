// Types of primitive datatypes

// Number : Represents numeric value, including integers and floating-points number
// Example
var myNumber = 3;
console.log(myNumber);

// String : Represents a sequence of character enclosed in single or double quotes
// Example
var myName = "vaikunda";
console.log(myName);

// Boolean : represents a logical entity with two values: true or false
// Example
var isRaining = false;
var areYouAwesome = true;
console.log(isRaining);

// Undefined : represents a absence of value or an uninitialized variable
// Example
var vaikunda;
console.log(vaikunda);

// Null : Represents the absence of a value, It is often used to explicitly indicate that a variable or object property has no assigned value
// Example
var badMemories = null;
console.log(badMemories);

// Bigint : Represents integers of arbitrary precision (available since ECMAscript 2020)
// Example
var bigNumber= 976931726497693172649769317264n;
console.log(bigNumber);

// Symbol : Represents a unique and immutable data type, often used to create unique identifiers.
// Example
// const mySymbol = Symbol(description)

//what is the purpose of typeof operator in javascript?
var myFriendName = "Durgesh";
console.log(myFriendName);
console.log(typeof myFriendName);

// What is the result of ‘typeof null’ in JavaScript ?
var badMemories = null;
console.log(badMemories);
console.log(typeof badMemories);

// Convert a string to a number?
// We just need to add the ‘+’ sign before the string and with the help of Number() Constructor
// Example
var myFavNum = "3";
console.log(typeof +myFavNum);
console.log(typeof Number(myFavNum));

// Convert a number to a string?
// We just need to add an empty string after the number
//Example
let str = 5;
console.log(typeof String(str));
console.log(typeof (str + " "));

// To Check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement.

var myName = "";
if(myName){
    console.log("this is a truthy");
}
else{
    console.log("this is a falsy");
}

// parseInt & parseFloat section
// parseInt and parseFloat are both function in JavaScript used for converting strings to numbers, but they have different use cases

//parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
const myStr = 42;
const myNumbers = parseInt(myStr);
console.log(myNumbers);

//parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number)
const myStri = 42.5;
const myNum = parseFloat(myStri);
console.log(myNum)

// here are some more example
console.log(parseInt("123"));
console.log(parseInt("123",10));
console.log(parseInt(   123));
console.log(parseInt("077"));
console.log(parseInt("1.9"));


//what is the purpose of the NaN value in JavaScript?
//NaN stands for “Not a Number” and is retuned when a mathematical operation doesn’t yield a valid number
//Also, to check whether a value is number or not we can use isNaN() function
//NaN (input can’t be converted to an integer)

console.log(isNaN("vaikunda"));
console.log(isNaN("5"));

//NaN == NaN is why false?

console.log(parseInt("xyz"));
console.log(parseInt("@%&"));

if(NaN == NaN){
    console.log("is equal");
} else {
    console.log("is not equal");
}