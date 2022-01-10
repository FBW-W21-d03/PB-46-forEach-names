console.log("Aufgabe 1: ");
let arrayNamen = [
  "Sammy",
  "Oscar",
  "Oliver",
  "Ava",
  "Elijah",
  "Charlotte",
  "William",
  "Sophia",
  "James",
  "Amelia",
  "Sharfuddin"
];
console.log("", arrayNamen);

console.log("Aufgabe 2: ");
arrayNamen.sort();
console.log("", arrayNamen);

console.log("Aufgabe 3: ");
arrayNamen.forEach((dieName) => {
    console.log("Die Name " + dieName + " is " + dieName.length + " buchstaben;");
});