
const minnum = 1;
const maxnum = 50;

const randnum = Math.floor(Math.random()*50 + 1);
console.log(randnum);

let userinput;
let attempts = 0;
let running = true;

while(running)
{
    userinput = window.prompt(`Enter a number between ${minnum} to ${maxnum}!`);
    
    if(isNaN(userinput))
    {
        window.alert("Enter a valid number between 1 to 50!");
    }
    else if(userinput < minnum || userinput > maxnum)
    {
        window.alert("Enter a valid number between 1 to 50!");
    }
    else
    {
        attempts++;
        if(userinput > randnum)
        {
            window.alert("You're too high!");
        }
        else if(userinput < randnum)
        {
            window.alert("You're too low");
        }
        else
        {
            window.alert(`You've entered the correct number by ${attempts} attempts`);
            running = false;
        }
    }
}