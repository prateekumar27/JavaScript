//for of loop

 


//map is an object holds key value pair and remember the original insertion order of the keys and unique value
//maps are nor itreaable
//object dosnt remmember 

//++++++++++++++++
//FOR EACH LOOP

const coding  = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function (item){
    console.log(item);
})

coding.forEach( (item) => {
console.log(item);
})

function printMe(item){
    console.log(item); 
}
coding.forEach(printMe)

coding.forEach((item, index, arr)=> {
    console.log(item, index, arr);  
})