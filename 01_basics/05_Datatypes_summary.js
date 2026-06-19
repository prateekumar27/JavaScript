// datatypes  = the way we kept data into the memory and how we access it, there are two catgoraztion, 

//Primitive callbyvalue

// strings = sequence of char enclosed in double quotes
// number = represents both integer and floating number
// boolean = represents a binary value true and false
// null = object = represent empty value
// undefined = has been declared but hasnt assigned
// symbol = to make a value unique used symbol
// bigInt = represent large int 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outSideTemp = null

let userEmail;

let id = Symbol("123")
let anotherId = Symbol("123")
console.log(id === anotherId);

const bigNumber = 5123465435676n



//Non-Primitive callbyreference

//Array

const heros = ["shaktiman", "naagraj", "doga"]

//Objects

let name = {
    name: "prateek",
    age: 22,

}

//Functions

const myFunc = function(){
    console.log("hello");
    
}





