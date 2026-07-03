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


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("alllow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
    
}

//switch statement



