//Modern JavaScript ECMAScript 2015

//LET AND CONST

//Let keyword: The let keyword is used to declare variables with block scope variables declared with let are mutable, meaning their values can be resigned

// var myFavWorldBestName = "Vaikunda Vasagam Ganesh Nadar";
// myFavWorldBestName = "Vaikunda Nadar";
// console.log(myFavWorldBestName);

// let myFavWorldBestName ="Vaikunda Vasagam Ganesh Nadar";
// myFavWorldBestName = "Vaikunda Nadar";
// console.log(myFavWorldBestName);
//const keyword: The const keyword is used to declare a variable with block scope, but once a value is assigned to a const variable, it cannot be reassigned. const variables are immutable

// const myFavWorldBestName ="Vaikunda Vasagam Ganesh Nadar";
// // myFavWorldBestName = "Vaikunda Nadar";
// console.log(myFavWorldBestName);

//1st show what var can do

// var name = "Nadar";

// if(true){
//     var name = "Vaikunda";
//     console.log(name);
// }

// name = "Ganesh";
// console.log(name);

//exp 2 with the help of let keyword

//let name ="Durgesh";

// if(true){
//     let name = "Vaikunda";
//     console.log(name);
    
// }
//let name = "Ganesh";
//console.log(name);

//exp 3 with the help of const keyword

// const name ="Durgesh";

// if(true){
//     const name = "Vaikunda";
//     console.log(name);
// }

// const name = "Nadar";
// console.log(name);

// let name ="Durgesh";

// if(true){
//     let name = "Vaikunda";
//     console.log(name);
// }

// name = "Nadar";
// console.log(name);

//String laterals
//In ECMAScript 6 (ES6), template strings, also known as template literals, provide a convenient and flexible way to create strings in JavaScript. Template strings are enclosed in backticks (``) rather than single and double quotes 

let firstName = "Vaikunda";
let lastName = "Nadar";

console.log(firstName + lastName);
console.log(`${firstName} ${lastName}`); //string laterals

//String interpolation: Template strings support String interpolation, allowing you to embed expressions directly within the string. Interpolated expression are enclosed in ${} 
age = 30;

console.log(`i am ${age} years old`);

//Multi-line Strings: Template strings make it easy to create multi-line strings make it easy to create multi-line strings without the need for concatenation or escape character

let multiString = `Hi👋 Savio, 
I just finished learning JavaScript
Now i am a JavaScript Developer`;

console.log(multiString);

//expression evaluation: Template expression can include any valid JavaScript expression

let num = 5;
console.log(`5 * ${num} = ${5*num}`);

//Advantages
//Readability: Template strings make the code more readable, especially for complex string constructions

//Conciseness: They eliminate the need for explicit string concatenation and reduce the use of escape character

//Expression Flexibility: Any JavaScript expression can be embedded within ${}

//Multi-line support: creating multiline strings is more straightforward

//3. DEFAULT PARAMETER ES6
//in ECMAScript 6 (ES6), default parameters were introduced, providing a more concise way to handle function parameter defaults. Default parameters allow you to specify default values for function parameters in the function declaration itself. If the parameter is not provided when the function is called, the default value is used 

//Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed

//write a function to find the sum of two numbers? what if during function call user only passed one argument

function sum(a = 10, b = 20){
    return a+b;
}

console.log(sum(2));

//4. FAT ARROW FUNCTION
//In ECMAScript 6 / (ES6), arrow functions, also known as fat arrow functions, were introduced as a concise way to write anonymous functions

//Ananomus function
const sums = function (a,b){
    let result=`sum of ${a} and ${b} is ${a+b}`;
    console.log(result);
}

sums(10,30);

//fat Arrow function
const sum1 = (a,b) =>{
    let result=`sum of ${a} and ${b} is ${a+b}`;
    console.log(result);
}

sum1(22,33);

//fat Arrow function example no 2

const sum2 = (a,b) => console.log(`sum of ${a} and ${b} is ${a+b}`);

sum2(3,3);

//todo Notes

//1. If the function body consists of a single expression, the braces {} and the return keyword can be omitted 
const sum3 = (a,b) => console.log(`sum of ${a} and ${b} is ${a+b}`);

sum3(3,3);

//2. If there is only one parameter, the parentheses () around list can be omitted 
const square = a => `The square of ${a} is ${a * a}`;

console.log(square(2));

//3. If there are no parenthesis, use an empty set of parenthesis ()
const greet = () => console.log(`Hello Durgesh, Welcome to saiyan island`);
greet();    