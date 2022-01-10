const namesSort = ["Sammy", "Oscar", "Oliver", "Ava", "Elijah", "Charlotte", "William", "Sophia", "James", "Amelia"];

namesSort.sort();
console.log(namesSort);

 let nameLetters = namesSort.length;

namesSort.forEach (
   
    (letters) => {
            console.log("Der name",  letters , "hat", letters.length , "Buchstaben" , ";");
            
    }

)