//Objects = collection of data stored in key and value pair

//object literalls

//dot notation

const mySym = Symbol("myfile1")

const user = {
    name: "Prateek", //string key
    "full name": "Prateek kumar", // [] = #space 
    [mySym]: "myfile1",// symbol key
    age: 18,
    location: "Jaipur",
    email: "pk@gmail.com",
    isLoggedIn: false
}
// console.log(user.age);
// console.log(user["full name"]);
// console.log(user[mySym]);
// console.log(user);


//CHANGE AND FREEZE

// user.email = "Prateek@gmail.com"
// console.log(user.email); //changing and updation

// Object.freeze(user)
// user.email = "kumar@gmail.com"
// console.log(user.email); //freeze, it will not chnage anything


//FUNCTIONS 

// user.greeting = function(){
//     console.log("Hello JS user");
// }
// user.greeting2 = function(){
//     console.log(`Hello JS user ${this.name}`); //same object ref use .this
// }
// console.log(user.greeting());
// console.log(user.greeting2());

// console.log(user.greeting); //function return back, function didnt excecute only function ref comes


////////////////////////////////////////////////////

//object constructor

const tinderUser = new Object() //singleton object


//object nesting 

// const regularUser = {
//     userName : {
//         name : {
//             fullname : {
//                 firstname : "Prateek",
//                 lastname : "Kumar"
//             }
//         }
//     }
// }


//merging two or more objects
//assign
//spread

// const obj1 = {
//     1: "a",
//     2: "b"
// }
// const obj2 = {
//     3: "a",
//     4: "b"
// }

// const obj3 = Object.assign({}, obj1, obj2) //target and source, all the value is going to obj1 if target {} is not given, syntaxically
// console.log(obj3);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


////////////////////

// console.log(user);
// console.log(Object.keys(user)); //keys will come in array format

// console.log(Object.entries(user));// key and pair convert in an array


/////OBJECT DESTRUCTURE //////

const course = {
    coursename : "JS",
    price : "9999",
    courseInstructor : "Prateek"
}

const { coursename, courseInstructor, price } = course

console.log(coursename);
console.log(courseInstructor);
console.log(price);


 























