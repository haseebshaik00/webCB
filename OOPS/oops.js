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

