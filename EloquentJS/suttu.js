
console.log("A1".trim().toLowerCase())
console.log("a2".trim().toLowerCase())

console.log("A1".trim().toLowerCase()< "a2".trim().toLowerCase())

function greetAtLeastOnce(name, times) {
    do {
        console.log(`hello ${name}`);
        times--;
    }while (times > 0);
}

greetAtLeastOnce('Jozia', 5);