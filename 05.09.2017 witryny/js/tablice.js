//Tworzenie tablicy za pomocą literału tablicy 


/*var kolory = ['czerwony', 'różnowy', 'zielony'];

var elwynik =document.getElementById('wynik');

elwynik.textContent = kolory[0];*/

//Tworzenie tablicy za pomocą konstruktora tablicy Array


/*var samochody = new Array('BMW', 'Ford', 'Fiat', 'Audi');

console.log(samochody[samochody.lenght-1]);
console.log('Ilość elenetów: ' + samochody.length);
var auto =prompt('Podaj auto:');
samochody[0] = auto;
console.log(samochody);*/

//Utwórz tablice o nazwie szkoła przypisz do niej imię, nazwisko i wiek ucznia w promt. wyświetl tablice w bloku o nazwie dane 

/*
var szkola = new Array(3);

var imie = prompt('Podaj imie: ');
var nazwisko = prompt ('Podaj nazwisko: ');
var wiek = prompt ('Podaj wiek: ');

szkola[0] ="Imię ucznia: " + imie + ' ';
szkola[1] ="Nazwisko ucznia: " + nazwisko;
szkola[2] ="Wiek ucznia: " + wiek;

console.log(szkola);
var elSzkola = document.getElementById('szkola');
elSzkola.innerHTML = szkola;*/

// Tablice wielowymiarowe

/*var tablica2 = new Array(new Array("Jan", "Nowak", "Poznań"),
new Array ("Wojtek", "Debski", "Poznań"),new Array ("Wojtek", "Piwowarski", "Poznań"));

console.log(tablica2);
console.log(tablica2[1][2]);

//sortwoanie
var imiona = ["Paweł", "Zenon", "Jan", "Alpaka", "Potruś"]

console.log(imiona)


var posortowane = imiona.sort();
console.log(posortowane);

var odwroc =posortowane.reverse();
//Usuwa ostatni element
odwroc.pop();
console.log(odwroc);
//Dodawanie elementu na koniec tablicy
posortowane.push("Stefan");
console.log(posortowane);
console.log(odwroc);

//Doodawanie elementu na początek tablicy
odwroc.unshift("Bartosz");
console.log(odwroc);

console.log(odwroc.indexOf("Jan"))*/


//Sorotwanie liczb
/*
var cyfry = [1, 2, 3, 23, 533 ,23, 400, 666, 1000];

console.log(cyfry);

cyfry.sort();
console.log(cyfry);

cyfry.sort(function(a,b)
    {
    return a - b;
}
);

console.log(cyfry)
*/
//formularz


var elWynik = document.getElementById("wynik");
var elKolor = document.getElementById("kolor");
var kolor = new Array(); 


function zapisz(){
    console.log(elKolor.value);
    kolor[0]=elKolor.value;
    console.log(kolor);
};

// zad dom utwórz formularz z loginem (text), hasłem (password) i kolorem (hexa text), Przypisz dane do tablicy jednowymiarowej. Wypisz dane w bloku na stronie w kolorze jaki podał użytwkonik. Pobierz dane z tablicy.













