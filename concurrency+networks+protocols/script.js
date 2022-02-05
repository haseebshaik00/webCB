// JS Multitasking
/* Concurrency - concurrency is js is done through time slicing, this happens by dividing time and so fast it looks like they are happening 
parallely. 

Callback - A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after older function has finished
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

sayHello(3, "haseeb");
sayHello(2, "kunal");

// both haseeb and kunal execute parallely; to rectify the above error we can use asynchronous callback functions
// async function
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


sayHello1(3, "haseeb", () => {
    sayHello1(2, "kunal", () => {
        sayHello1(2, "lakshit", () => {

        })
    })
})
// the main problem here is we will face shadowing of variables



// instead of this we can also use promises introduced in es6
// promise
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
sayHello2(3, "haseeb")
    .then(sayHello2(2,"KUNAL"))
    .then(sayHello2(3,"lakshit"));

sayHello2(3, "haseeb")
    .then(sayHello2(2,"KUNAL").then(sayHello2(3,"lakshit")));


//sequential
sayHello2(3, "haseeb")
    .then(() => sayHello2(2, "kunal"))
    .then(() => sayHello2(3, "lakshit"));

// async-await - accepts promises resove func
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

async function task1(){
    await Promise.all([ 
        sayHello2(3, "haseeb"),
        sayHello2(2, "kunal")
    ]);
    console.log("--- first batch over ---")
    await Promise.all([ 
        sayHello2(1, "spike"),
        sayHello2(2, "lakshit")
    ]);
}

// Promise.all is used wheh we want some functions to run in batch, here haseeb and kunal will complete their process and then 
// ... only spike and lakshit will start executing


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