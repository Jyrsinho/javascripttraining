import promptSync from 'prompt-sync';
const prompt = promptSync();


function paaOhjelma() {
    let jatketaan = true;
    while(jatketaan) {

        let luvut = [];
        let laskutoimitus;

        for (let i = 1; i < 3; i++) {
            luvut.push(kysyLuku(i));
        }

        laskutoimitus = kysyLaskutoimitus();
        let tulos = valitseLaskutoimitus(laskutoimitus, luvut);

        console.log("Vastaus on: ")
        console.log(tulos)

        let jatketaanko = prompt("Jatketaanko. Syötä Y jos jatketaan, muuten lopettaan >");
        jatketaan = (jatketaanko.toUpperCase() === "y".toUpperCase());
    }
}


function kysyLuku(i) {
    while (true) {
         let luku = prompt("Anna luku " +i + " >");
         if (tarkistaSyote(luku)) {
             return Number(luku);
         }
        console.log("Virheellinen syöte. Anna numero.");
    }
}

function tarkistaSyote(luku) {
    return !isNaN(Number(luku));
}

function kysyLaskutoimitus() {
    while (true) {
        let laskutoimitus = prompt("Anna laskutoimitus > ")
        if (laskutoimitus === "+" || laskutoimitus === "-" || laskutoimitus === "*" || laskutoimitus === "/") {
            return laskutoimitus;
        }
        console.log("Virheellinen laskutoimitus. Anna +,-,* tai / -merkki.")
    }
}

let yhteenlasku = (luvut) => {
    return luvut[0] + luvut[1];
}

let vahennyslasku = (luvut) => {
    return luvut[0] - luvut[1];

}

let kertolasku = (luvut) => {
    return luvut[0] * luvut[1];
}

let jakolasku = (luvut) => {
    if (luvut[1] ===0) {
        return("nollalla ei voi jakaa")
    }
    return luvut[0] / luvut[1];
}


function valitseLaskutoimitus(laskutoimitus, luvut) {
    switch (laskutoimitus) {
        case "+": return yhteenlasku(luvut);
        case "-": return vahennyslasku(luvut);
        case "*": return kertolasku(luvut);
        case "/": return jakolasku(luvut);
    }
}




paaOhjelma();

