//IIFE immediately invoked func expression

//sometime there is a proble occur by gpbal scope pollution, so to remove those global scope variable we use IIFE

//func that is defined and excute immediately after created, used to creat a private scope and avoid global scope pollution


// IIFE = Immediately Invoked Function Expression

// Sometimes variables from the global scope can interfere with our code.
// This problem is called global scope pollution.

// To create a private scope and avoid polluting the global scope,
// we use an IIFE.

//named
(function chai () {
    console.log("DB CONNECTED");
    
}) (); // ; ; ; use this to end 

( () => {
    console.log(`DB CONNECTES 2`);
    
}) ();

( (name) => {
    console.log(`DB CONNECTES 2 ${name}`);
    
}) ("prateek")