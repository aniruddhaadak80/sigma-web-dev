let cars = ["Maruti", "Toyota", "Lamborgini"];

let birds = ["Parrot", "Chicken", "Peacock", "king-fisher"];

console.log(cars);

console.log(typeof cars); //-----> object

console.log(cars.length); //------>3

console.log(cars[0].toUpperCase()); //------>MARUTI

console.log(cars.join(" && ")); //------> Maruti && Toyota && Lamborgini

//******************************** Add two array *********************************
let carBirds = cars + " ," + birds; //------> Add car and birds
console.log(carBirds); //------> Maruti,Toyota,Lamborgini ,Parrot,Chicken,Peacock,king-fisher

//?  you can use concat() to add two array
let birdscar = cars.concat(birds); //-----> add birds and car array together using concat() method 
console.log(birdscar); /*------------------------------->
[
  'Maruti',
  'Toyota',
  'Lamborgini',
  'Parrot',
  'Chicken',
  'Peacock',
  'king-fisher'
]
*/

// ! sort the array
console.log(birds.sort()); //According to dictionary ----> [ 'Chicken', 'Parrot', 'Peacock', 'king-fisher' ]

// create array using array.from( ) method
let arr = Array.from("INDIA"); //create array Directly
console.log(arr); //-----> [ 'I', 'N', 'D', 'I', 'A' ]

// reverse the array arr
console.log(arr.reverse()); //-----> [ 'A', 'I', 'D', 'N', 'I' ]

// null and undefined in javascript
let name;
console.log(name); //-----> undefined
 
