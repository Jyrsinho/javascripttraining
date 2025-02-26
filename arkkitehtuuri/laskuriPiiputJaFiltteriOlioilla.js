// Eli me tarvitaan olioita, jotka on kaikki filter-luokan ilmentymiä

// sitten meillä pitää olla pumppu, joka voi ottaa vastaan filttereitä ja ajaa ne yksi kerrallaan

import promptSync from 'prompt-sync';
const prompt = promptSync();


class Pump {

    constructor() {
        this.pipeline = [];
    }

    addFilter(filter) {
        this.pipeline.push(filter);
    }

    runPipeline(input) {
        for (let filter of this.pipeline) {
            input = filter.run(input);
        }
        return input;
    }
}


class Filter{
    constructor(filter) {
        this.filter = filter;
    }

    run(input) {
        return this.filter(input);
    }
}

function kysyNumerot() {
    let ekaNumero = Number(prompt('Numero1 >'));
    let tokaNumero = Number(prompt('Numero2 >'));
    let laskutoimitus = prompt('Laskutoimitus >');

    return [ekaNumero, tokaNumero, laskutoimitus];
}


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


let pump = new Pump();

pump.addFilter( new Filter(validoi));
pump.addFilter( new Filter(valitselasku));

console.log(pump.runPipeline(kysyNumerot()));



