//if



// if(true ){ // should be true always if false no entry in condition

// }

// const temp = 41

// if (temp === 41) {
//     console.log("less then 50");
    
// }else{
//     console.log("temp is greater then 50");
    
// }

//implicit scope // in one line 

// const balance = 1000

// if (balance > 500) console.log("test");


//nesting

// const balance = 1000

// if (balance < 500) {
//     console.log("less than");
    
// }else if (balance < 750) {
//     console.log("less than 750");
    
// }else if (balance < 900) {
//     console.log("less than 750");
    
// }else{
//     console.log("less than 1200");
    
// }



//OR , AND , ??(nullish coalescing operator),
//TERNIARY ?

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
;


//to provide a default value when a varibale is null and undefineed
let username = null
console.log(username ?? "guest")

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20




// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard) {
//     console.log("alllow to buy course");
    
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("user logged in");
    
// }

//switch statement
// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     case 5:
//         console.log("may");
//         break;

//     default:
//         console.log("default match");
//         break;
// }


//truethy // falsy

// const userEmail = ""

// if (userEmail) {
//     console.log("got user email");
    
// }else{
//     console.log("dont have user email");
    
// }

//falsy value = false , "" , 0 , -0 , bigInt 0n , null, undefined , Nan

//truthy value = "0" , "false" , "space" , [] , {} , function(){} , 

//when we assume its a true value 

const array = []
if (array.length === 0) {
    console.log("array is empty");
    
}
const object = {}
if (Object.keys(object).length === 0) {
    console.log("object is empty");
    
}


