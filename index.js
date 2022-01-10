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
  /* Funktionen sind ein Grundbaustein in JavaScript. Eine Funktion ist eine Prozedur - eine Reihe von Anweisungen, 
  um eine Aufgabe auszuführen oder eine Wert auszurechnen. Um Funktionen zu verwenden, müssen diese im Scope 
  (Gültigkeitsbereich) deklariert werden, in dem sie ausgeführt werden soll. */

  employeeName.push(
    employees
  ); /* push () fügt ein oder mehrere Elemente am Ende des Arrays ein und gibt die neue Länge des Arrays zurück.
   Wenn push mehrere Elemente einfügt, wird jedes dieser Elemente in der Reihenfolge eingefügt, in der es im Aufruf notiert ist.*/

  return employees.length; /* Die return Anweisung beendet einen Funktionsaufruf und spezifiziert einen Wert, 
  der von der Funktion zum Aufrufer zurückgegeben wird */
}

employees.sort(); /* Jedes Array-Objekt besitzt in JavaScript die Methode Array. ... sort(), die Sortierung erfolgt lexikographsich, 
das bedeutet, dass Zahlen wie Zeichenketten behandelt werden. */

employees.forEach((employeeName) => {
  /* Javascript Arrays forEach () forEach() ist eine Variante des klassischen for-Loops. 
  forEach ruft eine Callback-Funktion für jedes Element des Arrays auf und ist intuitiver als die klassische for-i-Iteration:
   Die Länge des Arrays muss nicht bekannt sein*/
  /*console.log(employeeName);*/
  console.log(employeeName.length);
});
