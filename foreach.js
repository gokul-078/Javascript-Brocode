
// "foreach" - This method is used to iterate over the elements of an array and apply a specified function(callback) of an each element:

// Array_name.foreach(callbackFunction_name):
// Syntax : foreach - (element, index, array_name).

let numbers = [11,12,13,14,15];

numbers.forEach(eachValue);

function eachValue(number)
{
    console.log(number);
}

// Doubling the array:
let numb = [1,2,3,4,5];
numb.forEach(double);
numb.forEach(displaydouble)

function double(element, index, array_name)
{
    array_name[index] = element*2;
}

function displaydouble(numbresult)
{
    console.log(numbresult)
}

// Power function or square root function:
numb.forEach(power);
numb.forEach(displaypower);

function power(element, index, array_name)
{
    array_name[index] = Math.pow(element, 2);
}

function displaypower(numbresult)
{
    console.log(numbresult)
}

// Some eg:
let fruits = ["apple", "orange", "lemon", "blueberry", "mango"];

fruits.forEach(tocamelcase);
fruits.forEach(displayCamelcase);

function tocamelcase(element, index, array_name)
{
    array_name[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function displayCamelcase(fruit)
{
    console.log(fruit);
}
