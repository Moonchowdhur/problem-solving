//1. Array Filtering and Mapping
const people = [
  { name: "John", age: 25, gender: "male" },
  { name: "Sarah", age: 30, gender: "female" },
  { name: "Mike", age: 20, gender: "male" },
  { name: "Emily", age: 22, gender: "female" },
  { name: "Jake", age: 27, gender: "male" },
];
function filterAndMapMales(arr) {
  return arr
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
}

// console.log(filterAndMapMales(people));

// 2.Object Manipulation
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

function getBookTitles(arr) {
  return arr.map((book) => book.title);
}

// console.log(getBookTitles(books));

// 3. Function Composition

function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

function composedFunction(num) {
  return addFive(double(square(num)));
}

// composed function
// console.log(composedFunction(3));

// 4. Sorting Objects

const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2005 },
  { make: "Tesla", model: "Model 3", year: 2020 },
];

function sortCarsByYear(arr) {
  return arr.sort((a, b) => a.year - b.year);
}

// console.log(sortCarsByYear(cars));

// 5. Find and Modify

const people1 = [
  { name: "John", age: 25 },
  { name: "Sarah", age: 30 },
  { name: "Mike", age: 20 },
];

function findAndModifyPerson(arr, name, newAge) {
  const person = arr.find((p) => p.name === name);
  if (person) {
    person.age = newAge;
  }
  return arr;
}

// console.log(findAndModifyPerson(people1, "Sarah", 35));
