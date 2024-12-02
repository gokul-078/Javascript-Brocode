
// 'filter' method it creates a new array by filtering out elements in original array:
// The 'filter' method will only checks the condition true or false if it is true then it prints the true passed element in a new array otherwise it won't alter the array:

// Eg-1 : with 'map' method: Here, it will return all the elements true or false in boolean and not in value:
let numbers = [1,2,3,4,5,6];

let evenResult = numbers.map(isEven);

function isEven(numb)
{
    return numb % 2 === 0;
}

console.log(evenResult);

// Eg-1 : With use of 'filter' method In filter method it only prints the true value:
let numbers1 = [1,2,3,4,5,6];

let evenResult1 = numbers1.filter(isEven1);

function isEven1(numb1)
{
    return numb1 % 2 === 0;
}

console.log(evenResult1);

// Eg-2:
let fruits = ["apple", "orange", "pomegrenate", "grapes", "kiwi", "cucumber"];

const shortFruit = fruits.filter(shortfruitName);

function shortfruitName(fruit)
{
    return fruit.length <= 6;
}

console.log(shortFruit);

const longFruit = fruits.filter(longfruitName);

function longfruitName(fruit1)
{
    return fruit1.length > 6;
}

console.log(longFruit);


/* Eg-4 : Here, we tried to alter the below array with filter method we can't do that, the filter will only checks 
the condition true or false if it is true then it prints the true passed element in a new array. */
let names = ["gokul", "spell", "durai", "naveen", "sundhar"]

const camelcaseresult = names.filter(camelcase);

function camelcase(name)
{
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return name;
}

console.log(camelcaseresult);
console.log(names);

// Eg-5:
let names1 = ["gokul", " spell", "durai", " naveen", "sundhar"]

const camelcaseresult1 = names1.filter(camelcase1);

function camelcase1(name1)
{
    return name1.charAt(0) === " ";
}

console.log(camelcaseresult1);
console.log(names1);
