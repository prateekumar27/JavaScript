//for of loop
//array specific loops

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);   
// }

// const greeting = "Hello world"
// for (const greet of greeting){
//   console.log(`Each char is ${greet}`)
// }


//map is an object holds key value pair and remember the original insertion order of the keys and unique value
//maps are nor itreaable

//object dosnt remmember and  forof doesnt work on OBJECTS, BUT forIN work

//for of works for map
//for in works for object and array

// const map = new Map()
// map.set("IN", "INDIA")
// map.set("USA", "USA")
// map.set("FR", "FRANCE")
// for (const [key, value] of map) { //array destructure
//     console.log(key, ":-", value);   
// }

//++++++++++++++++++++++++++++++++++++
//FOR IN LOOP
//OBJECTS
// const myObjects = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift by apple"
// }
// for (const key in myObjects) {
//       console.log(`${key} shortcut is for ${myObjects[key]}`);    
// }

//ARRAY
//array keys 01234
// const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//        console.log(programming[key]);        
// }





//++++++++++++++++
//FOR EACH LOOP
//never return the value
//higer order func

// const coding  = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (item) => {
// console.log(item);
// })

// function printMe(item){
//     console.log(item); 
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=> {
//     console.log(item, index, arr);  



// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "python"
//     }
// ]

// myCoding.forEach( (item) => {
// console.log(item);

// })


//callback returning true and false
//so bascically foreach ignore the return value and give you undefined
//filter return the value


// let newArray = []
// const myNums = [1,2,3,4,5,6,7,8,9]
// myNums.forEach( (num) => {
//      if(num > 4){
//         newArray.push(num)
//     }
    
// })
// console.log(newArray); 


// const myNums = [1,2,3,4,5,6,7,8,9]
// const value = myNums.filter((num) => {
//     return num > 4;
// });
// console.log(value);


const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    edition: "2nd",
    publish: 1988
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    edition: "1st",
    publish: 2008
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self Help",
    edition: "1st",
    publish: 2018
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    edition: "2nd",
    publish: 1999
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    edition: "1st",
    publish: 1997
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    edition: "3rd",
    publish: 1997
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    genre: "Finance",
    edition: "1st",
    publish: 2020
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    genre: "Programming",
    edition: "2nd",
    publish: 2015
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    genre: "Self Help",
    edition: "5th",
    publish: 1937
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    edition: "4th",
    publish: 1937
  }
];

// const user = books.filter((book) => {
// return book.genre === "Fantasy"
// })
// console.log(user);

// const user = books.filter((book) => {
// return book.publish >= 1930 && book.genre === "Fantasy"
// })
// console.log(user);

