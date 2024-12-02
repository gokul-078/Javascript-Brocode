

// while loop:  Entry loop check condition

let username = false;
let user;
let password;

while(!username)
{
    user = window.prompt("Enter your username!");
    password = window.prompt("Enter your password!");

    if(user === "myusername" && password === "mypassword")
    {
        username = true;
        console.log("you're logged in");
    }
    else
    {
        console.log("Enter your credentials correctly! & try again!");
    }
}

// do while loop: Exit loop check condition

do{
    user = window.prompt("Enter your username!");
    password = window.prompt("Enter your password!");

    if(user === "myusername" && password === "mypassword")
    {
        username = true;
        console.log("you're logged in");
    }
    else
    {
        console.log("Enter your credentials correctly! & try again!");
    }
}while(!username)