

let val;

// Number to sring
val = String(555);

// Bool to string
val = String(true);

// Arr to string
val = String([1,2,3]);

// String to number
val = Number("5");
val = Number("5 + 5"); // NaN => Not a Number

// Boolean to string
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("Hello");
val = Number([1,2,3]);

val = parseInt("100.35");
val = parseFloat("100.35");




console.log(val);
console.log(typeof val);