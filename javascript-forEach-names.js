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
  "Amelia"
];
console.log("\n", arrayNamen);

console.log("Aufgabe 2: \n");
arrayNamen.sort();
console.log("\n", arrayNamen);

console.log("Aufgabe 3: \n");
arrayNamen.forEach((dieName) => {
    console.log("Die Name " + dieName + " is " + dieName.length + " buchstaben;");
});
