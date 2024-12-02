
// arrow functions - It is a concise way to write function expressions good for simple functions that you use only once:
// Syntax simply --> " (parameters) => { some code here } "

// Basic function declaration eg:
function hello()
{
    console.log("Hello");
}
hello();

// Basic function expression eg:
let hello1 = function(){
    console.log("hello!");
}
hello1();

// Now let we see how arrow function works:
let hello2 = () => console.log("hello hi!"); 
hello2();

// Eg-2:

// let hello3 = (name) => console.log("hello",name); // This line also works as same as below:
let hello3 = (name) => console.log(`Hello ${name}`); 
hello3("Gokul");

// If we need to print or give more than one line of code, inside arrow function we give '{//code here}':

let hello4 = (name, age) => { console.log(`Hello ${name}`);
    console.log(`You're ${age} years old!`);
}

hello4("Naveen", 23);


// Arrow function in 'setTimeout' inbuilt function:

setTimeout(() => console.log("goodbye!"), 1000);

setTimeout(() => {
    console.log("Welcomes you!");
}, 2000);


// 'map' method with arrow function:

const numbers = [1,2,3,4,5,6];

const squareResult1 = numbers.map((numb) => { return Math.pow(numb, 2);}); 
// (or) The below line will works as same as above line we don't have to give return for single line code.
// const squareResult1 = numbers.map((numb) => Math.pow(numb, 2)); 

console.log(squareResult1);

// 'filter' method with arrow function:

// const evenResult2 = numbers.filter((numb1) => {  return numb1 % 2 === 0;});
// (or)
const evenResult2 = numbers.filter((numb1) => numb1 % 2 === 0);

console.log(evenResult2);

// 'reduce' method with arrow function:

let prices = [20, 30, 45, 60, 24];

// const total2 = prices.reduce((accumulater, nextElement) => { return accumulater + nextElement;});
// (or)
const total2 = prices.reduce((accumulater, nextElement) => accumulater + nextElement);

console.log(`Total Price is $${total2} dollar!`);