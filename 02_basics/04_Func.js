// function = reusable code of block , excecute when caleed

// function addTwoNum (num1, num2){ // inputes knows as parameters
//     console.log(num1 + num2);
// }
// addTwoNum(2 , 4) //value passed when func call = arguments


// function addTwoNum (num1, num2){
//     let result = num1 + num2
//     return result //Give the result from the function back to the place where the function was called.
// }
// const result = addTwoNum(3, 5)
// console.log(result);



// function addTwoNum (num1, num2){
//     return num1 + num2
// }
// const result = addTwoNum(3, 5)
// console.log(result);


function loginUserMessage(username){ //default
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Prateek")); 

//if username true "just logged in"
//if false "please enter a username"


