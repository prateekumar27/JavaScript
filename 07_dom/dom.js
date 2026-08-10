//dom = document object model
//console.log(dir.documnet)
//console.log(window.document)
//console.log(document)


//This allows JavaScript to access and modify the content, structure, and styles of a web page dynamically.
//that represents an HTML


//++++++<h1 id="title" class="heading">Dom </h1>

//document.getElementById("title") = <h1 id="title" class="heading">Dom </h1>

//document.getElementById("title").id = "title"

//document.getElementById("title").className = "heading"

//document.getElementById("title").getAttribute("class") = "heading"

//document.getElementById("title").getAttribute("id") = "title"

//document.getElementById("title").setAttribute("class", "test") = always override now class=test on concole but on document class = heading

//++++++++Styling+++++++++//
//const heading = document.getElementById("title");
//heading
//heading.style.bacground = "greeen"
//heading.style.padding = "15px"
//heading.style.borderRadius = "5px"


//++++++ CONTENT +++++////

//<h1> hello prateek <span style = display: None> goodmoring /<span> </h1>

//heading.textContent = hello prateek good morning


//heading.innerText = hello prateek

//heading.innerHTML = hello prateek  <span style = display: None> goodmoring /<span>


//+++  QUEARYSELECTOR  +++++++//

//document.querySelector("h1")
//document.querySelector("h2")
//document.querySelector("#title")
//document.querySelector(".heading")

//EXAMPLE//

{/* <ul>
  <>one</>
  <>two</>
 <>three</>
</ul> */}

// document.querySelector("ul")

// const myul = document.querySelector("ul")

// myul.querySelector("li") = always selct first elemet

// const turngreen = myul.querySelector("li")

// turngreen.style.background = "green"

//turngree.innnertext //one
//turngree.innnertext = "five" //one will become five

//what datatype they are returning = diffrence


//+++++  QUERY SELCTOR ALL ++++++// prototype

//document.querySelectorAll("li") = we will get a nodelist and prototype(forech)

//const list = document.querySelectorAll("li")
//list[0].style.color = "red" //use[0] //this important

// list.foreach ( (li) => {
// li.style.color = "green"
// })


//+++++  GET ELEMEN BY CLASS ANME +++////

{/* <ul>
  <li class = "list">one</>
  <li class = "list">two</>
 <li class = "list">three</>
 <li class = "list">four</>
</ul> */}

// document.getElementsByClassName("list") = we will get HTML COLLECTION but we have to convert this into an array first to get prototype
//node collection = prototype and html collection(no prototype) are diff

//const tempclasslist =  document.getElementsByClassName("list") 

//const converted = Array.from(tempclasslist)

// converted.foreach( (li) => {
//   li.style.color = "blue"
//   })







//dom selector = methods to find html element using javascript

//class="heading"
//class="heading"
//getelemntbyclassname("heading")
//it will return html collection


//query selector
//Uses CSS selectors and returns the first matching element.

// document.querySelector(".heading")
// document.querySelector("#title")
// document.querySelector("p")

// If there are 5 <p> elements, it returns only the first <p>.


// What is NodeList?

// A NodeList is a collection of nodes returned by some DOM methods.

// For example:

// const items = document.querySelectorAll("li");

// console.log(items);

// You might get:

// NodeList(3) [li, li, li]

// You can access elements using indexes:

// console.log(items[0]);
// console.log(items[1]);

// You can also use forEach():

// items.forEach((item) => {
//     console.log(item);
// });




// What is HTMLCollection?

// An HTMLCollection is a collection of HTML elements.

// For example:

// const headings = document.getElementsByClassName("heading");

// console.log(headings);

// You might get:

// HTMLCollection(3) [h1.heading, h2.heading, h3.heading]

// You can access them using indexes:

// console.log(headings[0]);
// console.log(headings[1]);

// But unlike a NodeList, an HTMLCollection does not have forEach() directly.

// So this won't work:

// headings.forEach(...)

// Instead, you can use a normal for loop:

// for (let i = 0; i < headings.length; i++) {
//     console.log(headings[i]);
// }

// Or convert it to an array:

// Array.from(headings).forEach((item) => {
//     console.log(item);
// });













