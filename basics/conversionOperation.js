let accountName = "Gatik";

console.log(typeof(accountName));

let convertedName = Number(accountName);
console.log(typeof(convertedName));
console.log(convertedName); // converts to NaN (Not a Number) because "Gatik" cannot be converted to a number

// similarly, converting a string to a boolean.
// so we have to be very careful while converting data types in JavaScript.

let accountId = 1;
let convertedId = Boolean(accountId);
console.log(typeof(convertedId));
console.log(convertedId); // converts to true because non-empty strings are truthy
