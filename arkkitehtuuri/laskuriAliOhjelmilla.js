const prompt = require('prompt-sync')();

function paaOhjelma() {
    let vastaukset = kysySyote();
    console.log(vastaukset);

    let virhe = validoi(vastaukset);

    if (virhe === "") {
        tulos = valitseLaskuToimitus(vastaukset);
        console.log(tulos);
    }
    else
    console.log(virhe);

}

function kysySyote() {
    const vastaukset = {};

    vastaukset.luku1 = prompt("Anna luku1 > ");
    vastaukset.luku2 = prompt("Anna luku2 > ");
    vastaukset.laskutoimitus = prompt("Anna laskuToimitus > ");

    return vastaukset;
}




paaOhjelma();

