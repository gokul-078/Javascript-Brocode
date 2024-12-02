
// constructor - special method for defining the properties and methods of objects:

function Car(name, year, color)
{
    this.carName = name,
    this.makeYear = year,
    this.carColor = color,
    this.drive = function(){ console.log(`You're driving ${this.carName}! `)}
}

const car1 = new Car("audi", 2002, "black");
const car2 = new Car("bmw", 2003, "white");

console.log(car1.carName);
console.log(car1.makeYear);
console.log(car1.carColor);

console.log(car2.carName);
console.log(car2.makeYear);
console.log(car2.carColor);

car1.drive();
car2.drive();