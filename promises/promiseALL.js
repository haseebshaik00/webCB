const pro1 = Promise.resolve("Hi!");
const pro2 = 10;
const pro3 = new Promise((res, rej) => {
    setTimeout(res, 2000, "Haseeb");
});
const pro4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));
// we use 2 then with fetch, 1 for converting them to json format and 1 for other operations

Promise.all([pro1, pro2, pro3, pro4]).then( val => console.log(val));