const myDate = new Date()

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate)); //Object
console.log(myDate.getMonth() + 1);// 0 Janraury 
console.log(myDate.getDay());

console.log(myDate.toLocaleString("default", {
    weekday: "long"
}));


//++++++++++++++++++++++++++++++++++

let myTime = Date.now()
console.log(myTime); // time come in milisecconde



