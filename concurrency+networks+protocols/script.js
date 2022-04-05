// JS Multitasking
/* Concurrency - concurrency in js is done through time slicing, this happens by dividing time and so fast it looks like they 
are happening parallely. 

// Callback - A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after older function has finished
callback can only be used in async funcs

// A promise is used to handle the asynchronous result of an operation. JavaScript is designed to not wait for an 
asynchronous block of code to completely execute before other synchronous parts of the code can run. With Promises, 
we can defer the execution of a code block until an async request is completed.

// normally in js the fucntions runs in sequential order but if there are asynchronous functions it's not necessary that 
// .. they run in a seq order hence to make them in seq order we use promises and we can also use async await with promises

// They keyword async is used to make a function asynchronous. The await keyword will ask the execution to wait until 
the defined task gets executed. It allows the use of await Keyword inside the functions with async keyword. 
Using await in any other way will cause a syntax error.
*/

// Concurrency on single thread
function sayHello(times, name){
    let c=0;
    let loopId = setInterval(() => {
        c++;
        console.log("Hello " + name);
        if(c === times)
            clearInterval(loopId);
    }, 100);
}

sayHello(3, "haseeb1");
sayHello(2, "kunal1");

// both haseeb and kunal execute parallely; to rectify the above error we can use asynchronous callback functions
//  ****************** Async Function ******************
function sayHello1(times, name, doneSaying){
    let c=0;
    let loopId = setInterval(() => {
        c++;
        console.log("Hello " + name);
        if(c === times)
        {
            clearInterval(loopId);
            doneSaying(); // called at the end of the current callback
        }
    }, 100);
}


sayHello1(3, "haseeb2", () => {
    sayHello1(2, "kunal2", () => {
        sayHello1(10, "lakshit2", () => {

        })
    })
})
// the main problem here is we will face shadowing of variables



// instead of this we can also use promises introduced in es6
//  ****************** Promises ******************
function sayHello2(times, name){
    return new Promise((resolve, reject) => {
        let c=0;
        let loopId = setInterval(() => {
            c++;
            console.log("Hello " + name);
            if(c === times)
            {
                clearInterval(loopId);
                resolve(); // this is used to call then function
            }
        }, 100);
    })
}


//concurrent
console.log("\n promises \n")
sayHello2(3, "haseeb3")
    .then(sayHello2(2,"KUNAL3"))
    .then(sayHello2(3,"lakshit3"));

sayHello2(3, "haseeb4")
    .then(sayHello2(2,"KUNAL4").then(sayHello2(3,"lakshit4")));


//sequential
sayHello2(3, "haseeb5")
    .then(() => sayHello2(2, "kunal5"))
    .then(() => sayHello2(3, "lakshit5"));


// async-await - accepts promises resove func - makes easier to write promises
async function task(){
    await sayHello2(3, "haseeb");
    await sayHello2(2, "kunal");
    sayHello2(1, "spike");
    await sayHello2(2, "lakshit");
}

task();
// await makes the task execute sequentially and it can be written only inside async function 
// .. if a normal sayHello is written is written with task(); the sayHello runs parallely with the async func 
// here the function with no await will run parallely


// Promise.all is used wheh we want some functions to run in batch, here haseeb and kunal will complete their process and then 
// ... only spike and lakshit will start executing
async function task1(){
    await Promise.all([ 
        sayHello2(3, "haseeb"),
        sayHello2(2, "kunal")
    ]);
    console.log("--- first batch over ---");
    console.log("--- second batch starting ---");
    await Promise.all([ 
        sayHello2(1, "spike"),
        sayHello2(2, "lakshit")
    ]);
    console.log("--- second batch over ---");
}




// networks, protocols and hardware
// gothrough the README.md file for this
// read behrouz fehrouzan book for IP Addresses
// also watch gate smashers playlist  


// aysnc func and promises 

// async func and promises blueprint
/*
asyncFunc = function(done){
    ....
    ....
    done(); // here done is a callback function
} 

downloadPromise.then( function(){ 

})
// here downloadPromise returns a promise object and the then object is executed
// .. the then is same as done here

*/

// promises advantage is it doesnt cause shadowing of variables and provides us deferred resolve which 
// .. normal async callback doesnt do
// https://online.codingblocks.com/app/player/220561/content/215180/6506/lecture
// .. refer this link for overall explainaition of promises

// Promise.all takes array of promises and returns result of the array of promises 
/*
    Promise.all([
        download(""),
        download(""),
        download("")
    ]).then(function(values){
        return Promise.all(values.map(resize))
    })
    
    //.. instead of writing  we can directly write 
    //.. instead of writing values.map(function(item){ return resize(item)}) we can directly write values.map(resize)
*/

// if any one of the then stops it goes to catch
// the then runs only when all three downloads are finished, this is the feature of then 


// shorthand for calling then()
/* 

function download(url){
    resolve(filename)
}

function resize(){
    resolve(resizedFilename)
}

download("someurl.com")
    .then(function(filename){
        resize(filename).then(function (resizedFilename){
            console.log("resized file is at : " + resizedFilename);
        })
    })

// .. this can also be written as .. here as the function the function(filename) is same as resize(filename)
// .. hence we can omit the function(filename) part and directly write resize

download("someurl.com")
    .then(resize)
    .then(function(resizedFilename){
            console.log("resized file is at : " + resizedFilename);
    })

*/