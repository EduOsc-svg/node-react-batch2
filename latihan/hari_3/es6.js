// ES6 const, let dan arrow function
const name = "John";
let age = 30;


const greet = (name, age) => {
  return `Hello, my name is ${name} and I am ${age} years old.`;
};

// Bentuk Function 
function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;

// Destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers; 
console.log(greet(name, age));
console.log(add(10, 3)); 
console.log(multiply(4, 2));
console.log(first, third, second);
console.log(`First: ${first}, Second: ${second}, Third: ${third}`);

//function in function
const outerFunction = (x) => {
  const innerFunction = (y) => {
    return x + y + " Adalah Saudara";
  };
  return innerFunction;
};

const addName = outerFunction("John dan ");
console.log(addName("Jane")); // Output: John dan Jane

// descructuring object
const person = {
  firstName: "John",
  lastName: "Doe",
  age3: 25,
};

const { firstName, lastName, age3 } = person;
console.log(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age3}`);
console.log(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age3}`);

