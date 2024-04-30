//1. Assignment operators
//Assignment operators in programming are symbols used to assign values to variables. They take the value on the right side of the operator and assign it to the variable on the left side.

//examples

var myFavNum = 3;
console.log(myFavNum);
//Assigns the value 3 to myFavNum

// 2.Arithmetic operators
//Arithmetic operators in programming perform basic mathematical operations on variables or values. They include Addition, Subtraction, Multiplication, Division and Modulus(remainder).

//Addition (+): Adds two values or variables.
//example
var x=5;
var y=10
var sum =x+y;
console.log(sum);

//Subtraction (-): Subtracts the right operads from the left operands

var a=25;
var b=20;
var difference =a-b;
console.log(difference);

//Multiplication (*): Multiplies two values or variables

var p=5;
var q=3;
var product=p*q;
console.log(product);

//division (/): Divides the left operand by the right operand.

var x=12;
var y=2;
var quotient = x/y;
console.log(quotient);

//Modulus (%): Returns the remainder when the left operand is divided by the right operand

var m=12;
var n=3;
var remainder=m%n;
console.log(remainder);

//Challenge time

//what will be the output

var result="hello"/2;
console.log(result);

//Interview Question

var results = 0.1 + 0.2;
console.log(results);
console.log(results.toFixed(2));
//when working with floating-point numbers in JavaScript, consider using methods like toFixed() when precise decimal representation is necessary

//var result = 55 * "hello" ?
var result = 55 * "hello";
console.log(result);

//3. String Operators
//There are few ways to concatenate strings in JavaScript. The most common way is to use the + operator. For example, to concatenate the strings "Hello" and "World", you would use the following code

var str1 = "Hello ";
var str2 = "World";
var str3 = str1+str2;
console.log(str3);

//Interview Question

// console.log("5" + 3); Output 53
console.log("5" + 3); 

// 4.Comparison Operators
//comparison operators in JavaScript are used to compare values and return a Boolean result (true or false).

//Equal (==) 
//Checks if two values are equal, performing type coercion if necessary 
console.log(5 == 5);

//Strict Equal (===)
//checks if two values are equal without performing type coercion.
console.log(5===5); 

//Not Equal (!=)
//Check if two values are not equals,performing type coercion if necessary
console.log(5 != "5");
console.log(5 != 4);

//Greater Than (>):
//Checks if the value on the left is greater then the value on the right
console.log(5 > 2);

//less Than (<):
//Checks if the value on the left is less then the value on the right
console.log(5 < 2);

//Greater Than or Equal To (>=)
//Checks if the value on the left is Greater than or equal to the value on the right  
console.log(25>=40);

//less Than or Equal To (>=)
//Checks if the value on the left is less than or equal to the value on the right  
console.log(25<=40);

//interview question
//what is the difference between == and === operator in JavaScript

//The equality == operator is a comparison operator that compares two values and returns true if they are equal

var num1=1;
var num2="1";

if(num1==num2){
    console.log("equal");
} else {
    console.log("not equal");
}

//The strict equality === operator is also a comparison operator, but it compares two values and returns true only if they are equal and of the same type.

var num1=1;
var num2="1";

if(num1===num2){
    console.log("equal");
} else {
    console.log("not equal");
}

//5 There are three main logical operators: && (logical AND) || (logical OR) ! (logical NOT)

//logical AND (&&): Returns true if both operands are true otherwise, it return false

var x=5;
var y=10;
console.log(x > 0 && y > 0);

//logical OR (||): Returns true if at least one of the operands is true,otherwise, it return false

var a=15;
var b=0;
console.log(a > 10 || b > 10);

//logical NOT (!): Returns true if the operand is false, and false if the operand is true

var isOpen = false;
console.log(!isOpen);

//Interview Question
//Combining logical operators allows you to create complex conditions:
// Q: Write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and having a valid driver's licence

var age = 14;
var hadDrivingLicense = true;

console.log(age >=18 && hadDrivingLicense);

//Q: How would the result change if hasDriverLicense was set to false
var age = 19;
var hadDrivingLicense = false;

console.log(age >=18 && hadDrivingLicense);

//6. Conditional (Ternary) Operators
// write a program to check if the candidate  isEligibleForDrive or not?Age must be equal to or greater than 18

var age=19
age >=18 ? console.log("Candidates is Eligible for Drive") :console.log("Candidates is not Eligible for Drive");
var result =age>=18 ? "yes" : "no";
console.log(result);

//let's say you have a variable score representing a student's exam score. If the score is greater than or equal to 60, the student passes;
//otherwise, they fail. Use the conditional (ternary) operator to determine the result and store it in a variable called result. Log the result to the console

var score = 58;
var result = score >=60 ? "pass" : "fail";
console.log(result); 

//Combined Interview Question
console.log("5" - 3);
//implicit type coercion output is 2

console.log(2 < 12 < 5); //True(exp. evaluates from left to right)
//2<12 =true in java script true = 1 and false = 0 now 1 < 5 output true

console.log("20" + 10 + 10);// always evaluates left to right
//2010 become string final output will be 201010