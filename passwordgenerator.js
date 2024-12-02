

// Random password generator:

function passwordgenerator(passwordlength, includelowercase, includeuppercase, includenumbers, includesymbols)
{

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%&";

    let allowedchar = "";
    let password = "";

    allowedchar += includelowercase ? lowercase : "";
    allowedchar += includeuppercase ? uppercase : "";
    allowedchar += includenumbers ? numbers : "";
    allowedchar += includesymbols ? symbols : "";

    console.log(allowedchar);
    
    if(passwordlength <= 0)
    {
        return "Enter a valid password length";
    }
    if(allowedchar.length === 0)
    {
        return "Please select any one of the characters"
    }

    for(let i=0 ; i < passwordlength ; i++)
    {
        const allowedcharIndex = Math.floor(Math.random() * allowedchar.length);
        password = password + allowedchar[allowedcharIndex];
    }

    return password;
}



const passwordlength = 10;
const includelowercase = true;
const includeuppercase = true;
const includenumbers = true;
const includesymbols = true;

const passwordParameter = passwordgenerator(passwordlength, includelowercase, includeuppercase, includenumbers, includesymbols);

console.log(passwordParameter);

