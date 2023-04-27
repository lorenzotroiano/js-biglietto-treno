// generali
let messaggio, numSconto1, numSconto2, prezzoSconto1, prezzoSconto2, nDecimali1, nDecimali2;

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
        numSconto1 = prezzoTicket * 20 / 100;
        prezzoSconto1 = prezzoTicket - numSconto1;
        nDecimali1 = prezzoSconto1.toFixed(2);
    }
     else if (userEta >= 65) {
        numSconto2 = prezzoTicket * 40 / 100;
        prezzoSconto2 = prezzoTicket - numSconto2;
        nDecimali2 = prezzoSconto2.toFixed(2);
     }
    //  sconto del 20% per i minorenni
    //  sconto del 40% per over 65



    console.log(numSconto1);
    console.log(numSconto2);
    console.log(prezzoSconto1);
    console.log(prezzoSconto2);

    console.log(nDecimali1);

    console.log(nDecimali2);
     
    //  nDecimali1 = prezzoSconto1.toFixed(2);
    //  console.log(nDecimali1);

    //  nDecimali2 = prezzoSconto2.toFixed(2);
    //  console.log(nDecimali2);

    
    document.getElementById("train").innerHTML = "ciaoooo";
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 








