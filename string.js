

// "SLICE" concepts in string:
let fullname = "Bro Code";
console.log(fullname.slice(0, fullname.indexOf(" ")));
console.log(fullname.slice(fullname.indexOf(" ")));  // In this line we have space in the starting because of we started with " " in slice.
console.log(fullname.slice(fullname.indexOf(" ") + 1));  // Here, we added one index number to remove the space.

let email = "gokul@gmail.com";
console.log(email.slice(0, email.indexOf("@")));
console.log(email.slice(email.indexOf("@")));
console.log(email.slice(email.indexOf("@") + 1));