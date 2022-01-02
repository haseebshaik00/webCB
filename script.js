// 1) datatypes.js
function a(){ //function declaration
    return 1;
}

let b = function () { //function expression
    return 1;
}

let c=1;
console.log(13313, typeof 13313);
console.log(234234.5356, typeof 234234.5356);
console.log('a', typeof 'a');
console.log('asdasfasfa', typeof "asdasfasfa");
console.log(true, typeof true);
console.log(null, typeof null);
console.log(undefined, typeof undefined);
console.log(a(), typeof a());
console.log(a, typeof a);

// 2) functions.js
console.log(beta()); //hoisting

function alpha () {
    return "A";
}

console.log(beta());
// console.log(gamma()) // ReferenceError

function beta() {
    return "B";
}

let gamma = function () { // not hoisted
    return "C";
}

console.log(gamma());
console.log(beta());

// null - 0 - false - undefined - '' all act as false hence can be used in if  
function area(height, width) {
    if (!width) {
        return Math.PI * height * height;
    }
    return height * width;
}

console.log('area 3,4 ', area(3,4));
console.log('area 4 ', area(4));

function hello () {
    let arguments = 'asdasd'; //dont take the variable name arguments
    console.log('hello world ' + arguments[0] + arguments[1]);
}

function hello1 () {
    let argument = 'asdasd'; //dont take the variable name arguments
    console.log('hello world ' + arguments[0] + arguments[1]);
    console.log('hello world ' + argument[0] + argument[1]);
}

hello(1, 2);
hello('Arnav', 'Gupta');

hello1(1, 2);
hello1('Arnav', 'Gupta');

// 3) higher_order_functions.js
//https://github.com/haseebshaik00/FullStack_NodeJS_Live_March2020/tree/master/Lecture05/js-basics
// a) returning a function
function createGreeter(greet_msg)
{
    function greet(name)
    {
        console.log(greet_msg,name);
    }
    return greet;
}

let g1 = createGreeter('Hi');
console.log(typeof g1);
console.log(g1('haseeb'));

function getName() {
    return document.getElementById('namebox').value;
}

//b) passing a function as an argument
// g1(getName) - in this we are passing a function

/*
// 2 types - for printing name
a) 
    <!-- here we are passing the function itself -->
    <button onclick="g1(getName)">GM</button>
    //***** here the getName function is fetched and sent as an argument
    function createGreeter(greeting) {
        function greet(name) { // here as the name is also a function hence here greet is 
            also an hof and createGreeter is already a hof
            // here we treat as if name is function
            console.log(greeting, name()) // hence we are calling it here
        }
        return greet
    }

b) <!-- here we are calling the function and passing the value (string) -->
    <button onclick="g1(getName())">GM</button>
    //***** here the name is fetched and send in the form of string 
    function createGreeter(greeting) {
    function greet(name) {
        // here we treat name as if it is string
        console.log(greeting, name)
    }
    return greet
    }
*/

// 4) basics.js
let p = 10;
console.log(p);
//alert("yo");
let q = [1,2,3,4,5];
console.log(q);

r = 20; //global scope
var s = 30; //function scope
let t = 40; //block scope

let u1 = [1,2,3];
console.log(u1.length);
console.log(u1["length"]);
for(let i of u1){ //forof loop
    console.log(i);
}
for(let index in u1){ //indexin loop
    console.log(index);
}

// oops in javascript - allows us to create objects without a class 
// example of an object in js - js object ~ json object~ js object notation object 
// a) object creation normal
var bird = {
    x:100,y:200,array:[1,2,3],
    f: function(){
        console.log(this.x); 
    }
};

//foreach loop - can be used only with array, sets and maps
bird.array.forEach(function(i,j){
    console.log(i,j);
});


// b) object creation with function declaration
function student(id,name){
    this.id = id;
    this.name = name
}

let haseeb = new student(1,"haseeb");

// c) object creation with class declaration - class keyword(ECMAScript 2015) - ES
class Studentregd{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
};

let Studentregd2 = class{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
};

let kunal = new Studentregd(1,"kunal");
let lakshit = new Studentregd2(1,"lakshit");

// 5) strings.js

let str = "hello world"
console.log(str);
let str1 = 'haseeb s\'s';
console.log(str1);
let str2 = "haseeb"; // ECMAScript 2016
console.log(`hi ${str2}`);

//string functions
s = "haseeb is a good boy";
console.log(s.length);
console.log(s.indexOf("is")); // position to start search from can also be given
console.log(s.lastIndexOf("is")); // position to start search from can also be given
console.log(s.slice(2,5)); // 2 to 5-1 ; negative indexes can also be included
console.log(s.slice(-5,-2)); // 2 to 5-1 ; negative indexes can also be included
console.log(s.substring(2,7)); //  2 to 7-1 ; negative indexes cannot be included
console.log(s.substr(2,7)); // 7 characters from 2 ; negative indexes can also be included

//arrays
let u = [1,2,3,4,5,6,7,8,9,10];
console.log(u);
console.log(u.length);
for(let i of u){ 
    console.log(i); 
} 
for(let index in u){ 
    console.log(index); 
}
console.log(u.slice(6));
console.log(u.slice(4,6));
console.log(u.slice(-4,-2));
console.log(u);
let v = u.splice(2,6); 
console.log(v);
console.log(u);
u.splice(1,3,"x","x");
console.log(u);
console.log(v.concat(1)); // doesnt mutate the original array; we can concat arrays with arrays also

