/* function subtract(a, b) {
    return a - b;
}
console.log(subtract(10, 5)); // Output: 5
console.log(subtract(20, 8)); // Output: 12 */
/* Q1 */
let str = "123";
let num = Number(str);
console.log(num + 7); // Output: 130
/*-----------------------------------------------------------------------*/
/* Q2 */
function checkFalsy(value) {
  if (!value)
    return "Invalid";
  else
    return "Valid";
}
console.log(checkFalsy(0)); // Output: Invalid
console.log(checkFalsy({})); // Output: Valid
/*-----------------------------------------------------------------------*/
/* Q3 */
for (let i =1; i <= 10; i++){
    if (i % 2 != 0) {
        console.log(i);
    }
}
/*-----------------------------------------------------------------------*/
/* Q4 */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4, 6, 8, 10]
/*-----------------------------------------------------------------------*/
/* Q5 */
let names = ["Osama", "Ahmed", "Sayed", "Mahmoud", "Gamal"];
let newNames = names.concat(["Mohamed", "Sameh"]);
console.log(newNames); //["Osama", "Ahmed", "Sayed", "Mahmoud", "Gamal", "Mohamed", "Sameh"]
/*-----------------------------------------------------------------------*/
/* Q6 */
function getDayName(dayNumber) {
    switch(dayNumber) {
        case 1: return "Saturday"; break;
        case 2: return "Sunday"; break;
        case 3: return "Monday"; break;
        case 4: return "Tuesday"; break;
        case 5: return "Wednesday"; break;
        case 6: return "Thursday"; break;
        case 7: return "Friday"; break;
        default: return "Invalid day number";
    }
}
console.log(getDayName(5));
/*-----------------------------------------------------------------------*/
/* Q7 */
let words = ["a", "ab", "abc"];
let lengths = words.map(function(word) {
  return word.length;
});
console.log(lengths); // Output: [1, 2, 3]
/*-----------------------------------------------------------------------*/
/* Q8 */
function checkDivisible(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  }
  return "Not divisible by both";
}
console.log(checkDivisible(15)); // Output: Divisible by both
console.log(checkDivisible(10)); // Output: Not divisible by both
/*-----------------------------------------------------------------------*/
/* Q9 */
const square = (num) => {
    return num * num;
}
console.log(square(5)); // Output: 25
/*-----------------------------------------------------------------------*/
/* Q10 */
function formatPerson(person) {
  let { name, age } = person;
  return name + " is " + age + " years old";
}
let person = { name: "John", age: 25 };
console.log(formatPerson(person)); // John is 25 years old
/*-----------------------------------------------------------------------*/
/* Q11 */
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5)); // 15
/*-----------------------------------------------------------------------*/
/* Q12 */
function delayedSuccess() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Success");
    }, 3000);
  });
}
delayedSuccess().then(function(result) {
  console.log(result);
}); // Output: Success
/*-----------------------------------------------------------------------*/
/* Q13 */
function largestNumber(arr) {
  return Math.max(...arr);
}
console.log(largestNumber([1, 3, 7, 2, 4])); // 7
/*-----------------------------------------------------------------------*/
/* Q14 */
function getKeys(obj) {
  return Object.keys(obj);
}
let person1 = {
  name: "John",
  age: 30
};
console.log(getKeys(person1)); // ["name", "age"]
/*-----------------------------------------------------------------------*/
/* Q15 */
function splitWord(str) {
  return str.split(" ");
}
console.log(splitWord("The quick brown fox")); // ["The", "quick", "brown", "fox"]
/*-----------------------------------------------------------------------*/

/*-----------------------------------------------------------------------*/
/* Q16 */
/*
forEach:
It is an array method.
It loops through all elements.
You cannot use break or continue inside it.

for of:
It is a loop.
It works with arrays and other iterable objects.
You can use break and continue. */
/*-----------------------------------------------------------------------*/
/* Q17 */
/* 
Hoisting:
Hoisting means JavaScript moves variable declarations to the top of their scope.

Temporal Dead Zone (TDZ):
With let and const, variables are hoisted but cannot be used before declaration. */
/*-----------------------------------------------------------------------*/
/* Q18 */
/* 
== (Loose Equality):
Compares values only.
Converts types automatically.

=== (Strict Equality):
Compares value and type.
No type conversion. */
/*-----------------------------------------------------------------------*/
/* Q19 */
/* 
try: contains code that might cause an error.
catch: handles the error.

In async operations:
When using await, errors can happen.
We use try-catch to prevent the program from crashing.
*/
/*-----------------------------------------------------------------------*/
/* Q20 */
/*
Type Conversion (Explicit Conversion):
You manually change the type.

Type Coercion (Implicit Conversion):
JavaScript changes the type automatically.
*/
/*-----------------------------------------------------------------------*/