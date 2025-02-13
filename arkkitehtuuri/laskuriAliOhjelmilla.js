const prompt = require('prompt-sync')();

function paaOhjelma() {
    let validiVastaus = false;

    while (validiVastaus === false) {
        let luku1 = kysySyote("Anna luku 1 >");
        validiVastaus = tarkistaSyote(luku1);
    }
    let validiVastaus2 = false;
    while (validiVastaus2 === false) {
        let luku2 = kysySyote("Anna luku 2 >");
        validiVastaus2 = tarkistaSyote(luku2);
    }
    let laskutoimitus = kysySyote("Anna laskutoimitus >");

    let tulos = suoritaLaskutoimitus(laskutoimitus, luku1, luku2);
}


function tarkistaSyote(syote) {
    if (Number.isNaN(syote)) {
        return false;
    }
    return true;

}


function kysySyote(viesti) {
    vastaus = prompt(viesti);

    return vastaus;
}




paaOhjelma();

