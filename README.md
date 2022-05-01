# Introduction  
https://github.com/haseebshaik00/FullStack_NodeJS_Live_March2020/blob/master/Lecture01/Intro_to_WebDev.pptx  
a) how the web works: servers, clients, ISPs, DNS, Datacenters  
b) web terminologies: protocols; addresses-ip,domain,mac; packets  
c) components of web: web pages, web sites, web servers, search engines  
d) how web technologies work?  
i) server   
ii) server frameworks : java(spring,play,jboss);python(flask,django,bottle);ruby-rails
  PHP(laravel,codeigniter);node.js(express,hapi.js)  
iii) client side technologies:  
  -- html for markup or structure  
  -- css(SASS and LESS) for styling   
  -- js(jquery,angular,react,backbone,knockout) for scripting and events  
  -- server side DB - RDBMS(MySQL,Postgres,Oracle,MS Databases) and NoSQL(MongoDB,CouchDB,Memcache,Redis)  
  -- client side storage - local Storage, session Storage, cookies, indexedDB, cache  
iv) types of websites : static, dynamic and responsive  
v) RESTful APIs : a contract between server and client, a way to communicate between backend and frontend using diff 
HTTP methods like GET, POST, PUT, DELETE, PATCH
vi) data exchange formats - json and xml  
e) Website design principles - reactive websites, single-page websites, MVC,MVP,MVMM and MV* architecture and web application framework  
f) latest developments - VirtualDOM, ShadowDOM, Sockets, Pub/Sub, Push Notifications, Browser Native APIs(Location, User Data)  
  
<br><br>

# FrontEnd    

**1) HTML**  
a) html5 boilerplate and description of each element and attribute in it  
https://github.com/haseebshaik00/FullStack_NodeJS_Live_March2020/blob/master/Lecture01/html-basics/index.html  
b) normal text, tags - para"p-/p", break"br", italic "i-/i" or "em-/em", bold "b-/b" or "strong-/strong", underline"u-/u",
strikethrough text"s-/s", lists ("ul li-/li ul" ; "ol li-/li ol") and their types, type and start attribute can also 
be written https://github.com/haseebshaik00/FullStack_NodeJS_Live_March2020/blob/master/Lecture01/html-basics/lists.html, nested lists, anchor with href "a-/a" ~ adding target="_blank" opens link in a new tab https://github.com/haseebshaik00/FullStack_NodeJS_Live_March2020/blob/master/Lecture02/more-with-html/links.html ~ inner links : hreffing to the id scrolls the page to that section https://github.com/haseebshaik00/FullStack_NodeJS_Live_March2020/blob/master/Lecture02/more-with-html/inner-links.html, tables : https://github.com/haseebshaik00/FullStack_NodeJS_Live_March2020/blob/master/Lecture01/html-basics/tables.html  
c) Advance topics https://github.com/haseebshaik00/FullStack_NodeJS_Live_March2020/tree/master/Lecture02/more-with-html : iframes ~ use name attribute inside iframe to target them, image "img", video "video-/video" ~ attribute controls shows and manages the controls of the video ~ loop ~ autoplay ~ preload : auto, none, metadata, audio "audio-/audio" ~ have almost same attributes as the video tag     
d) block and inline elements ~ elements can be changed to one another changing the display attribute in CSS   
e) form https://github.com/haseebshaik00/FullStack_NodeJS_Live_March2020/blob/master/Lecture02/more-with-html/forms.html : names is mainly used to refer the elements where as id is mainly used by js, form elements : input "input" many types~password, email,number has min and max attributes too, color, file, checkbox, radio; date; textarea "textarea-/textarea" adjust size with rows and cols; select with options "select option-/option /select" ~ multiple attribute can also be use in this  
f) more form tags : button "button-/button" ~ type="submit" or "reset";  
g) form action="" The HTML form action attribute defines where to send the form data when a form is submitted in an HTML document.  
h) The method attribute specifies how to send form-data (the form-data is sent to the page specified in the action attribute). The form-data can be sent as URL variables (with method="get" ) or as HTTP post transaction (with method="post").  


**2) CSS**  
a) referred in the head tag using - <link rel="stylesheet" href="./style.css">    
b) used for styling texts, styling boxes and css layout  
c) selectors - type, class(.), id(#), universal(*), attribute exampls- input[disabled] or input[type=text]    
d) combinators - adjacent sibling selector(+), general sibling selector(~), child selector(>), descendent selector(" "), or(,)      
e) pseudo selectors used with an ":" - hover, active and focus  
f) more pseudo selectors - nth-child(), last-child, first-child, placeholder, link, visited  
g) id has 1:1 mapping whereas classses have many:many mapping  
h) body selector affects only body tag whereas * affects every tags individually    
i) overriding preference "id>class>element>*"  
j) if a body selector is written twice the second one will overwrite the same properties present in the first one  
k) css "inline-internal-external" file tags which are written last gets the higher priority and in this inline has 
the highest precedence   
**more css attributes**    
l) font-sizes : pt (typewriter font-10pt, browser default font-14pt); px; em(1em - width of character 'm' in default font size); vh-(1/100th of window height); vw-view width  
m) transform: skew, rotate, scale, translate  
https://www.w3schools.com/cssref/css3_pr_transform.asp    
n) box-shadow: color xaxis_shadow yaxis_shadow blur (all are in pixels), transition: seconds, border-radius: 10px     
transition : https://www.w3schools.com/cssref/css3_pr_transition.asp  
transition: property duration timing-function delay|initial|inherit;  
o) all transition is done with respect to origin where as transform is done with respect to last state  
p) keyframes and animations : "animation: name duration timing-function delay iteration-count direction" and animation-direction, animation-fill-mode  
q) use text-align:center; to align text in the center of div  


**3) CSS Flexbox**  
a) https://css-tricks.com/snippets/css/a-guide-to-flexbox/ 
b) display: flex;
c) flex-wrap: wrap;
d) flex-direction: row; /* the above two statements short form : flex-flow:row wrap*/
e) justify-content: flex-end; /*  how items within a row are aligned in order*/
f) align-items: baseline; /* align items within the row perpendicularly*/
g) align-content: flex-end; /* how rows all together are aligned*/
h) gap: 20px 30px;
i) text-align: center;


**4) Media Queries**
a) All possible queries  
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .example {background: red;}
}
  
/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .example {background: green;}
}
  
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .example {background: blue;}
} 
  
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .example {background: orange;}
} 
  
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .example {background: pink;}
}     
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}

  
**5) JS**  
a) <script async defer type="text/javascript" src="script.js"></script> : syntax for js file integration  
https://www.w3schools.com/tags/att_script_async.asp  
b) datatypes : (number,string,boolean,object,function,undefined)  
c) functions : hoisting, reference error for func declared with let as these functions are not hoisted as they are actually defined as a variable, polymorphism, arguments  
d) higher order functions : A higher order function is a function that either takes a function as an argument or returns a function = in C it is possible to create a function in another function and call it in it's immediate scope  
e) In js, polymorphism can work only using if condn not by defining func two times - for this the func gets overidden      
f) all the arguments passed to a func in js are present in an array called arguments  
g) basics - print- cosole.log(), alert(), window.print(); defining variable- normal, var, let
h) arrays: functions - length, push, pop, indexOf, shift, unshift 
i) json: foreach loop, forof loop,indexin loop, function declaration & expression, json object, function inside a json object  
j) classes & objects- three methods of defining an object - normal, with function & with class declaration  
k) strings- declaration types, backtick strings, functions: length, indexOf, lastIndexOf, slice, substring, substr  
l) more array functions: length, forof loop, indexin loop, slice, splice, concat  
m) closures- parent scopes are accessible inside but not the parent's arguments variable, this, string literal, equality, inheritance, prototypes, details in functions and classes, js callstack, setTimeout and setInterval  
o) Unlike what common belief suggests, the delete operator has nothing to do with directly freeing memory […] delete is only effective on an object’s properties. It has no effect on variable or function names.  
p) 
--> without jquery function declaration
    window.onload = function ()
    {
        i1.innerHTML = "a";
        i1.onclick = function(){
            i1.innerHTML = "b";
        }
    }

---> jquery function declaration
    $('#append').click(() => {
      let text1 = $('#item').val();
      $('#list').append($('<li>').text(text1));
    });

<br><br>

# Backend  

## Nodejs
1) js interpreter running in terminal  
2) the outer most scope in browser is window and in node terminal it is global  
3) stuff like window, document, window.location, window.localStorage are not available in terminal
4) basically the DOM in browser js doesnt exist in node and BOM(window) scope of browser became global in the terminal  
5) the console of browser became the terminal in node  
6) chrome js engine (V8 engine) + file system + network + http = nodejs  
7) node is internally written using c++ and the node environment is a WORA/WORE write once run anywhere/everywhere environment   
8) npm - node package manager ; use to install nodejs libs on our program  
9) data = new Buffer(data, 'base64').toString('ascii') : to convert base64 to ascii in nodejs  
10) Commands  
npm init - downloads the package.json
npm install express --save - downloads and installs express
node app.js - to run node on terminal    

## Expressjs
1) express - web framework for node ; web framework are use to make web servers  
2) web server gives the response back to the one who makes request  
3) to render templates we write res.render() not res.send()  
4) if we modify a req in a particular middleware then in the next middleware also the req will get updated  
5) frontend files can be in public or in views but views generally contains templates .. in public folder we keep static files and in views folder we generally keep templates files whose data can be changed based on the requirement through server   
6) (frontend+backend) - industry level -  you can either load a whole public folder and send ajax calls (here ajax calls works directly without loading the page) from js files to the server (js is enabled on frontend)
.. the source code will not have the list items as the list items are added through jquery 
https://github.com/coding-blocks-archives/WebNodeLive2017Winter/tree/master/Webinar12/express_sample
OR
(pure backend) - the source code will have the list items as we send a html page as a response
do the manipulations in the server and send the reponse in the hbs templates (works even when js is not enabled on frontend)  
https://github.com/coding-blocks-archives/WebNodeLive2017Winter/tree/master/Webinar12/express_server_rendering
7) you can use routes to simplify the app.js file  
https://github.com/coding-blocks-archives/WebNodeLive2017Winter/blob/master/Webinar12/express_server_rendering/server.js
https://github.com/coding-blocks-archives/WebNodeLive2017Winter/blob/master/Webinar12/express_server_rendering/routes/todos.js
8) ajax post & get request : 
$.post('/todos/',{task: newTodo},function (data) {
                todoList.empty();
                for (todo of data) {
                    todoList.append("<li>" + todo.task + "</li>")
                }
            }
$.get("https://newsapi.org/v2/everything?q=tesla&from=2021-12-29&sortBy=publishedAt&apiKey=09aa6966a0724e0697d17efa3ddb62a9", 
        (data) => {
            console.log(data);
            data.articles.forEach(function(i){
                $('#list1').append($('<li>').text(i.title));
            });
        })
9) Commands  
app.use(express.json()); // to parse json
app.use(express.urlencoded({ extended : true})); // to parse stuff inside req.body
app.set('view engine', 'hbs'); // setting view engine as hbs
app.set('views',__dirname + '/views'); // setting the views directory
app.use("/xyz", express.static(__dirname + "/public")); // setting the public folder
app.use("/todo", todoRoute); // for routing purpose


<br><br>

# Database

## SQL
1) Database, dbms, 3-level architecture, data independence, relation/table; key- primary, candidate, alternate, foreign; normalization; relation algebra- selection, projection and cartesian products; union, set difference and intersection    
2) SQL - DQL and DML; SQL queries- create table; table cosntraints - column and table constraints; constraints: unique, null/not null, primary key, default, check -in, between, like, not like; multiple keywords using or/and; SQL queries- insert into table  
3) SQL queries- select query; keywords- all, distinct, where, between, in, like, not like, escape  
4) aggregate functions- min(), max(), avg(), sum(), count(), count(*), std.dev(), variance(); clause- order by - asc/desc, group by (used with) HAVING; SQL queries- UPDATE, DELETE, drop table, alter table- add & modify, subtable; inserting text in query; subqueries- expression subquery, inline view/dynamic table concept and quadratic subquery https://www.youtube.com/watch?v=2gMwtwLtWSY  
5) sequence: select->from->where->group by->having->order by  
6) sql+express : https://github.com/coding-blocks-archives/WebNodeLive2017Winter/tree/master/Webinar13
as a backend functioning website and also as an API  


## Sequelize Library
1) object relation mapper, connect with various type of sql dbs, save data in form of js objects, automatically creates sql queries which automatically save data into databases, tables ~ definition/schema , object here is a row  
2) sequelize functions are based on promises  
3) use associations to connect tables  
4) findAll() works using promise API  
5) put db.sync in the end usually but in await func put it at first  

## MongoDB
1) Mongo + Node : https://www.w3schools.com/nodejs/nodejs_mongodb.asp  


<br><br>

# Extras

## Socket.io
https://socket.io/

## Testing and Coverage
Mocha : https://mochajs.org/
Chai : https://www.chaijs.com/
Jest : https://jestjs.io/
RTL : https://testing-library.com/docs/react-testing-library/intro/

## Deploying & Git n Github

<br><br>

# Notes  
1) provide same name for a particular section of radio buttons to select only one radio button  
2) to select a checkbox just by clicking the text you can use target the label "for" attribute with input's id  
3) giving height and width to inline elements is not possible so we make them inline-block  
4) vertically middle height can be maintained using line-height property  
5) to prevent text overflowing from div --- word-break: break-all;  
6) classes are not hoisted  
7) we can put any type of data in an array  
8) arrays can also be concated  
9) this is bound on runtime  
10) type casting string to number - Number()  
String is a function that converts any other datatype to string - String()  
11) __proto__ : use this only for debugging  
12) polymorphism in java is totally based on if else conditions  
13) __proto__ is a hidden field in js but prototype is accessible  
14) __proto__ basically gives the answer from which the value is being inherited  
15) Only functions have prototypes, created objects dont  
16) classes and objects are implemented internally as functions  
17) to inherit classess use new terminology of classes not the old one  
18) Is object a function in JS?
JavaScript provides a number of built-in functions that have various purposes. Two such functions happen to be called Object and Function . So in other words Object is a function and thus also an "object" (data structure)  
19) Object is also an function  
20) In js we always pass values, and for non primitive the values is the reference  
21) let and const are 2 new keywords in ecmascript  
22) const doesnt make the entire variable immutable but does the not allows assignment permissions and const also has block scope  
23) Make sure to load the jQuery script before your own script  
24) transform translate doesn't work on inline elements  
25) We can use css variables through js but the other way around is not possible  
26) calc() is used to perform operations usually mathematical in CSS  
27) Custom properties (sometimes referred to as CSS variables or cascading variables) are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., --main-color: black;) and are accessed using the var() function (e.g., color: var(--main-color);)  
28) if we want to see the changes done on performing the functions in js just write event inside the function argument and access it 
using event.target.value, you can do other things also by exploring event.target  
29) you can change values of css using js function setProperty and css variable and root
// document.documentElement this is the :root of css
// document.documentElement.style.setProperty('--speed', event.target.value)  
https://github.com/haseebshaik00/FullStack_NodeJS_Live_March2020/tree/master/Lecture10/game-slot-machine
30) check .onChange() in js too 
31) you can use .addClass and .removeClass in jquery to add and remove classes  
32) hungarian type of writing variables - first write the type then the use of that variable/func/type  
33) make buttons abled disabled using prop() in jquery https://github.com/coding-blocks-archives/Project-TodoList-Bootstrap-jQuery/blob/master/script.js  
34) functions can be written as function{} or () => {}  
35) https://jaketrent.com/post/javascript-arrow-function-return-rules  
36) js is a single thread application, if that thread stops nothing works   
37) The 64.0.0.0 ip address is used to identify the host and the 64.255.255.255 is used for broadcasting purposes  
38) We have a layout engine in our browser that reads the html and css and forms the webpage, chrome and opera - blink 
firefox - gecko, edge - trident  
39) the browser has a layout engine and a js engine/interpreter in this js engine has a console, DOM : document object model - (object-document) helps to manipulate html and css of the website and BOM : browser object model (object - window) all of our code runs inside the BOM  
40) asynchronous functions have callback and this functions cannot be assigned to a variable  
41) port for http request : 80  
42) base64 encoding : It's basically a way of encoding arbitrary binary data in ASCII text. It takes 4 characters per 3 bytes of data, plus potentially a bit of padding at the end.Essentially each 6 bits of the input is encoded in a 64-character alphabet. The "standard" alphabet uses A-Z, a-z, 0-9 and + and /, with = as a padding character. There are URL-safe variants. Suppose we want to send some text, we want to send this text through the url and while we are sending this text it depricates the url, so it 
wont be possible to understand the data what has been sent hence at that time we can use base64 encoding  
43) three ways to define a func
let a = function(){
}

function a(){
}

let a = () => {
  console.log("A");
}  
44) await code is always in a try catch block  
45) In nodejs, if we write- require('x') , then it first searches for x.js then it searches for x.json and then at last x/index.js  
46) user mode - 3 things are required - identification, authentication & authorization  
47) In a project, maitain routes, controllers, databases and structure them accordingly  
48) we can make proj using 2 approaches, top down(api to db layer) & another bottom up(db layer to api), on industry level 
top down approach is followed and you can use use bottom up approach while making small POCs  
49) callbacks + promises + async/await : 
https://www.w3schools.com/js/js_callback.asp#:~:text=A%20callback%20is%20a%20function,after%20another%20function%20has%20finished
https://www.youtube.com/watch?v=PoRJizFvM7s
50) on industry level, people create backend as an api and frontend seperately also they follow a top down approach api->db layer. 
51) to display photos on your site, host on imgur and use node imgur dependency on your app 
54) When should I use JSON Stringify?
When data is sent to a server it must be sent as a string. JSON.stringify() method converts JavaScript data to a JSON-formatted string. It is usually applied to JS objects to produce a ready-made JSON string to be sent to the server. 
55) Does MongoDB use BSON, or JSON? MongoDB stores data in BSON format both internally, and over the network, but that doesn't mean you can't think of MongoDB as a JSON database. Anything you can represent in JSON can be natively stored in MongoDB, and retrieved just as easily in JSON. 
What is BSON used for?
BSON is the binary encoding of JSON-like documents that MongoDB uses when storing documents in collections. It adds support for data types like Date and binary that aren't supported in JSON. 
56) sockets are used in stuff like chatting, google docs, live collab paint, live share ide 
57)  defer : waits till the dom in the page gets loaded 
58) 
  
<br><br>

# Writing README files on github
1) https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax  
2) https://levelup.gitconnected.com/github-readme-cheatsheet-617dff61fa23