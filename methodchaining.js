

// Method chaining it is used to combine a two or more methods function within a single line of code:
// Eg:

// code without method chaining:

let username = window.prompt("Enter your username!");

username = username.trim();
let firstLetter = username.charAt(0);
firstLetter = firstLetter.toUpperCase();

let extraLetter = username.slice(1);
extraLetter = extraLetter.toLowerCase();

username = firstLetter + extraLetter;

console.log(username);

// code with method chaining:

let username1 = window.prompt("Enter your name!");

username1 = username1.trim().charAt(0).toUpperCase() + username1.trim().slice(1).toLowerCase();

console.log(username1);