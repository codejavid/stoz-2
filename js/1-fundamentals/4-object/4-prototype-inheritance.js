
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
 
// Greeting 
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;    
}
 
const javid = new Person("Jagan", "Javid");


console.log(javid.greeting());

// Customer object 
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// inheit the person prototype methods to customer
console.log(Customer.prototype);
Customer.prototype = Object.create(Person.prototype)


const javidCustomer = new Customer("jagan", "javid", "111-1111-111", "standard");



console.log(javidCustomer);

// const x = Object.create({});

// console.log(x);

// const b = {};

// console.log(b);

