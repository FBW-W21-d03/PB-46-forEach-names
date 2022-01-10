const sortieren = ["Sammy", "Oscar", "Oliver", "Ava", "Elijah", "Charlotte", "William", "Sophia", "James", "Amelia"];

sortieren.sort ();
console.log(sortieren);

let nameLetters = sortieren.length;

sortieren.forEach (
    (letters) => {
       console.log ("Zahlen",  letters , "der", letters.length , "Buchstaben" );
    }
)