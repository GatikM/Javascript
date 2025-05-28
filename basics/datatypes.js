let temperature = null;
console.log(typeof temperature); // "object" (null is a special case in JavaScript)

/* In JavaScript, typeof null returns "object" due to a historical bug in the language's implementation. When JavaScript was first created, null was assigned the same type tag as objects by mistake. This behavior was never fixed to maintain backward compatibility. So, even though null is a primitive value and not actually an object, typeof null still returns "object" */

temperature = 25;
console.log(typeof temperature); // "number"

let name = undefined;
console.log(typeof name); // "undefined"

name = "Gatik";
console.log(typeof name); // "string"