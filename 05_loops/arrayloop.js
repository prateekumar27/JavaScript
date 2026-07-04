//for of loop
//array specific loops

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);   
// }


//map is an object holds key value pair and remember the original insertion order of the keys and unique value
//maps are nor itreaable

//object dosnt remmember and  forof doesnt work on OBJECTS, BUT forIN work

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
//         languageFileName: "javascript"
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
// console.log(item.languageName);

// })


//callback returning true and false
//so bascically foreach ignore the return value and give you undefined


// let newArray = []
// const myNums = [1,2,3,4,5,6,7,8,9]
// myNums.forEach( (num) => {
//      if(num > 4){
//         newArray.push(num)
//     }
    
// })
// console.log(newArray); 


const myNums = [1,2,3,4,5,6,7,8,9]
const value = myNums.filter((num) => {
    return num > 4;
});
console.log(value);
