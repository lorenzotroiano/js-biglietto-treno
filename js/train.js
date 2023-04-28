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
         
        //  per inserire colore bground
         document.body.style.backgroundColor="yellow";


        //  per inserire una img
         let img = document.createElement("img");
        img.src = "https://www.fondazioneveronesi.it/uploads/2020/10/26/dieta-dentizione-svezzamento.jpg";
        let src = document.getElementById("x");
         src.appendChild(img);
    }
     else if (userEta >= 65) {
         //  sconto del 40% per over 65
        numSconto = 40;
        document.body.style.backgroundColor="red";


        let img = document.createElement("img");
        img.src = "https://st.depositphotos.com/2309453/3076/i/600/depositphotos_30761235-stock-photo-portrait-of-a-smiling-attractive.jpg";
        let src = document.getElementById("x");
         src.appendChild(img);
     }
     else {
        // prezzo normale
        numSconto = 0;
        document.body.style.backgroundColor="violet";



        let img = document.createElement("img");
        img.src = "https://images2.gazzettaobjects.it/methode_image/2018/12/10/Calcio/Foto%20Calcio%20-%20Trattate/31.0.1012834460-0050-U2021820495617iD-U3101123990664zRD-620x349@Gazzetta-Web_articolo.jpg?v=201812101702";
        let src = document.getElementById("x");
         src.appendChild(img);

     }
    

    console.log(numSconto);
    

    prezzoSconto = prezzoTicket * numSconto / 100;
    prezzoFinale = prezzoTicket - prezzoSconto;
    
     console.log(prezzoSconto);
     console.log(prezzoFinale);
    


        // let img = document.createElement("img");
        // img.src = "https://www.fondazioneveronesi.it/uploads/2020/10/26/dieta-dentizione-svezzamento.jpg";
        // let src = document.getElementById("x");
        //  src.appendChild(img);






    messaggio = "Il biglietto ti viene a costare $";
    

   

    document.getElementById("train").innerHTML = messaggio + " " + prezzoFinale.toFixed(2);
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 








