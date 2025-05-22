//Q 1 -  Write a function that takes person age as a number as input and determines, person are eligible or not for voting ?
//Ans - 
function isEligibleForVoting(age) 
{
  return age >= 18 ? "Eligible for voting" : "Not eligible for voting";
}

//Q 2 -  Write a function that takes two numbers as input and determines which one is greater ?
//Ans -
function findGreater(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

//Q 3 - Write a function that takes a number as input and determines if it is positive or negative ?
//Ans - 
function isPositiveOrNegative(num) {
  return num >= 0 ? "Positive" : "Negative";
}
//Q 4 - Write a function that takes a number as input and determines if it is even or odd ?
//Ans - 
function isEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

//Q 5 -Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’ ?
//Ans - 
function containsA(str) {
  return /a/i.test(str) ? "Contains 'a' or 'A'" : "Does not contain 'a' or 'A'";
}

//Q 6 - Write a function that takes a string as input and determines if it is longer than 5 characters ?
//Ans - 

function isLongerThanFive(str) {
  return str.length > 5 ? "Longer than 5 characters" : "5 or fewer characters";
}

//Q 7 -Write a function that takes a number as input and determines if it is between 1 and 10 ?
//Ans - 

function isBetweenOneAndTen(num) {
  return num > 1 && num < 10 ? "Yes" : "No";
}

//Q 8 -Write a function that takes a string as input and determines if it contains the word "hello" ?
//Ans - 

function containsHello(str) {
  return str.includes("hello") ? "Contains 'hello'" : "Does not contain 'hello'";
}

//Q 9 -Write a function that takes a number as input and determines if it is a multiple of 3 ?
//Ans - 
function isMultipleOfThree(num) {
  return num % 3 === 0 ? "Multiple of 3" : "Not a multiple of 3";
}

//Q 10 - Write a function which takes in a number as input and returns it after multiplying by 10 ?
//Ans -
function multiplyByTen(num) {
  return num * 10;
}
