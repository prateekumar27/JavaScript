// array

//array is an object
//array are resizable
//zero base indexing
//shallow copy = properties shares the same refrence = premitivedatatype, callby ref heap

//deep copy = properties do not share the same ref




//Array declared ways 
const myHeroes = ["shaktiman", "naagraaj"]

const myArr2 = new Array(1,2,3,4,)


//////// Array methods /////


const myArr = [0, 1, 2, 3, 4, 5]

// myArr.push(6) // add value in last 6
// myArr.pop() // remove the value 6

// myArr.unshift(9) //add value in front 9
// myArr.shift() // remove the value 9
// console.log(myArr.includes(9)); // to check = false


// console.log(myArr);



// const newArr = myArr.join() // it bind and convert into string
// console.log(newArr);


//Slice and Splice

console.log("A", myArr);

const newSlice = myArr.slice(1, 3)
console.log(newSlice);

console.log("B", myArr)

const newSplice = myArr.splice(1, 3)
console.log(newSplice);


console.log("C", myArr);

////////// Array 2 /////////////












