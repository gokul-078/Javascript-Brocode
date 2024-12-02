
// 'function declaration' - It define a block of reusable code that performs a specific task:
// 'function expression' - It is a way to define function as values or variables:


// 'function declaration' - It define a block of reusable code that performs a specific task:

function hello()
{
    console.log("Hello");
}
hello();

// 'function expression' - It is a way to define function as values or variables:

let hello1 = function(){
    console.log("hello!");
}
hello1();


// 'settimeout' inbuilt function with function declaration:
// 'settimeout' inbuilt function is used to set a period of delay to display the o/p in the console or to the user:

function goodbye()
{
    console.log("Goodbye");
}

setTimeout(goodbye, 3000); // Here we set or called 'goodbye' function to run after 3s delay:

// 'settimeout' inbuilt function with function expression:
// 'settimeout' inbuilt function is used to set a period of delay to display the o/p in the console or to the user:

setTimeout(function(){
    console.log("Bye!")
}, 4000);

setTimeout(() => {
    console.log("goodbye!");
}, 5000);


// 'map' method with function declaration:

let numbers = [1,2,3,4,5,6];

const squareResult = numbers.map(squareNumbers);

function squareNumbers(numb)
{
    return Math.pow(numb, 2);
}

console.log(squareResult);

// 'map' method with function expression:

const squareResult1 = numbers.map(function(numb){   // Here, we didn't give any function name it's optional.
    return Math.pow(numb, 2);
});

console.log(squareResult1);


// 'filter' method with function declaration:

let numbers1 = [1,2,3,4,5,6];

let evenResult1 = numbers1.filter(isEven1);

function isEven1(numb1)
{
    return numb1 % 2 === 0;
}

console.log(evenResult1);

// 'filter' method with function expression:

const evenResult2 = numbers1.filter(function(numb1){     // Here, we didn't give any function name it's optional.
    return numb1 % 2 === 0;
});

console.log(evenResult2);


// 'reduce' method with function declaration:

let prices = [20, 30, 45, 60, 24];

const total = prices.reduce(sumPrices);

function sumPrices(accumulater, nextElement)  // We can give any name in this function: eg - sumprices(previousElement, nextAmount)
{
    return accumulater + nextElement;
}

console.log(`Total Price is $${total} dollar!`);

// 'reduce' method with function expression:

const total2 = prices.reduce(function sumPrices(accumulater, nextElement) {     // Here, we gave function name it's optional.
    return accumulater + nextElement;
})

console.log(`Total Price is $${total2} dollar!`);
