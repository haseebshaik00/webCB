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

// to rectify the above error we can use asynchronous callback functions
function sayHello1(times, name, doneSaying){
    let c=0;
    let loopId = setInterval(() => {
        c++;
        console.log("Hello " + name);
        if(c === times)
        {
            clearInterval(loopId);
            doneSaying();
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
function sayHello2(times, name){
    return new Promise((resolve, reject) => {
        let c=0;
        let loopId = setInterval(() => {
            c++;
            console.log("Hello " + name);
            if(c === times)
            {
                clearInterval(loopId);
                resolve();
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