
let tempvalue = document.getElementById("tempvalue");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");

const btn = document.getElementById("btnconvert");
const result = document.getElementById("result");

function convert()
{
    if(tofahrenheit.checked)
    {
        result.textContent = (1.8*tempvalue.value + 32).toFixed(1) + " 'F";  // Here, the 'tofixed(1)' is used to give decimal one point to our value eg: 32.0 "C
    }
    else if(tocelsius.checked)
    {
        result.textContent = (tempvalue.value - 32)/1.8 + "'C";
    }
    else
    {
        result.textContent = "Select a unit"
        window.alert("Click any one of the conversion!");
    }
}


