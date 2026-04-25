// 1. JavaScript File Practice (app.js)

// Print "Hello World"
console.log("Hello World");

// Print your name
console.log("My name is Fasiha");

// Print name and age on 2 separate lines
console.log("My name is Fasiha");
console.log("I am 25 years old");

// Store city in a variable and print
let city = "Delhi";
console.log(city);

// 3 different console.log() statements
console.log("This is statement 1");
console.log("This is statement 2");
console.log("This is statement 3");

// 2. JavaScript Basics
// JavaScript ka use kis liye hota hai? Answer: Websites ko interactive banane ke liye use hota hai (buttons, animations, forms.).
// Kya JavaScript browser mein run hoti hai? Answer: Yes
// High-level language ka matlab simple words mein likho. Answer: Easy to understand and use.
// Compiler aur interpreter mein se JavaScript kis pe kaam karti hai? Answer: Interpreter
// Kya JavaScript frontend ke liye use hoti hai? Answer: Yes

// 3. Variables (let, const, var)

// let se ek variable banao aur usmein number store karo.
let num = 10;

// const se apna naam store karo.
const myName = "Fasiha";

// var se ek variable banao aur usmein age store karo.
var myAge = 25;

// Ek variable bana kar uski value print karo.
let value = 42;
console.log(value);

// let se variable bana kar uski value change karo (update karo).
let changeVar = 5;
changeVar = 15;
console.log(changeVar);

// 4. Primitive Data Types

// Ek string variable banao (apna naam).
let strName = "Fasiha";

// Ek number variable banao (age ya marks).
let numAge = 25;

// Ek boolean variable banao (true ya false).
let isTrue = true;

// Ek variable ko null assign karo.
let nullVar = null;

// Ek variable banao aur usay koi value assign na karo (undefined).
let undefVar;

// 5. typeof Operator

// Ek string variable banao aur uska typeof check karo.
let strVar = "Hello";
console.log(typeof strVar);

// Ek number variable ka typeof check karo.
let numVar = 123;
console.log(typeof numVar);

// Boolean ka typeof print karo.
let boolVar = false;
console.log(typeof boolVar);

// Ek undefined variable ka typeof check karo.
let undef = undefined;
console.log(typeof undef);

// Ek array ka typeof check karo (observe output).
let arr = [1, 2, 3];
console.log(typeof arr);

// 6. Arithmetic Operators

// 2 numbers add karo aur result print karo.
let a = 10;
let b = 5;
console.log(a + b);

// 2 numbers subtract karo.
console.log(a - b);

// 2 numbers multiply karo.
console.log(a * b);

// 2 numbers divide karo.
console.log(a / b);

// % operator use karke remainder find karo.
console.log(a % b);

// 7. Comparison Operators

// Check karo 5 == 5 (result print karo).
console.log(5 == 5);

// Check karo 5 === "5"
console.log(5 === "5");

// Check karo 10 > 5
console.log(10 > 5);

// Check karo 3 < 1
console.log(3 < 1);

// 8. Increment / Decrement

// Ek variable x = 5 banao aur x++ use karo.
let x = 5;
x++;
console.log(x);

// Ek variable y = 5 banao aur ++y use karo.
let y = 5;
++y;
console.log(y);

// Ek variable ko -- se decrease karo.
let z = 10;
z--;
console.log(z);

// Pre-increment ka result print karo.
let pre = 5;
console.log(++pre);

// Post-increment ka result print karo (difference observe karo).
let post = 5;
console.log(post++);

// Ek program likho jisme:
// 2 variables banao (numbers)
// Unka sum, subtraction, multiplication aur division karo
// Har result alag line mein print karo

let num1 = 20;
let num2 = 4;

console.log("Sum:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);