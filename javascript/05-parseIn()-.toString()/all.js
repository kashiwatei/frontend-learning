// From strings to numbers
// parseInt()

let x = "1";

// console.log(typeof x);
// console.log(x += 1);

x = parseInt(x);

console.log(typeof x);
console.log(x += 1);

// From numbers of strings, 
// .toString()

let myPhone = 911123212;
console.log(typeof myPhone);

myPhone = myPhone.toString();

console.log(`+886-${myPhone}`);