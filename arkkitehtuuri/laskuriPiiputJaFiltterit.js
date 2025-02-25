/*
Piiput ja filtterit -arkkitehtuurin invariantit
- filtterit eivät ole tietoisia toisistaan.
- Jokaisella filtterillä on vain yksi tehtävä - separation of concerns
- Jokainen filtteri on itsenäinen moduuli. Helppo testata kun kaikki filtterit voidaan testata erikseen.
- Filtterit ovat tilattomia. Ne eivät tallenna dataa prosessinsa vaiheiden välissä
- Jokainen filtteri huolehtii omista virheistään
- asynkroninen tietoa pitäisi voida käsitellä sitä mukaa kun sitä piipusta tulee

Ongelmia:
- Datan siirto filttereiden välillä voi hidastaa ohjelmaa
- latenssi voi kasvaa
-
 */

import promptSync from 'prompt-sync';
const prompt = promptSync();



function validoi (input) {
    if (isNaN(Number(input[0]))) {
    return false;
    } else {
        return input;
    }
}


function valitselasku (input) {
    if (input[2] === "+") {
        return yhteenlaske (input[0], input[1]);
    }
}


function yhteenlaske (a,b) {
    return a + b;
}



/**
 * Funktio ottaa vastaan x määrän parametreja ja luo niista putken, jota pitkin data prosessoidaan
 * @param func x määrä funktioita
 */
const createPipeline = (...functions) => {
    for (let fn of functions) {
        return fn();
    }
}


/* Reduce -versio
const createPipeline = (...functions) => {
    return (input) => {
        return functions.reduce((data, fn) => fn(data), input);
    };
};

 */


const createPipeline = (...functions) => {
    return function(input) {
        // 'data' will hold the value as it moves through each function
        let data = input;

        // Loop through each function in the pipeline and apply it to 'data'
        for (let i = 0; i < functions.length; i++) {
            let currentFunction = functions[i]; // Get the current function
            data = currentFunction(data); // Pass the current 'data' to the function
            console.log(`Step ${i + 1}:`, data); // Log the output after each step
        }
        // Return the final processed data after all functions have been applied
        return data;
    };
};



let vastaus = [];

vastaus.push(prompt("Anna ensimmäinen luku > "));
vastaus.push(prompt("Anna toinen luku > "));
vastaus.push(prompt("Anna laskutoimitus > "));

let pipeline = createPipeline( validoi, valitselasku);

console.log(pipeline(vastaus));



