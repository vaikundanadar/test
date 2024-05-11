//Arrays in JavaScript

//Iterable - object where you can the for-loop
//Array-like object - Any object with length property and use indexes to access items
//Arrays as Object: Arrays in JavaScript are a specific type of Object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//typeOf Operator: The typeOf operator in JavaScript

//JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//Creating Arrays:
//Arrays in JavaScript can be created using the Array constructor or with Array literals (Square bracket [])

//using array constructor
//let fruits = new Array("Apple","Banana","orange");

//using array literals
// let fruits = [ 'Apple', 'Banana', 'orange' ];
// console.log(fruits);
//we can also create an empty array
// let arr = [];
// console.log(typeof arr);

//Accessing Element:
//accessing Element: Array elements are accessed using zero-based indices.
// let fruits = [ 'Apple', 'Banana', 'orange' ];
// console.log(fruits[0]);

// Modifying Elements:
//Modifying Elements: You can modify array elements by assigning new values to specific indices
// let fruits = [ 'Apple', 'Banana', 'orange' ];
// fruits[2]="mango";
// console.log(fruits);

//Array traversal / Iterating Over Arrays

//let fruits =["apple","grapes","banana","orange","mango"];
//1. for of loop, also known as iterable
//for … of loop: The for … of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.
// for(let items of fruits){
//     console.log(items);
// }

// for (let items = 0; items<fruits.length;items++){
//     console.log(fruits[items]);
// }
// // 2. For in loop
// //for … in loop: The for … in loop is used to iterate over the properties (including indices) of an object
// for(let items in fruits){
//     console.log(items);
// }
// //3.forEach Method
// //the arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array

// fruits.forEach((current, ind, ar)=>{
//     console.log(`${current} ${ind} ${ar}`);
// })
// //4. Map function
// //map() creates a new array from calling a function for every array element
// fruits.map((current, ind, ar)=>{
//     console.log(`${current} ${ind} ${ar}`);
// })

// //to do practice
// //write a program to Multiply each element with 2

// const numbers = [1,2,3,4,5];
// //forEach - performs an action on each element
// //map - Creates a new array with transformed elements

// numbers.forEach((curentElements)=>{
//     console.log(`${curentElements*2}`);
// })

// const doubleValue = numbers.map((curentElements)=>{
//     return curentElements*2
// })

// console.log(doubleValue);

// Key differences
// Return Value:

// forEach: It doesn’t return a value. The forEach method is used for iterating over the elements of an array and performing a side effect, such as modifying the array or performing a task for each element.

// map: It returns a new array containing the results of applying a function to each element in the original array. The original array remains unchanged.

// Chaining:

// forEach: It doesn’t return a value, so it cannot be directly chained with other array methods.

// map: Since it returns a new array, you can chain other array methods after using map.

// Use case:

// forEach: Used when you want to iterate over the array elements and perform an action on each elements, but you don’t need a new array

// map: Used when you want to create a new array based on the transformation of each element in the original array.

//How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//How to Insert, Add, Replace and Delete Elements in Array(CRUD)

//1. push()
//push(): Method that adds one or more elements to the end of an array

// let fruits =["apple","grapes","banana","orange","mango"];
// //fruits.push("guava");
// console.log(fruits.push("guava"));

//pop(): Method that removes the last element from an array

// let fruits =["apple","grapes","banana","orange","mango"];
// console.log(fruits.pop("guava"));
// console.log(fruits);

//unshift(): Method that adds one or more elements to the beginning of an array
// let fruits =["apple","grapes","banana","orange","mango"];
// console.log(fruits.unshift("guava"));
// console.log(fruits);

//shift(): Method that removes the first element from an array
// let fruits =["apple","grapes","banana","orange","mango"];
// console.log(fruits.unshift("guava"));
// console.log(fruits.shift());
// console.log(fruits);

// What if we want to add or remove anywhere in an elements - pt 2
//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

// Syntax
//splice(start, deleteCount, item1, item2, /* …, */ itemN)

// let fruits =["apple","grapes","banana","orange","mango"];

// console.log(fruits.splice(1,1,"cake"));
// console.log(fruits);
//what if you want to add the element at the end

// fruits.splice(fruits.length,0,"cake");
// console.log(fruits);

// Searching in Array
//Searching and Filter in an Array

//For Search we have - indexOf, lastIndexOf & includes
// const numbers =[1,2,3,6,4,5,6,7,8,9];
// 1.indexOf ()
//indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.

// console.log(numbers.indexOf(6));
// console.log(numbers.lastIndexOf(6));

// 3. Includes ()
//Includes Method: The includes method checks whether an array includes a certain element, returning true or false

// const result =numbers.includes(3);
// console.log(result);

// Challenge Time 🤯
//1. Add dec at the end of an Array?
//2. What is the return value of the splice method?
//3. Update march to March(Update)?
//4. Delete June from an Array?

// const months = ["Jan", "march", "April", "June", "July"];

// months.splice(months.length,0,"Dec");
// console.log(months);

//2. What is the return value of the splice method?
// When used to add elements, the splice method returns an empty array([])
// const months = ["Jan", "march", "April", "June", "July"];
// console.log(months.splice());

//3. Update march to March(Update)?
// const indexToUpdate = months.indexOf('march');
// months.splice(indexToupdate,1,"March");
// console.log(months);

//4. Delete June from an Array?
// const indexToDelete = months.indexOf("June");
// months.splice(indexToDelete,1);
// console.log(months);

// Filter in an Array
//Search + Filter
// const numbers =[1, 2, 3, 4, 5, 3, 6, 7, 8, 6, 9];
// 1. find()
//find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching elements undefined if no element is found
// const result =numbers.find((curentElem) => {
//     return curentElem>5;
// })
// console.log(result);
// 2. findIndex()
//findIndex method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// const result1 = numbers.map((currentElement)=> currentElement *5)
// console.log(result1);
// const result2 = result1.findIndex((currentEle) => {
//     return currentEle > 15;
// })

// console.log(result2);
// 3.filter()
//filter method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// const result4 =numbers.filter((curentElem) => {
//     return curentElem>5;
// })
// console.log(result4);

// UseCase: E- commerce website when we want to remove or delete any product from addToCart page.

//1. Let's say the user wants to delete value 6.
// let value = 6;
// const numbers =[1, 2, 3, 4, 5, 3, 6, 7, 8, 6, 9];

// const result=numbers.filter((currenElement)=>{
//     return currenElement !== value;
// })

// console.log(result);

//2. Filtering products by price 
//Given an array of products where each product has a name and a price, Write a function that uses the filter method to return an array containing only the products with a price less than or equal to 500
// const products = [
//     { name: "Laptop", price: 1200 },
//     { name: "Phone", price: 800 },
//     { name: "Tablet", price: 300 },
//     { name: "Smartwatch", price: 150 },
// ];
// const filterProducts = products.filter((currentElement)=>{
//     return currentElement.price <= 500;
// })

// console.log(filterProducts);

//filter unique values
// const numbers =[1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// const str = [ ]
// let uniqueValue = numbers.filter((currentElement,index,arr)=>{
//     return arr.indexOf(currentElement)===index;
// })

// console.log(uniqueValue);
// console.log(new Set(numbers));

//How to sort and Compare an Array

//Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings

// const fruits = ["Banana","Apple","Orange","Mango"];

// fruits.sort();
// console.log(fruits);

// compare callback function
// Syntax
// const sortNumbers = numbers.sort ((a,b) => a - b);
// if(a>b) return 1 => switch the order
// if(b>a) return -1 => keep the order

// const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9];

// numbers.sort((a,b)=>{
//     if(a>b) return 1;
//     if (a<b) return -1;
// })

// console.log(numbers);

//Map(), Filter(), Reduce()
//map() creates a new array from calling a function for every array element.
//map() does not execute the function for empty array
//map() does  not change the original array



//using map to square each number and create a new array
// const numbers = [1, 2, 3, 4, 5];

// let result = numbers.map((currentElement)=> `${currentElement*currentElement}`)

// console.log(result);

//1. Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
// const words =["apple", "banana", "cherry", "date"];

// let result = words.map((curentElements)=>{
//     return curentElements.toUpperCase();
// })

// console.log(result);

// 2.Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it’s an even number.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// let result = numbers
// .map((currentElement)=>{
// if (currentElement %2===0){
//     return currentElement*currentElement;
// }
// }).filter((currentElement)=> currentElement !== undefined);

// console.log(result);

// 3.Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with “Mr. “.

// const str = ["Vaikunda", "Durgesh", "Savio", "Shubham"];

// const result = str.map((currentElem) => `Mr. ${currentElem}`);

// console.log(result);

// Interview Question
// Write a JavaScript function that calculates the total price of items in a shopping cart. The function should take an array of item prices as input and return the total price  

// const productPrice =[100, 200, 300, 400, 500];

// const totalPrice = productPrice.reduce((accum,currenElem)=>{
//     return accum+currenElem;
// },0)

// console.log(totalPrice);