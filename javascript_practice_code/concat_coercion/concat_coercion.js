//In JavaScript, the + sign is not only used for arithmetic addition but also used for string concatenation. When the + operator is used with strings, it concatenates the strings together.
//It is important to note that if any operand of the + operator is a string, JavaScript will treat the other operands as string as well, resulting in string concatenation. If both operands are numbers, the + operator perform numeric addition


const str ="Hello " + "World";
console.log(str);

//Type coercion is the automatic conversion of “values” from one data type to another.
//It is a fundamental part of JavaScript and can be used to make code more readable and efficient.
//There are 2 types of coercion in JavaScript: Implicit and Explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer 
//It’s worth noting that type coercion can lead to unexpected results, so it’s essential to be aware of how JavaScript handles these situations.

//tricky interview question

console.log("5" + "10");
//concatenating two string

console.log("10" - "5");
//implicit coercion it is called type casting in typescript

console.log("Java" + "Script");
//concatenating two string

console.log(" "+" ");
//display empty spaces

console.log(" " + 0);
let sum =" "+0;
console.log(sum);
console.log(typeof sum);
//empty string + 0 is 0 concatenate with 0 datatype is string

console.log("Vaikunda" - "Nadar");
//return NaN - Not a Number

console.log(true + true);
//2
console.log(true + false);
//1
console.log(false + true);
//1
console.log(false - true);
//-1    