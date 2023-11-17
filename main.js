/*
Destructuring:

Given an object person with properties name and age, use destructuring to extract and log these values.
Create an array of objects, each representing a person with a name and age. Use destructuring to extract and log the names of all people.
*/

const person = {
  ind_name: "Steven",
  age: "30",
};
const { ind_name, age } = person;
console.log(ind_name, age);

//***********************

const persons = [
  { name: "Abdulla", age: "30" },
  { name: "Salma", age: "28" },
  { name: "Malek", age: "40" },
];
const [
  { name: personA_name, age: personA_age },
  { name: personB_name, age: personB_age },
  { name: personC_name, age: personC_age },
] = persons;
console.log(personA_name, personA_age);
console.log(personB_name, personB_age);
console.log(personC_name, personC_age);

/*
Rest Parameter:

Write a function that takes any number of arguments and returns their sum using the rest parameter.
*/
const countNumbers = (...nums) => {
  nums.length === 0 && (nums = [0]);
  return nums.reduce((acc, cur) => acc + cur);
};
console.log(countNumbers());
console.log(countNumbers(10, 20, 30));

/*
Spread Operators:

Concatenate two arrays using the spread operator.
Create a copy of an object, changing a specific property using the spread operator.
Use the spread operator to combine two objects into a new one.
*/
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arrs = [...arr1, ...arr2];
console.log(arrs);

const originalObj = { pro1: 5, pro2: 10 };
const copyObj = { ...originalObj, pro1: 7 };
console.log(copyObj);

const obj1 = { id: 1, title: "Item title", price: 200 };
const objExtension = { description: "Item description", sale_price: 150 };
const objs = { ...obj1, ...objExtension };
console.log(objs);

/*
Use a ternary operator to determine if a person is eligible to vote based on their age.
*/
let personAge = 25;
let voteEligibility =
  personAge >= 18 ? "Eligible To Vote" : "Not Eligible To Vote";
console.log(voteEligibility);

/*
Implement a calculator function using a switch statement that supports addition, subtraction, multiplication, and division
*/

let val1 = 30;
let val2 = 20;
let operator = "+";
let result = null;
switch (operator) {
  case "+":
    result = val1 + val2;
    break;
  case "-":
    result = val1 - val2;
    break;
  case "*":
    result = val1 * val2;
    break;
  case "/":
    result = val1 / val2;
    break;
  default:
    result = "This Operator not provided by our calculator";
    break;
}
console.log(result);
