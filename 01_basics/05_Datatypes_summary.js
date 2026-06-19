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


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack ( primitive ),  heap( non- primitive)
 //stack you get a copy of whatever vairable youve declared

 let room = 101
 let frndroom = room

 frndroom = 202
 console.log(room); 101
 console.log(frndroom);202

 //output 101 202
 

 //whenever a memory id defined inside the heap you get a refrence to the original

 let house1 = {
  color: "Blue"
};

let house2 = house1;

house2.color = "Red";

console.log(house1.color);








