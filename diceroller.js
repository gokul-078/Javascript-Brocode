
// Multi dice roller:
function rolldice()
{
    const numofdice = document.getElementById("numofdice").value;
    const dicevalue = document.getElementById("dicevalue");
    const diceimages = document.getElementById("diceimages");

    const dValues = [];
    const dimages = [];

    for(let i=0; i < numofdice; i++)
    {
        const eachdiceValues = Math.floor(Math.random() * 6) + 1;
        dValues.push(eachdiceValues);
        dimages.push(`<img src="diceImages/${eachdiceValues}.png" style = height:100px; width: 100px>`);
    }

    dicevalue.textContent = ` Dice : ${dValues.join(", ")}`;
    diceimages.innerHTML = dimages.join(" ");
}


/*

// Single dice roller
const numofdice = document.getElementById("numofdice").value;
const dicevalue = document.getElementById("dicevalue");
const diceimages = document.getElementById("diceimages");

function rolldice()
{
    const eachdiceValues = Math.floor(Math.random() * 6) + 1;
    dicevalue.textContent = ` Dice : ${eachdiceValues}`;
    diceimages.innerHTML = `<img src="diceImages/${eachdiceValues}.png" style = height:100px; width: 100px>`;
}

*/