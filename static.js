
// 'Static' - Keyword that defines the property or methodsthat belong to class itself rather than the objects created from that class (class owns anything static, not the objects).


class MathClass{
    // const a = 3.14;  -> We can't use like this in class.

    /*
    diameter1(radius){
        return radius*2;     -> We can't use like this in class.
    }
    */
}

console.log(MathClass.a);
// console.log(MathClass.diameter1(2));   -> This o/p will be error.

// Instead we use 'static' keyword:
class MathUtil{
    static pie = 3.141;
}
console.log(MathUtil.pie);

class MathFunctions{
    static pi = 3.1419;

    static diameter(r){
        return r * 2;
    }

    static circumference(radius){
        return 2 * this.pi * radius;
    }
}

console.log(MathFunctions.diameter(3));
console.log(MathFunctions.circumference(4));

// class with constructor and static:
class User{

    static usercount = 0;

    constructor(username){
        this.usernames = username;
        User.usercount++;   // Here, the usercount is a static variable so it can be accessed by the classname not by the object(this.usercount++);
    }

    // Normal Method:
    sayHello(){
        console.log(`Hello! My username is ${this.usernames}`);
    }

    // Static method:  To access static variable in method we use static before method:
    static totalUser(){
        console.log(`There are ${User.usercount} users in online!`)
    }
}

const userDetail1 = new User("Gokul");
const userDetail2 = new User("Durai");
const userDetail3 = new User("Spell");

console.log(userDetail1.usernames);
console.log(userDetail2.usernames);
console.log(userDetail3.usernames);

userDetail1.sayHello();
userDetail2.sayHello();
userDetail3.sayHello();

User.totalUser();  // To call a static method we use classname to call it.

console.log(User.usercount);   // Here, the usercount is a static variable so it can be accessed by the classname not by the object(userDetail.usercount);