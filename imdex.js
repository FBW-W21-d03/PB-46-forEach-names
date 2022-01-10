const person = [
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
];
person.sort();
let laenge = 0;

person.forEach((name) => {
  laenge = name.length;
  
   console.log("Der Name", name, "hat eine Länge von",laenge ,"Buchstaben.");
});
