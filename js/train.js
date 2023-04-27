// generali
let messaggio, numSconto;

// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere
let numKm = parseInt(prompt("Quanti km vuoi percorrere?"));
console.log(numKm);


// e l’età del passeggero.
let userEta = parseInt(prompt("Quanti anni hai?"));
console.log(userEta);

// calcolare il prezzo totale del viaggio, secondo queste regole:
    // il prezzo del biglietto è definito in base ai km (0.21 € al km)
    let prezzoTicket = numKm * 0.21;
    console.log(prezzoTicket);
    
    
    if (userEta <= 17) {
         //  sconto del 20% per i minorenni
         numSconto = 20;
    }
     else if (userEta >= 65) {
         //  sconto del 40% per over 65
        numSconto = 40;
     }
     else {
        // prezzo normale
        numSconto = 0;
     }
    

    console.log(numSconto);
    

    prezzoSconto = prezzoTicket * numSconto / 100;
    prezzoFinale = prezzoTicket - prezzoSconto;
    
     console.log(prezzoSconto);
     console.log(prezzoFinale);
    
    messaggio = "Il biglietto ti viene a costare $";
    
    document.getElementById("train").innerHTML = messaggio + " " + prezzoFinale.toFixed(2);
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 








