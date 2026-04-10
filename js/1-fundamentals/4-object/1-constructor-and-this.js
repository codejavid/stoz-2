

function Person(firstName, lastName){
     this.firstName = firstName;
     this.lastName = lastName;
     this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
     }
}

const person1 = new Person("jagan", "javid");
const person2 = new Person("arun", "kumar");


console.log(person1);
console.log(person2);
console.log(person1.getFullName());
console.log(person2.getFullName());



























// console.log(this); // window

// function x(){
//     console.log(this); // window
// }

// x();

// const obj = {
//     a:"ABC",
//     b:function(){
//         console.log(this);
//     }
// };


// console.log(obj.a);
// obj.b();

