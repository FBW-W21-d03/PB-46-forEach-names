const namen = [
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
  
  console.log("Original-Array:", namen);
  namen.sort();
  console.log("Sortiertes Array:", namen);
  
  namen.forEach((name) => {
    console.log("Länge von", name, "ist:", name.length);
  });
  