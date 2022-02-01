// function with new keyword
//here this keyword points to the object not to the window or scope
function Person(name, age){
    this.name = name;
    this.age = age;
}

let p1 = new Person("haseeb", 21);
console.log("p1 = " + JSON.stringify(p1));
console.log(p1);

//object inheritance
let a = {p:10, q:"haseeb1", r: false};
// we cant inherit objects directly without class
let b = Object.create(a);
let c = Object.create(b);

console.log(a);
console.log(b);
console.log(b.q);
console.log(c.q);
b.q = "navbar";
console.log(b);
console.log(b.q);
console.log(c.q);

//prototype
let x1 = 'haseeb';
console.log(x1.__proto__);
console.log(x1.__proto__.__proto__);
console.log(x1.__proto__.__proto__.__proto__);
console.log(x1.__proto__ == String.prototype);
console.log(x1.__proto__.__proto__ == Object.prototype);
console.log(x1.__proto__.__proto__.__proto__ == null);

console.log(a.isPrototypeOf(b));
console.log(Object.prototype.isPrototypeOf(String.prototype));
console.log(Object.prototype.isPrototypeOf(undefined));


// prototype functions 
console.log("\nprototype functions")
function Person1(name, age){
    this.name = name;
    this.age = age;
    // we dont add new functions or data here as for diff objects new memory and data will be created, hence they are declared 
    // outside scope using .prototype
}

Person1.prototype.isAdult = function(){
    return this.age >= 18;
}
Person1.prototype.city = "delhi";

let p = new Person1("haseeb", 21);
let p2 = new Person1("kunal", 20);
console.log(p.isAdult == p2.isAdult);
// .sort all these kinds of functions are present in Array.prototype not in Array


// es6 classes : just the syntax, internally prototypes are used
// Person() and new Person() can be called when Person is a function
class Person2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let p3 = new Person2("lakshit", 21);
console.log(p3);
// only new Person() can be called when Person is a class and not Person() ; 
// as this is suppose to be treated just like a class
// both the typeof of class and function is function as class is internally using prototype of function 
// who is obviously inheriting from object prototype


class Student extends Person2{
    constructor(name, age, school){
        super(name, age);
        this.school = school;
        // this should be used only after super is super is given anywhere in the code, also anything can be present 
        // before super except this 
    }
}

let s1 = new Student("ab", 20, "vit");
console.log(s1);
console.log(Student.prototype.isPrototypeOf(s1));
console.log(Student.prototype.isPrototypeOf(p2));
console.log(Person2.prototype.isPrototypeOf(p3));