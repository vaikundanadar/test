//If Statement 
//If Else: The If.. Else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.  

var temp = 40;

if (temp >30){
    console.log("lets go to beach");
} else {
    console.log("TV dekhte hai yr");
}

//we can also use else if clause to check additional conditions:
var temp = 30;

if (temp >30){
    console.log("lets go to beach");
} else if(temp >= 20 && temp < 30){
    console.log("TV dekhte hai yr");
}else {
    console.log("go to bed and sleep");
}


//Requirement
//If a person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
//If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
//If a person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
//If the person is 18 or older, a citizen, but not registered to vote Display a message saying they are not eligible due to registration status.
//Extended voting eligibility checker with additional conditions 

//Assume the user’s age. Citizenship status and registration status as input
var userAge = 19;
var isCitizen = true; //Assume true for citizen false for non citizen
var isRegistered = false; //Assume false for not registered true for registered
//check eligibility  using if ... else statement  with mulyiple conditions

if (userAge >= 18){
    if(isCitizen){
        if(isRegistered){
            console.log("you are eligible for vote");
        } else {
            console.log("you are not eligible due to registration status");
        }
    } else {
        console.log("you are not eligible for citizenship status");
    }
} else {
    console.log("You are not eligible for vote (Younger)");
}

//interview Question

//write a number to check if a number is even or odd

var num = 6;
if ( num % 2 ===0){
    console.log(num +" is even number");
} else {
    console.log(num +" is odd number");
}

//write a program to check if a number is prime.
//todo Prime numbers are numbers that have only 2 factors: 1 and themselves
//all prime number is greater than 2 are odd
//However, not all odd numbers are prime

var num = 13;
var isPrime = true;
debugger;
for (var i = 2; i < num; i++){
    if (num % i === 0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log("number is prime");
} else {
    console.log("number is not a prime number");
}
//check if a number is positive, negative, or zero.

//nested if.. else method
var num =0;

if (num != 0){
    if (num >0){
        console.log(num+ " is a positive number");
    }else {
        console.log(num+ " is a negative number");
    }
} else {
    console.log(num+ " is zero");
}

//if.. else ladder method
if (num === 0){
    console.log("num is zero");
} else if (num >0){
    console.log("num is positive");
}else {
    console.log("numis negative");
}

// 2.Switch Statement
//Switch statement: The switch statement is used to perform different actions based on different conditions

//Explain how switch statements works and what will be the output when the variable day is set to different values
var day = "Monday";

switch (day) {
    case "Monday":
        console.log("today is monday");
        break;
    case "Friday":
        console.log("omg lets have party");
        break;
    case "Sunday":
        console.log("let's have party");
        break;
    default:
        console.log("no condition match");
}

//Challenge time 🤯
//Write a JavaScript switch statement that takes a variable areaOfShapes representing different shapes, and based on its value, calculates and logs the area of the corresponding shape. Consider three shapes: ‘Rectangle,’Circle,’ and ‘Square’ For ‘Rectangle,’ use variables a and b as the sides; for ‘circle,’ use a variable r as the radius; and for ‘Square,’use variable a as the side length. If the provided shape is not recognized, log a message saying ‘sorry the shape is not available.’ Test your switch statement with areaOfShapes set to ‘square’ and sides a and b set to 5 and 10, respectively. Ensure that the correct area (25 in this case) logged to the console

var areOfShapes = "circle";
var a = 5;
var b = 10;
var result;

switch(areOfShapes){
    case "square":
        result = a * a;
        console.log(result);
        break;
    
        case "rectangle":
        result = a * b;
        console.log(result);
        break;
    
        case "circle":
        r = 2;
        result = 3.142 *(r * r);
        console.log(result);
        break;
default :
console.log("no shape match");
}

//Explain the purpose of the code. What is it calculated based on the values of areaOfShapes, a and b?
//the code calculates and logs the area of different shapes (rectangle, circle, square) based on the value of the areaOfShapes variable

//what will be the output if areaOfShapes is set to “Square” and why?
//the output will be the square of the variable a (25) since the case matches “square.”

//why is there a break statement after each case in the switch statement ?
//the break statement is used to exit the switch statement after the corresponding case is executed, preventing fall-through to subsequent cases

//If areOfShapes is set to “circle”, what will be logged to the console, and why is the variable r defined within the case block?
//the output will be the area of the circle with radius r (28.26) since the case matches “circle” and r is defined within the case block. 

//what will happen if areaOfShapes is set to a shape that is not covered by any of the existing case statements?
//the default case logs “Sorry, the shape is not available” if areaOfShapes is set to a shape not covered by any existing case 

//how does the switch statement handle the flow of control based on the value of areaOfShapes
//the switch statement evaluates the value of areOfShapes and executes the code block corresponding to the matching case. The break statements ensure that only the relevant code block is executed

//3. while Loop

//simple while loop to count from 1 to 10

var i =1;
while( i <= 10 ){
    console.log(i);
    ++i;
}

//lets create a table of 5
var i =1;
while( i <= 10 ){
    console.log("5 * "+i +" = "+i*5);
    ++i;
}

//4. do while Loop
//do… while Loop: A do … while loop in JavaScript is similar to while loop, but it guarantees that the loop body will be executed at least once before checking the loop condition. The loop continues to execute while the specified condition is true, and it terminates when the condition is true, and it terminates when the condition is true, and it terminates when the condition becomes false


//simple do… while Loop to count from 1 to 10

var i =1;
do{
    console.log(i);
    ++i;
}while( i <= 10 )

//common use cases:
//when you want to guarantee the execution of the loop body at least once 
//when the number of iteration is not known beforehand, and you want to validate the condition after the first iteration.

//validating user input with a Do… while Loop (user need to write a valid number)

// let userInput;
// let positiveNumber;
// do{
//     userInput = prompt("enter any positive number: ");
//     positiveNumber = parseFloat(userInput);
// }while (isNaN(positiveNumber)|| positiveNumber <0 )
// console.log("you have entered positive number :"+positiveNumber);

//5. For Loop
//For Loop: A for loop in JavaScript is a control flow statement that allows you to repeatedly execute a block of code a specified number of times. It’s particularly useful when you know the exact number of iterations needed

//simple for Loop to count from 1 to 10

for (var i=1;i<=10;i++){
    console.log(i);
}

//key point:
//The initialization, condition, and iteration expressions are optional. You can omit any or all of them, but you must include the semicolons
//The code for(;;) {} represents an infinite loop in JavaScript. This construct is commonly used when you want a loop to run indefinitely or until a break statement is encountered within the loop. It’s equivalent to while (true) {}.

//use case: Game Development:
//In game development, an infinite loop can be used to continuously update and render game frames until a specific condition (e.g. , game over) is met.

// for (;;)
//     {
//     //Update game logic and render frames
//     }

//common use cases:
//when you know the exact number of iterations needed.
//Iterating over elements in an array.
//Performing a task a specific number of times.

//practice
//calculate the sum of numbers from 1 to 10 using a for loop 

var sum=0;
for (var num=1; num<=10; num++){
    sum =sum +num;
}
console.log(sum);

//program to check if a year is a leap year
//If a year is divisible by 4 and not divisible by 100 or
//If a year is divisible by 400
//then it is a leap year. Otherwise it is not a leap year

var year =2023;

if ((year % 4 === 0 && year % 400 !== 0)|| year % 400 === 0){
    console.log("It's a leap year.");
} else {
    console.log("It's not a leap year");
}

//draw pattern with asterisk

// i\j | 1   2   3   4   5
//-----|-------------------
// 1   | *
// 2   | *   *
// 3   | *   *   *
// 4   | *   *   *   *
// 5   | *   *   *   *   *

for (var i = 1; i <= 5; i++){
    var pattern ="";
    for (var j = 1; j <=i; j++){
            pattern = pattern + " *";
    }
    console.log(pattern);
}