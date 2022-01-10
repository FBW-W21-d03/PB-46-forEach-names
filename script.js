const nameArray = ["Sammy", "Oscar", "Oliver", "Ava", "Elijah", "Charlotte", "William", "Sophia", "James", "Amelia"];

nameArray.sort();

console.log(nameArray);

nameArray.forEach(function(item, index){
console.log(item, index)
});

nameArray.forEach((nameLong) => {
    console.log("Name ", nameLong, " ist ", nameLong.length, " Buchstaben");
});