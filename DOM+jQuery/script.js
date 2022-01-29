// ------ DOM ----------


// select
console.log(document);     // entire page
console.log(document.body); //just the body
console.log(document.getElementsByTagName('p'));
console.log(document.getElementsByClassName('details'));
console.log(document.getElementById('school'));

//content
var p2 = document.getElementById('school');
console.log(p2);
console.log(p2.innerText);
console.log(p2.innerHTML);
console.log(p2.outerText);
console.log(p2.outerHTML);

// attribute
p2.innerText="w";
p2.innerHTML="<b> avd </b>";
p2.getAttribute('class');
p2.getAttribute('id');
p2.setAttribute('contentEditable', true);
p2.setAttribute('spellcheck',false);

// for input boxes, use p2.value; more input box commands - p2.validity


// traverse, replace and remove
/* can be used to traverse in stuff like list where you have parent and child basically
let m = 1; // a list element basically which is selected from console
m.parentElement;
m.children;
m.previousElementSibling;
m.nextElementSibling;
m.children[0].children;

m1 = temp0
m1.parentElement.remove(m1);
m1.parentElement - // exists but isnt available on the page 
dee.appendChild(m1.parentElement)

m1.remove
dee.previousElementSibling.previousElementSibling.children[0].appendChild(m1)

// li parent element gives li tag 
*/

// innerHTML performance

var i1 = document.getElementsByTagName('p')[1];

window.onload = function ()
{
    i1.innerHTML = "a";
    i1.onclick = function(){
        i1.innerHTML = "b";
    }
} // always reduce number of times you are calling innerHTML - takes a lot of time in processing


//createElement - instead of innerHTML try to use a combination of createElement and appendChild - also the
// combination differs from case to case
let item = document.createElement('li');

//remove button on click
let xBtn = document.createElement('button');
xBtn.innerText = 'x';
xBtn.onclick = function(event){
    event.target.parentElement.remove();
}

//move the todo up 
let xBtn1 = document.createElement('button');
xBtn1.innerText = 'Up';
xBtn1.onclick = function(event){
    event.target.parentElement.parentElement.insertBefore(
        event.target.parentElement, event.target.parentElement.previousSibling
    );
}

// -------- jQuery --------
//jQuery - helps in DOM manipulation; hiding, showing stuff; toggling stuff
// jQuery also helps in AJAX - without changing the page req to backend and fetch data from API and stuff   

$; // jQuery

// selectors
$('p'); //here the selectors works same as css attribute selector
$('.class1'); 
$('#school'); //returns object(array with all the required tags given) whereas getElementById('school') returns 
//tags with contents inside it. the object's first element is equal to getElementById('school')


//changing attributes and style
let x = $('#school');
x.text(); // returns text
x.text('bob'); // changes text
x.html(); // returns text with tags
x.html("<b> bob </b>"); // changes text .. we can also include html tags in this
x.attr('height'); // returns height
x.attr('height', '800'); // sets height
x.attr('style', 'color:red');
x.css('color');
x.css('color', 'blue');
x.css('font-size', '20pt').attr('width', '200');

//appending and prepending
// $(() => {}) if your script tag and jquery is inlcuded in head, then use this as this works when the whole window is loaded/ready
// anything you want to do with DOM, you can directly start writing the script file or jquery commands if your 
// jquery and script tag is mentioned in the body 

// appending and prepending
/*
    <input id="item" type="text">
    <button id="prepend"></button>
    <button id="append"></button>
    <ul id="list"></ul>
*/
$(() => {
    // we can write functions in two ways
    $('#prepend').click(() => {
        let text1 = $('#item').val(); //val() returns the value and val("adfa") sets the value
        //$('#list').prepend($('<li> ${text1} </li>')); // element creater not a selector as jquery can detect the starting <
        $('#list').prepend($('<li>').text(text1));
    })
    $('#append').click(() => {
        let text1 = $('#item').val();
        $('#list').append($('<li>').text(text1));
    })
})


// --------- AJAX ---------
// mmakes xhr = xml http req
$(() => {
    $('#fetch').click(() =>{
        //asynchronous get req .. this is an asynchronous func hence we will recieve the result in a callback
        $.get("https://newsapi.org/v2/everything?q=tesla&from=2021-12-29&sortBy=publishedAt&apiKey=09aa6966a0724e0697d17efa3ddb62a9", 
        (data) => {
            console.log(data);
            data.articles.forEach(function(i){
                $('#list1').append($('<li>').text(i.title));
            });
        })
    })
})


// traverse in a list
let x = document.getElementById("oneTwo"); // one two

// imagine your DOM as a tree and hence decide your path
console.log(x.previousElementSibling); // one one
console.log(x.nextElementSibling); // one three
console.log(x.previousSibling); // space between one two and one three
console.log(x.parentElement); // ul element
console.log(x.parentElement.parentElement); // li of one

console.log(x.parentElement.parentElement.nextElementSibling); // li of two
console.log(x.parentElement.parentElement.nextElementSibling.children[0]); // ul of two
console.log(x.parentElement.parentElement.nextElementSibling.children[0].chilren); // array of two children


