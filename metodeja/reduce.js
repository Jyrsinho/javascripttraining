
const array = [1, 2, 3];

const sumofArray = array.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sumofArray);

const reducedFromTen = array.reduce((accumulator, current) => accumulator - current, 10);

console.log(reducedFromTen);



function add3 (initialValue) {
    return initialValue + 3;
}

function reduce2 (initialValue) {
    return initialValue - 2;
}

function createPipeline(...functions) {
    return (input) => {
        return functions.reduce((data, fn) => fn(data), input);
    };
}

let pipeline = createPipeline(add3, reduce2);
console.log(pipeline(10));