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
let m = 1; // a list element basically
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
*/

// innerHTML performance

var i1 = document.getElementsByTagName('p')[1];

window.onload = function ()
{
    i1.innerHTML = "a";
    i1.onclick = function(){
        i1.innerHTML = "b";
    }
} // always reduce number of times you are calling innerHTML
