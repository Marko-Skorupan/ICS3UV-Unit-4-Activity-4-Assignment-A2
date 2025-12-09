/**
 * @author Makro Skorupan
 * @version 1.0.0
 * @date 2025-12-07
 * @fileoverview Program is a calculator that can calculate options a to h.
 */

//VARIABLES
let operation: string = "";

//PROCESS & OUTPUT
console.log("Welcome to my calculator program.");
console.log("Which operation would you like to perform?");
console.log("a. add");
console.log("b. subtract");
console.log("c. multiply");
console.log("d. divide");
console.log("e. absolute value");
console.log("f. round");
console.log("g. raise to an exponent");
console.log("h. square root");

operation = prompt("Enter your choice (a-h):") ?? "";

if (operation === "a") {
  const n1 = Number(prompt("Enter first number:"));
  const n2 = Number(prompt("Enter second number:"));
  console.log(n1 + " + " + n2 + " = " + (n1 + n2));
} else if (operation === "b") {
  const n1 = Number(prompt("Enter first number:"));
  const n2 = Number(prompt("Enter second number:"));
  console.log(n1 + " - " + n2 + " = " + (n1 - n2));
} else if (operation === "c") {
  const n1 = Number(prompt("Enter first number:"));
  const n2 = Number(prompt("Enter second number:"));
  console.log(n1 + " × " + n2 + " = " + (n1 * n2));
} else if (operation === "d") {
  const n1 = Number(prompt("Enter first number:"));
  const n2 = Number(prompt("Enter second number:"));
  console.log(n1 + " ÷ " + n2 + " = " + (n1 / n2));
} else if (operation === "e") {
  const n = Number(prompt("Enter a number:"));
  console.log("The absolute value of " + n + " is " + Math.abs(n));
} else if (operation === "f") {
  const n = Number(prompt("Enter a number:"));
  console.log(n + " rounded is " + Math.round(n));
} else if (operation === "g") {
  const base = Number(prompt("Enter the base:"));
  const exp = Number(prompt("Enter the exponent:"));
  console.log(base + " raised to " + exp + " is " + Math.pow(base, exp));
} else if (operation === "h") {
  const n = Number(prompt("Enter a non-negative number:"));
  console.log("The square root of " + n + " is " + Math.sqrt(n));
}

console.log("Done.");
