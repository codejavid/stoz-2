

// let name = "jagan";

// console.log(name);


// String

const name = "Jagan";
const name2 = new String("Javid");

// console.log(name);
// console.log(name2);
// console.log(typeof name);
// console.log(typeof name2);

// Number

const num1 = 5;
const num2 = new Number(7);


// console.log(num1)
// console.log(num2)

// Boolean
const bool1 = true;
const bool2 = new Boolean(false);

// console.log(bool1)
// console.log(bool2)

// Function
const getSum1 = function(x, y){
    return x + y;
}

const getSum2 = new Function("x", "y", "return x + y");

// console.log(getSum1(5,5));
// console.log(getSum2(10,10));

// Object
const obj1 = {name:"Javid"};
const obj2 = new Object({name:"Jagan"});

// console.log(obj1)
// console.log(obj2)

// Array

const arr1 = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5);

console.log(arr1);
console.log(arr2);