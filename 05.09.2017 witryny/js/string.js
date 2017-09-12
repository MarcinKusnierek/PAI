var tekst = "ZSK - Zespół Szkół Komunikacji";
console.log(tekst.length); //30

var pierwszy = tekst.charAt(0);
console.log(pierwszy); //Z

var ostatni = tekst.charAt(tekst.length - 1);
console.log(ostatni);

var kod =tekst.charCodeAt(0);
console.log(kod);

//Zamiana na dużę litery 
var duza = tekst.toUpperCase();
console.log(duza);

var male = tekst.toLowerCase();
console.log(male);


var poprawny = prompt('Podaj imię',"Kowalski");

/*poprawny = poprawny.charAt(0).toUpperCase()
+ poprawny.slice(1).toLocaleLowerCase();
console.log(poprawny);*/

poprawny = poprawny.substr(1,poprawny.length -2);
console.log(poprawny);