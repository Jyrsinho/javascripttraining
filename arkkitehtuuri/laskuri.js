const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Laskettavat luvut
let luku1, luku2;

let laskutoimitus;

rl.question("Anna ensimmäinen luku > ", answer => {
    luku1 = parseFloat(answer);
        rl.question("Anna toinen luku > ", answer => {
            luku2 = parseFloat(answer);
            rl.question("Anna laskutoimitus > ", answer => {
                laskutoimitus = answer;

console.log("Lasken: " +luku1+ laskutoimitus+ luku2);

let tulos;
let virhe;

switch (laskutoimitus) {
    case "+":
        tulos = luku1 + luku2;
        virhe = "";
        break;
    case "-":
        tulos = luku1 - luku2;
        virhe = "";
        break;
        case "*":
            tulos = luku1 * luku2;
            virhe = "";
            break;
            case "/":
                tulos = luku1 / luku2;
                virhe = "";
                break;
    default:
            tulos = luku1 + luku2;
            virhe = "En tunnistanut laskutoimitusta,"

}


// Tulostetaan laskutoimituksen tulos tai virhe.
if (virhe==="") {
    console.log("Tulos on", tulos)
} else {
    console.log("Virhe:", virhe)
}
                rl.close();
            });
        });
});
