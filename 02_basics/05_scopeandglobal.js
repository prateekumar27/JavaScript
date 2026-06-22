
//in global scope we can access inside func,but nothing can be accessed from scope
// if(true){ // curly braces = scope
//     let a = 10
//     var b = 30
//     const c = 20
// }

// // console.log(a);
// console.log(b);
// // console.log(c);


///////////////////////////////nested scope

// function one(){
//     const username = "Prateek"

//     function two(){
//         const website = "youtube"
//         console.log(username);
        
//         console.log(website);
//     }
//     two()
    
// }
// one()

//child variable can access parents vairable

//+++++++++++++++++++++++++++++++++++//

//hoisting = cannor access before declation

addOne(5) //only declared
function addOne(num){  //function
return +1
}

addTwo(5) //declared also holding in vairble
const addTwo = function(num){ //expression
    return +2
}



 




