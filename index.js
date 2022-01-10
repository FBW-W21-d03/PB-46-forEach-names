"use strict";

const employees = [
  "Sammy",
  "Oscar",
  "Oliver",
  "Ava",
  "Elias",
  "Charlotte",
  "William",
  "Sophia",
  "James",
  "Amelia",
];
function name(employees) {
  employees.push(employees);
  return employees.length;
}

employees.sort();
employees.forEach((employeeName) => {
  console.log(employeeName);
});
