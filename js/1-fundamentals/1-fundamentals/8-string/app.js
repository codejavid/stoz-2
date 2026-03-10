

const firstName = "Jagan";
const lastName = "Javid";
const age = 100;


let val;


val = firstName;

// Concatenation
val = firstName + lastName;

val = firstName + " " + lastName;

// Append
val = "john";
// val = val + "Deo";
// val += " Deo";

// Length
// val = firstName.length;

// concat
// val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];
val = firstName[1];

// CharAt
val = firstName.charAt(0);

// Slice
const fruit = "Orange";
val = fruit.slice(1,4);

// Split
const str = "Hello im jagan and im a web dev";
const tags = "Web Dev, App Dev, UI/UX";


val = str;
val = str.split(" ");
val = str.split(" ");

val = tags.split(",");

// Replace
val = str.replace("jagan", "javid");

// Include 
val = str.includes("Hello");
val = str.includes("Hai");

console.log(val);