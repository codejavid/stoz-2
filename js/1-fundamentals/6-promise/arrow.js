
// const sayHello = function(){
//     console.log("Hello");
// }

// sayHello();

// Arrow Function

// const sayHello = () => {
//     console.log("Hello");
// }


// One like function does not need a braces
// const sayHello = () => console.log("Hello");

// One line return 
// const sayHello = () => "Hello";
// const sayHello = () => 5;
// const sayHello = () => true;
// const sayHello = () => [true];

// Return object in a one line 
// const sayHello = () => ({msg:"Hello"});
// const sayHello = () => {
//     return {
//         msg:"Hello"
//     }
// };

// Single params does not need a parentheses

// const sayHello = name => `Hello ${name}`
// const sayHello = (firstName, lastName) => `Hello ${firstName} ${lastName}`


// console.log(sayHello("jagan", "javid"));

const users = ["javid", "jagan", "Akask"];


// users.forEach(function(user){
//     console.log(user);
// })

// users.forEach(user => console.log(user));
users.forEach((user, index) => console.log(user,index));