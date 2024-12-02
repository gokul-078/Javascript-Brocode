
// To change a array values:

let fruit = ["apple", "orange", "bannana"];

fruit[1] = "coconut";  // Here, i changed the value inside the array
fruit[3] = "aamla";   // Here, i inserted a value in array

console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);

// "for of" loop for array:
for(let fruits of fruit)
{
    console.log(fruits);
}

// sort:
console.log(fruit.sort());
console.log(fruit.reverse());

// Join: It is used to join the array values to string
console.log(fruit.join());
console.log(fruit.join(' '));

// 2D array:
let num = [[1,2,3],[4,5,6],[7,8,9],['*',0,'#']];

for(let row123 of num)
{
    let rowString = row123.join(' ');
    console.log(rowString);
}

// Spread opeator - ... it is used to iterate each element in the array or string. Basically, it unpacks the elements of array or string to single one:
let numbers = [1,2,3,4,5,6,7];
console.log(numbers);
console.log(...numbers);
console.log(...fruit);

console.log(Math.max(numbers)); // Here, it will not give the o/p because it is a array so nees to unpack each value.
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

// We can even join two arrays with spread operator:
let numbers2 = [8,9,10];
console.log(...numbers,...numbers2);

let twonum = [...numbers,...numbers2];
console.log(twonum);

let vegetables = ["carrot","mango","beans","onion"];
let vegetables12 = ["tomato","brinjal","cabbage"];
let twoveg = [...vegetables,...vegetables12, "potato", "spinach", "green leaves"];
console.log(twoveg)

// spread operator in string:
let strings12 = "brocode";
console.log(...strings12);

// Storing in array after spreading a string and also join it:
let stringasarray = [...strings12];
console.log(stringasarray);
console.log(stringasarray.join('-'));

// Rest parameter - (...rest) is same as spread operator but it do the opposite thing:
// It allows a function work with a variable number of arguments by bundling them into array:
// It bundles the separate the elements to an array:
function listOfFood(...foods)
{
    console.log(foods);
}

listOfFood("idly", "poori", "pongal", "dosa", "rava");

// The above will be now shown as joined elements:
function listOfFood1(...foods)
{
    console.log(...foods);
}

listOfFood1("idly", "poori", "pongal", "dosa", "rava");

// returning array from the rest parameters function:
function listOfFood2(...foods)
{
    return foods;
}

let food = listOfFood2("idly", "poori", "pongal", "dosa", "rava");
console.log(food);

// rest parameters with for of:
function numberrr(...numbers123)
{
   let result = 0;
   for(let number of numbers123)
   {
    result = result + number;
   }
   return result;
}
let finalresult = numberrr(1,2,3,4,5);
console.log(finalresult);

// By rest parameter we can even combine strings:
function combinestring(...stringname)
{
    return stringname;
}
let comstr = combinestring("Mr.", "Gokul", "Palanivel", "1");
console.log(comstr);

// combined:
function combinestring1(...stringname1)
{
    return stringname1.join(" ");
}
let comstr1 = combinestring1("Mr.", "Gokul", "Palanivel", "1");
console.log(comstr1);

