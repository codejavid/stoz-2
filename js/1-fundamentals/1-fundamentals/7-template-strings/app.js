

const name = "Javid";
const age = 100;
const job = "web dev";
const city = "Chennai";


let html;

// Without template strings

// html = "My name is" + " " + name + " " + "im" + " " + age + " " + "my job is" + " " + job + " " +
// "im from " + " " + city;


html = `My name is ${name} im ${age} my job is ${job} im from ${city}`;


console.log(html);