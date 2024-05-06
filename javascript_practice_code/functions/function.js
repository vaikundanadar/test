//function in JavaScript
//In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks. 
//Functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable

//3 students at a same time wants to find sum of two numbers

//1st student
var a=5,b=10;

var sum1 =a+b;
console.log(sum1);

//2nd student
var a=15,b=20;

var sum2 =a+b;
console.log(sum2);

//3rd student
var a=20,b=30;

var sum3 =a+b;
console.log(sum3);

//let's make a reusable code

function sum( a, b ){
    return a + b;
}

console.log(sum(5,5));
console.log(sum(15,50));
console.log(sum(25,40));

//1.Function declaration
//Declare a function using the function keyword, followed by the function name, parameters (if any), and the function body.
//This step defines the function and specifies what code should be executed when the function is called.

// Syntax
// function greet(){
// console.log(“Welcome to vaikunda nadar github”);
// }	

//2.function Invocation (calling a function)
//After declaring a function, you can invoke or call it by using its name followed by parenthesis.
//If the function has parameters, provide values (arguments) for those parameters inside the parenthesis.

//How to call a function
// Syntax
// greet();

//practice time
//write a function to find the sum of two numbers

//todo Tips “1st declare the function & then call it” In JavaScript, it’s a good practice to declare (define) your functions before you call them. This ensure that the function is available for use when you try to call it

//function definition

// function sum(){
//     var a=5,b=10;
//     console.log(a+b);
// }

//calling the function

// sum();

// practice code
//Let say we want to greet student with one same line
//Write a JavaScript program that defines  a function called greet to welcome individuals to the programmer world. The function should take a name parameter and output the message “Hello [name], Welcome to the programmer world. Call the function twice, once with the argument “Vaikunda” and once with the argument “Durgesh”.

function greet(name){
    console.log("Hello "+ name +" Welcome to the programmer world");
}

greet("Vaikunda");
greet("Durgesh");

//Write a function to find the sum of two numbers with parameters

function add(a,b){
    console.log(a+b);
}

add(20,30);
add(40,40);

// 5.function Expression
//A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it’s named, it becomes a named function expression

var result = function sum(a,b){
    console.log(a+b);
}

result(20,30);

//6.Anonymous function
//An Anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name 
var result = function (a,b){
    console.log(a+b);
}

result(100,100);

//7.Return Keyword
//Return keyword in JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller 

//Syntax 
//return expression;

//returning a sum of two number 

function sum(a,b){
	return a+b;
}
console.log(sum(20,90));
result =sum(10,10);
console.log(result);
console.log("The sum of the two number is "+result);

// 8. IIFE- Immediately invoked function expression
//An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a way to create  a self-contained block of code that doesn’t interface with the surrounding code and executes immediately

// Syntax
// (function () {
// 	//code to be executed
// })();

var result = (function (a,b){
	console.log(a+b);
    return a+b;
})(5,10);

console.log("The sum of two number is "+result);

//interview Question
//Question 1: Calculator Function
//Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.

// console.log(calculator(5, 2, '+'));
// console.log(calculator(8, 4, '-'));
// console.log(calculator(10, 2, '/'));

function calculator(num1, num2, operator){
let result;
switch(operator){
    case "+":
        return num1+num2;
    case "-":
        result = num1-num2;
        return result;
    case "*":
        return num1*num2;
    case "/":
        if (num2 === 0){
            return `0 is not allowed`;
        } else {
            return num1/num2;
        }
    default : 
        return "Entered operator is not valid";
}
}

console.log(calculator(5, 2, '+'));
console.log(calculator(8, 4, '-'));
console.log(calculator(10, 2, '/'));
console.log(calculator(10, 0, '/'));
console.log(calculator(10, 2, '*'));

//Reverse a String:
//Write a function to reverse a given string without using built-in reverse function
const isReverse =(str) =>{
    let reverse="";
    for(let char = str.length-1; char>=0; char--) {
        reverse = reverse+str[char];
    }
    return reverse;
};
console.log(isReverse("vaikunda Nadar"));

//palindrome check
//Create a function to determine if a given string is a palindrome (read the same backward as forward)

const isPalindrome =(str) =>{
    let reverse="";
    for(let char = str.length-1; char>=0; char--) {
        reverse = reverse+str[char];
    }
return str === reverse ? true :false;
}


console.log(isPalindrome("vaikunda Nadar"));