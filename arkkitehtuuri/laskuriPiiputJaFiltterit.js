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


/**
 * Tässä varmaan parasta heittää exception
 * @param input
 * @returns
 */
function validoi (input) {
    if (isNaN(input[0]) || isNaN(input[1])) {
        throw new Error('invalid input. Et syöttänyt numeroita');
    }
    if (!["+", "-", "*", "/"].includes(input[2])) {
        throw new Error("invalid input. Valitsemaasi laskutoimitusta ei ole olemassa");
    }

    return input;
}


function valitselasku (input) {
    if (input[2] === "+") {
        return yhteenlaske (input[0], input[1]);
    }
    if (input[2] === "-") {
        return vahennyslaske(input[0], input[1]);
    }
}


function yhteenlaske (a,b) {
    return a + b;
}

function vahennyslaske (a,b) {
    return a - b;
}




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

vastaus.push(Number(prompt("Anna ensimmäinen luku > ")));
vastaus.push(Number(prompt("Anna toinen luku > ")));
vastaus.push((prompt("Anna laskutoimitus > ")));

let pipeline = createPipeline( validoi, valitselasku);

try {
    console.log(pipeline(vastaus));
} catch (error) {
    console.log(error.message);
}



