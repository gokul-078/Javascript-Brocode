
// Callback is a function it is passed as an argument to the other function:
// It is also used to handle asynchronous operation:

function sum(callbackfunctionasargument, a, b)  // Here, we passed another function name as parameter.
{
    let result = a + b;
    callbackfunctionasargument(result);
}

function yourResult(yourMark)
{
    console.log("Your mark is "+yourMark);
}

sum(yourResult, 2, 4);   // Here, we passed another function name as argument.


// Same as above : But here we didn't pass function as argument, we called a function inside in another function.
function sum1(a1, b1)
{
    let result1 = a1 + b1;
    yourResult1(result1);
}

function yourResult1(yourMark1)
{
    console.log("Your mark is "+yourMark1);
}

sum1(3, 7);
