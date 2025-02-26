// Eli me tarvitaan olioita, jotka on kaikki filter-luokan ilmentymiä

// sitten meillä pitää olla pumppu, joka voi ottaa vastaan filttereitä ja ajaa ne yksi kerrallaan


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

let pump = new Pump();


let sumFilter = new Filter((input) => {
   let sum = 0;
    for (let i of input) {
       sum += i;
   }
    return sum;
});

function timesTwo(input) {
    return input * 2;
}

let timesTwoFilter = new Filter(timesTwo);

pump.addFilter(sumFilter);
pump.addFilter(timesTwoFilter);



console.log(pump.runPipeline([1,2,3]));
