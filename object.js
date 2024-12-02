/*
//  Object - A collection of related properties and/or methods.
//           It can represent real world objects (peopel, products, places).
//           object = {key:value,
//                     function()}
*/


let person1 = {
    firstname: "Gokul",
    lastname: "Palanivel",
    age:23
}

console.log(person1);
console.log(person1.lastname);
console.log(person1.age);

let person2 = {
    firstname: "Spell",
    lastname: "Bin",
    age:23,
    isEligible: function(){ console.log("Eligible!");},
    isEmployed: () => { console.log("Nope!");}
}

console.log(person2);
console.log(person2.isEligible);   // We can't access function like this:
person2.isEligible();
person2.isEmployed();

// "this" - It reference to the object where 'THIS' is used.
//          (the object depends on the immediate context)
//           person.name = this.name:

let person3 = {
    firstname: "Rahul",
    lastname: "raj",
    favfood: "Briyani",
    age:23,
    isEligible: function(){ console.log(`The person ${person3.firstname} is eligible!`);},
    isEmployed: function(){ console.log(`The person ${this.firstname} is not employed!`);},
    haslastname: () => { console.log(`The person ${this.firstname} has his lastname!`)}   // The 'this' property will not work in arrowfunction:
}

person3.isEligible();
person3.isEmployed();
person3.haslastname();  // Here, the 'this' property is not working because of we used this function in arrow type.


