//dom = document object model
//console.log(dir.documnet)
//console.log(window.document)
//console.log(document)


//++++++<h1 id="title" class="heading">Dom </h1>

//document.getElementById("title") = 

//document.getElementById("title").id

//document.getElementById("title").className

//document.getElementById("title").getAttribute("class") = "heading"

//document.getElementById("title").getAttribute("id") = "title"

//document.getElementById("title").setAttribute("class", "test") = always override now class = heading

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

// myul.querySelector("li")

// const turngreen = myul.querySelector("li")

// turngreen.style.background = "green"

//turngree.innnertext //one
//turngree.innnertext = "five"

//what datatype they are returning = diffrence


//+++++  QUERY SELCTOR ALL ++++++// prototype

//document.querySelectorAll("li") = we will get a nodelist and prototype 

//const list = document.querySelectorAll("li")
//list[0].style.color = "red" //use[0] this important

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

//const tempclasslist =  document.getElementsByClassName("list") 

//const converted = Array.from(tempclasslist)

// converted.foreach( (li) => {
//   li.style.color = "blue"
//   })










