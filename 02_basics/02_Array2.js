const marvelHeroes = ["thor", "ironman", "spiderman"]

const dcHeroes = ["superman", "flash", "batman"]

//PUSH
// this is not a right way it will create array inside an array
// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes); 

//CONCAT
//this is the right way to connect two array it will give a sigle array
// const newHeroes = marvelHeroes.concat(dcHeroes)
// console.log(newHeroes);

//SPREAD OPRATOR
//this is also the right way to merge the array
// const newHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(newHeroes);


//FLAT
//return a new array, if there are nested array, it will return single array with all the element
// const array = [1,2,3,4,[4,5,6],7,[6,7,[4,5,6]]]
// const real_Array = array.flat(Infinity)//depth
// console.log(real_Array);


//ARRAY.ISARRAY
//built in method used to check a value is an array or not
console.log(Array.isArray("Prateek")); //false

//






