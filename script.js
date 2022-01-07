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
}; // all keys are strings

console.log(bird['x']); // numeric literals can also be accessed with this or any other literals
console.log(bird.x); //bird's can be accessed in 2 ways

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


// 6) closure.js

function outer(arg1) {
    let var1 = 10
    let x = 10
    
    function inner(arg2) {
      let var2 = 20
      let x = 20
      console.log(arg1, var1, arg2, var2, x)
      console.log(arguments[0])
    }
  
    return inner
    // return 10
  }
  
let x = outer('param1', 11)  
// typeof x == 'function'
// x == inner
// scope of arg1 and var1 are from lines 2 to 10
x('param2')

// 7) this.js
// Answer in context of C++/Java
// What does the keyword "this" mean, what does it refer to ?
// In which places in code can we NOT use "this" ?

function checkThis() {
    console.log(this)
  }
  let obj = {
    "a": 10,
    b: 'asdsa',
    c: true,
    d: function () {
      console.log(this)
    },
    10: 32246,
    true: 'asdasd',
    e: {
      l: 234,
      m: 'sdgsdg',
      n: function () {
        console.log(this)
      },
    },
  }

// 8) stringliteral.js
// He said, "This is is awesome!"

let s1 = 'He said, "This is is awesome!"'

let s2 = "He said, \"This is is awesome!\""

let s3 = "He said, 'This is is awesome!'"

let s4 = `He said, 'This is is awesome!'`

let s5 = "This string is \n in multiple lines"

let s6 = `
    This string
    is in multiple lines
`

let name = 'John'

let g1 = 'Good Morning ' + name

let g2 = `Good Morning ${name}`

let s7 = `10 + 2 = ${10 + 2}` // inside ${} we can write any valid js

// 9) equality and prototype based inheritance

console.log(1 == '1') // true
console.log(1 === '1') // false

// peculiar cases 

console.log(0 == '') // true, because Number('') == 0

console.log('false' == false) // false

console.log('' == false) // true, both typecast to 0
// \n and \t both will give 0, even spaces will give zero, but both wont be equal \n!=\t
// this doesn't hold good for abstract equality 
// a = b,  b = c  ... implies that .. a = c

console.log([1,2] == [1,2]) // false - because they are non primitive and their pointers are being checked

let obj1 = {
    a: 10,
    b: 20, 
    c: 30
}

let obj2 = Object.create(obj1)
obj2.p = 'adg'
obj2.q = 'dgn'
obj2.r = 'dfn'

let obj3 = Object.create(obj2)

/*
obj3.__proto__ - {p: 'adg', q: 'dgn', r: 'dfn'}
obj3.__proto__.__proto__ - {a: 10, b: 20, c: 30}
obj3.__proto__.__proto__.__proto__ -{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, 
    hasOwnProperty: ƒ, __lookupGetter__: ƒ, …} // default prototype
obj3.__proto__.__proto__.__proto__.__proto__ - null
*/

// obj3.__proto__ == obj2
// obj3.__proto__.__proto__ == obj1

/* 
    obj2.a -> it will try to find a in obj2
        -> if not found, 
        -> it will try to find it in obj2.__proto__
        -> if not found,
        -> it will try to find it in obj2.__proto__.__proto__
        -> ... and so on... 
        -> till .__proto__ becomes null
        ~~this logic is followed only while reading but while writing a new variable is created in the current class and 
        writing is done in it - shadowing: What is shadowing in JS?
        ~~Shadowing: Now, when a variable is declared in a certain scope having the same name defined on its outer scope and 
        when we call the variable from the inner scope, the value assigned to the variable in the inner scope is the value 
        that will be stored in the variable in the memory space.
        ~~suppose ob1 has a as 10 and ob2 is inheriting ob1, then ob2.a++ will give ob2 a 
        new a with value 11 but ob1.a will remain same that is 10 and if ob3 is inherting 
        ob2 then ob3 will get a with 11

*/

// 10) prototypes.js

let str = "Asdasd"  ;                            // 3 levels from null
let num = 233                                   // 3 levels from null
let bool = true                                 // 3 levels from null
let arr = [246,436,6,346]                       // 3 levels from null
let obj = {a: 10, b: 'asdasd'}                  // 2 levels from null
let fun = function () { console.log ('yay!') }  // 3 levels from null

// if x and y are not primitive 
// x == y : true <- what does this mean ? 
// this means they are reference to the same object in memory 

console.log('======= types =======')
console.log('typeof String', typeof String)
console.log('typeof Boolean', typeof Boolean)
console.log('typeof Number', typeof Number)
console.log('typeof Array', typeof Array)
console.log('typeof Object', typeof Object)
console.log('typeof Function', typeof Function)

console.log('======= proto chain =======')
console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(bool.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)
console.log(fun.__proto__.__proto__ == obj.__proto__)

// Everything indirectly inherits from the same thing
// that obj is inherited from 
// i.e. in Javascript, everything is essentially an Object

console.log('======= prototypes ======= ')
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(arr.__proto__ == Array.prototype)
console.log(fun.__proto__ == Function.prototype)

/*
s="a"
'a'
s.__proto__
String {'', constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
String.prototype
String {'', constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
s.__proto__.__proto__
{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
s.__proto__.__proto__.__proto__
null
*/

/*
ob1 = Object.create(Object.prototype);
*/

// String.prototype inherits from Object.prototype
// typeof Object.create(Boolean.prototype) -> ??
// 2 items can have the same proto but their typeof should be same is not necessary

console.log(str.charAt(4))
console.log(typeof str.charAt) // ? 
let str2 = "dgndgn"
console.log(str.charAt == str2.charAt) // true

str.charAt = function () { return 'X' } // does not make a difference - cause js doesnt allow this

String.prototype.charAt = function () { return 'X' }
console.log(str.charAt(1))

// String.prototype contains all default string functions
// like charAt, indexOf, substring, slice etc 

Array.prototype.joinOriginal = Array.prototype.join

Array.prototype.join = function () {
    console.log('join called on', this)
    return this.joinOriginal(...arguments)
}
/**
 * Array.prototype 
 * {
 *  .... 
 *  joinOriginal: function () {},
 *  join: function () { our fun },
 *  ....
 * }
 */

// 11) classes.js


