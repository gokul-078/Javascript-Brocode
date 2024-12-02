
// "map" - It accepts a callback and applies that function to each element of an array, then return a array:

/* 'foreach' and 'map' both will work as same but the difference is foreach is used to change or alter the current 
array and display the final result in the same array but map method is used to change or alter the array element 
and keep the changed array element in a new array the original array will remain same*/

// Eg-1:
let number = [1,2,3,4,5];

const result = number.map(double);

function double(numbvalues)
{
    return numbvalues*2;
}

console.log(result);
console.log(number);  // Still the original array is not changed this is the difference b/w foreach and map method.

// Eg-2:
let names = ["gokul", "spell", "durai", "naveen", "sundhar"]

const camelcaseresult = names.map(camelcase);

function camelcase(name)
{
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return name;
}

console.log(camelcaseresult);
console.log(names);

// Eg-3:
// 'Split' method is used to split a string:

let dates = ["2018-04-21", "2020-04-12", "2024-05-15"];

const newformatDate = dates.map(formatdates);

function formatdates(date)
{
    const eachpartofDate = date.split("-");
    // console.log(eachpartofDate[0], eachpartofDate[1], eachpartofDate[2]);
    return `${eachpartofDate[2]}/${eachpartofDate[1]}/${eachpartofDate[0]}`;
}

console.log(newformatDate);
