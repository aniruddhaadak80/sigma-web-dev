// var is not block scoped but let is block scoped 
let b = 2;
 
// block in javascript
{
    let b = 3;
    console.log(b);
}
console.log(b);

// Object in javascript
let obj ={
    name:"Aniruddha Adak",
    profession:"Web Developer"
};
console.log(obj);
obj.roll=30;
console.log(obj);

//**** typeof operator for finding type of any variable 
let name ="Ani";
let roll = 30;
let float = 3.3;
let nll = null;
let BIGINT = BigInt(90);
 
console.log(name,roll,float,nll,BIGINT)
console.log(typeof name,typeof roll,typeof float,typeof nll,typeof BIGINT);



 
