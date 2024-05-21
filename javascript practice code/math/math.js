// Math Object in JavaScript
//Math: The Math namespace object static properties and methods for mathematical constants and functions.
//Math works with the Number type. It does not work with BigInt

// 1.Constants
//Math.PI: Represents the mathematical constant pi (𝝅)

// const piValue = Math.PI;
// console.log(piValue);

// 2. Basic Operation
// Math.abs()
//Math.abs(): The Math.abs() static method returns the absolute value of a number 
//or in a single, how far the number is from 0. It will be always positive
// console.log(Math.abs(-5));

// Math.round()
//Math.round(x): Rounds a number to the nearest integer.
// const roundedValue = Math.round(9.9);
// console.log(roundedValue);

// Math.ceil()
//Math.ceil(x): Returns the value of x 	rounded up to the nearest integer: 
// const ceilValue = Math.ceil(9.1);
// console.log(ceilValue); 

// Math.floor()
//Math.floor(x): Returns the value of x rounded down to the nearest integer
// const floorValue = Math.floor(10.9);
// console.log(floorValue);

// Math.trunc()
//Math.trunc(x): Returns the integer part of x:
// const truncValue = Math.trunc(3.7);
// console.log(truncValue);

//todo Math.trunc() and Math.sign() were added to JavaScript 2015 - ES6.
// const truncValue = Math.trunc(-3.7);
// const floorValue = Math.floor(-3.7);
// console.log(truncValue);
// console.log(floorValue);

// Math.pow(x,y)
//Math.pow(x,y): Returns the value of x to the power of y

// console.log(Math.pow(2,3));
// console.log(2 ** 3); 

// Math.sqrt()
//Math.sqrt(x): returns the square root of x
// let squareRoot = Math.sqrt(25);
// console.log(squareRoot);

// Math.log(x)
//Math.log(x): Returns the natural logarithm of x
// let result = Math.log(2);
// console.log(result);

// Math.log2(x)
//Math.log2(x): Returns the base 2 logarithm of x
// let result = Math.log2(8);
// console.log(result);

// Interview Question
// Generate Random Number
// Math.random(): Math.random() returns a random number between 0 (inclusive), and 1(exclusive).

// console.log(Math.round(Math.random()*100));