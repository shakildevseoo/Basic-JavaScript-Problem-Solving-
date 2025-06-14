                            /*Basic Level 1 */

// === Question 1 Start ===
let carName = "Volvo";
console.log(carName); // output: Volvo
// === Question 1 End ===


// === Question 2 Start ===
let firstName = "John", lastName = "Doe" , age = 35
console.log(firstName, lastName, age); //  John Doe 35

// 1st variable name: firstName
// 2nd variable value: "Doe"
// 3rd variable name and value: age = 35

// === Question 2 End ===


// === Question 3 Start ===

// x = 10;
// y = 5;
// x = ... // what will be the value of x ? 

//Ans:
x = 10; 
y = 5;
x *=  y
console.log(x) //output : 50
// === Question 3 End ===

// === Question 4 Start ===
let length = 16; // number
let lastName = "Johnson"; // string

const x = {
  firstName: "John",  
  lastName: "Doe"
};    // object

console.log(typeof length); // output: number
console.log(typeof lastName); // output: string
console.log(typeof x) // output: object

// === Question 4 End ===

// === Question 5 Start ===
function myFunction(){
    alert("Hello World")
}
myFunction(); // calling the function here

// === Question 5 End ===

// === Question 6 Start ===
 const person = {
    name : "John",
    age : 50
  }
alert(person.name + " " + " is" + " " + person.age) // output : John is 50
// === Question 6 End ===


// === Question 7 Start ===
// HTML File 
// <button onclick="showMessage()">Click Me</button>
   <script>
   function showMessage() {
    alert("Thanks for clicking me");
  }
   </script>

// === Question 7 End ===

//********************** Array Related Question Start ******************

// === Question 8 Start ===
 //8.1
 const cars  = ["Volvo", "Jeep", "Mercedes"]
console.log(cars.length) // output: 3

//8.2
let brand = ["Volvo", "Jeep", "Mercedes"];
brand[0] = "Ford";
console.log(brand); // output: ["Ford", "Jeep", "Mercedes"]

// === Question 8 End ===

//********************** Array Related Question End ******************


//********************** Math Related Question End ******************
// === Question 9 Start ===
//9.1
  let randomNumber = Math.random();
  console.log(randomNumber)  //output : random number 0 to 0.99

//9.2
let largestNumber = Math.max(10, 20);
console.log(largestNumber) // output : 20

//********************** Math Related Question End ******************

// === Question 9 End ===

//************** Comparison Operator Related Question Start ************
// === Question 10 Start ===
//10.1
x = 10;
y = 5;

alert(x > y) // output:  true


//10.2

age < 18 ? alert('Too young') : alert('Old enough');

// === Question 10 End ==
//************** Comparison Operator Related Question End ************

                              /*Basic Level 2 */

// === Question 11 Start ===
function celsiusToFahrenheit(celsius){
    return (celsius * 9 / 5) + 32 ;
}

console.log(celsiusToFahrenheit(0)) // output:  32
console.log(celsiusToFahrenheit(25)) // output:  77

// === Question 11 End ===

// === Question 12 Start ===
function isEven(number){
    return number % 2 === 0;
}

console.log(isEven(4)); // output:  true
console.log(isEven(7)); // output:  false


// === Question 12 End ===

// === Question 13 Start ===
function sum(a, b) {
  return  a + b;
}

console.log(sum(3, 4)); // output:  7
console.log(sum(10, 20)); // output:  30
// === Question 13 End ===


// === Question 14 Start ===
function findSmallestNum(arr) {
  return Math.min(...arr); // use spread operator
}

console.log(findSmallestNum([3, 5, 1, 9])); // output: 1
console.log(findSmallestNum([-1, -5, 0, 10])); // output: -5

// === Question 14 End ===

// === Question 15 Start ===
function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}


console.log(countVowels("hello world")); // output:  3
console.log(countVowels("Javascript")); // output:  3

// === Question 15 End ===

// === Question 16 Start ===
function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement([1, 2, 3])); //output: 1
console.log(getFirstElement(["a", "b", "c"])); // output: "a"
// === Question 16 End ===

// === Question 17 Start ===
 function isArrayEmpty(arr){
  return arr.length === 0;
}

console.log(isArrayEmpty([])); //   output: true
console.log(isArrayEmpty([1, 2, 3])); //   output: false

// === Question 17 End ===

// === Question 18 Start ===
  function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorialize(num - 1);

}

console.log(factorialize(5)); // output:  120
console.log(factorialize(7)); // output:  5040
// === Question 18 End ===

// === Question 19 Start ===
function reverseString(str){
  return str.split('').reverse().join('');
} output: 
console.log(reverseString("hello")); // output:  "olleh"
console.log(reverseString("world")); // output:  "dlrow"

// === Question 19 End ===

// === Question 20 Start ===
function toLowerCase(str) {
  return str.toLowerCase();
}

console.log(toLowerCase("HELLO WORLD")); // output:  "hello world"
console.log(toLowerCase("JavaScript")); // output:  "javascript"

// === Question 20 End ===

// === Question 21 Start ===
function stringLength(str) {
  return str.length;
}

console.log(stringLength("hello")); // output:  5
console.log(stringLength("world")); // output:  5

// === Question 21 End ===

// === Question 22 Start ===
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
// === Question 22 End ===
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // output:  [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // output:  ["a", "b", "c", "d"]

// === Question 23 Start ===
function getLastElement(arr) {
  return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3])); // 3 output: 
console.log(getLastElement(["a", "b", "c"])); // output:  "c"

// === Question 23 End ===

// === Question 24 Start ===
function getFirstCharacter(str) {
  return str.at(0);
}

console.log(getFirstCharacter("hello")); // output:  "h"
console.log(getFirstCharacter("world")); // output:  "w"

// === Question 24 End ===

// === Question 25 Start ===
function sumArray(arr) {
 return arr.reduce((a, b) => a + b, 0);
}

console.log(sumArray([1, 2, 3, 4])); // output:  10
console.log(sumArray([-1, -2, -3, -4])); // output:  -10
console.log(sumArray([1.5, 2.5, 3.5])); // output:  7.5


// === Question 25 End ===
