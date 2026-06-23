

const user = {
    username: "prateek",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username} ,  welcome to website`); // current contexts
        // console.log(this); //current context
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam" //value chnage
// user.welcomeMessage()
console.log(this); //current context empty, coz we are inside a node env

//js only run inside browser before but now there are several engine like node 

//when engine run inside browser the global object inside the bowser  is window... click, form submitt


// function one(){
//     console.log(this); //running this inside a node env , running this inside func
    
// }
// one()


//++++++++++++++++++++++ ARROW FUNC

//explicit return // useing return key
// const add = (num1, num2) => {
// return num1 + num2
// }

// console.log(add(3, 5));


//Implicit return //no return keyword use
// const add = (num1, num2) => ( num1 + num2)

// console.log(add(3, 5));





