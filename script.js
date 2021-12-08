///////////////////////////////////////////////////////////  
//********* datatypes.js  ************//
function a(){
    return 1
}

let b = function () {
    return 1
}

let c=1
console.log(13313, typeof 13313)
console.log(234234.5356, typeof 234234.5356)
console.log('a', typeof 'a')
console.log('asdasfasfa', typeof "asdasfasfa")
console.log(true, typeof true)
console.log(null, typeof null)
console.log(undefined, typeof undefined)
console.log(a(), typeof a())
console.log(a, typeof a)

///////////////////////////////////////////////////////////  
//********* functions.js *********//
console.log(beta()) //hoisting

function alpha () {
    return "A"
}

console.log(beta())
// console.log(gamma()) // ReferenceError

function beta() {
    return "B"
}

let gamma = function () {
    return "C"
}

console.log(gamma())
console.log(beta())

// null - 0 - false - undefined - '' all act as false hence can be used in if  
function area(height, width) {
    if (!width) {
        return Math.PI * height * height
    }
    return height * width
}

console.log('area 3,4 ', area(3,4))
console.log('area 4 ', area(4))

function hello () {
    let arguments = 'asdasd' //dont do this
    console.log('hello world ' + arguments[0] + arguments[1])
}

hello(1, 2)
hello('Arnav', 'Gupta')

///////////////////////////////////////////////////////////
//********* higher_order_functions.js ***********//
//https://github.com/haseebshaik00/FullStack_NodeJS_Live_March2020/tree/master/Lecture05/js-basics
// 1) returning a function
function createGreeter(greet_msg)
{
    function greet(name)
    {
        console.log(greet_msg,name)
    }
    return greet
}
let g1 = createGreeter('Hi')
console.log(typeof g1)
g1('haseeb')
console.log(g1('haseeb'))

function getName() {
    return document.getElementById('namebox').value
}

//2) passing a function as an argument
g1(getName) // in this we are passing a function

/*
3) 2 types - for printing name
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