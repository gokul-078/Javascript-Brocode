
// class - (ES6 features) It provides a more structure and cleaner way to work with objects compared to traditional constructor functions. (ex) - static keyword, encapsulation, inheritance:

class Product{
    constructor(name, price){
        this.productName = name;
        this.productPrice = price;
    }

    displayProduct(){
        console.log(`Product name is $${this.productName}`);
        console.log(`Product price is $${this.productPrice}`);        
    }

    calculate(salestax){
        return this.productPrice + (this.productPrice * salestax);
    }
}

const salestax = 0.05;

const product1 = new Product("Shirt", 99);
const product2 = new Product("Jeans", 249);

product1.displayProduct();
product2.displayProduct();

const total1 = product1.calculate(salestax);
const total2 = product2.calculate(salestax);

console.log(`The total price with salestax $${total1}`);
console.log(`The total price with salestax $${total2}`);


