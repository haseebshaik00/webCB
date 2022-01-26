**1) Introduction**  
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
  

**2) HTML**  
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


**3) CSS**  
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


**4) CSS Flexbox**  
a) https://css-tricks.com/snippets/css/a-guide-to-flexbox/ 
b) display: flex;
c) flex-wrap: wrap;
d) flex-direction: row; /* the above two statements short form : flex-flow:row wrap*/
e) justify-content: flex-end; /*  how items within a row are aligned in order*/
f) align-items: baseline; /* align items within the row perpendicularly*/
g) align-content: flex-end; /* how rows all together are aligned*/
h) gap: 20px 30px;
i) text-align: center;


**5) Media Queries**
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

  
**6) JS**  
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


**7) DOM + jQuery**
  


## Notes  
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
23) 
24) 
  

## Writing README files on github
1) https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax  
2) https://levelup.gitconnected.com/github-readme-cheatsheet-617dff61fa23