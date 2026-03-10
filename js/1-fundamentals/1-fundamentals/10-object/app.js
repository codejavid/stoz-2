

// (.) Object are ( key || value or name || value ) pairs

const person = {
    // Property
    firstName:"Jagan",
    lastName:"Javid",
    age:100,
    email:"j@email.com",
    hadDinner:false,
    hobbies:["Music", "Games"],
    address:{
        city:"Chennai",
        state:"TN"
    },
    // Method
    getFullName:function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

// console.log(person);

let val;

val = person;

// Get a specify value
val = person.firstName; // ***
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hadDinner;
val = person.hobbies[1];
val = person.address.state;
person.getFullName();

person.firstName = "xyz";

console.log(person);