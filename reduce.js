
// reduce() - It reduce all the element of an array to a single value:
// Syntax : reduce(accumulater, next_element)

// Working of below code:
/*
    At first,
        function sumPrices(accumulater, nextElement) // sumPrices(20, 30)
        {
            return accumulater + nextElement;  // return 20 + 30;  -->  // return 50;
        }
    At second,
        function sumPrices(accumulater, nextElement) // sumPrices(50, 45)
        {
            return accumulater + nextElement;  // return 50 + 45;  -->  // return 95;
        }
    At third,
        function sumPrices(accumulater, nextElement) // sumPrices(95, 60)
        {
            return accumulater + nextElement;  // return 95 + 60;  -->  // return 155;
        }
    At fourth,
        function sumPrices(accumulater, nextElement) // sumPrices(155, 24)
        {
            return accumulater + nextElement;  // return 155 + 24;  -->  // return 179;
        }
    
    => Finally, the returned value '179' will be stored on 'total' variable: 
*/

let prices = [20, 30, 45, 60, 24];

const total = prices.reduce(sumPrices);

function sumPrices(accumulater, nextElement)  // We can give any name in this function: eg - sumprices(previousElement, nextAmount)
{
    return accumulater + nextElement;
}

console.log(`Total Price is $${total.toFixed(2)} dollar!`);


// Eg-2: To find the maximum and minimum grades:
let grades = [90, 34, 50, 70, 80, 95, 87, 68];

const maxGradeResult = grades.reduce(maxGrade);

function maxGrade(currentGrade, nextGrade)
{
    return Math.max(currentGrade, nextGrade);
}

console.log(maxGradeResult);

const minGradeResult = grades.reduce(minGrade);

function minGrade(currentGrade, nextGrade)
{
    return Math.min(currentGrade, nextGrade);
}

console.log(minGradeResult);