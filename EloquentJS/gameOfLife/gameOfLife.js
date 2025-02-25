document.onload = function () {

// luodaan 3x3 grid olioita
    import Creature from './Creature.js';

    let gridrows = 3;

    let creatureArray = [];

    for (let i = 0; i < gridrows; i++) {
        creatureArray[i] = [];
        for (let j = 0; j < gridrows; j++) {
            creatureArray[i].push(new Creature(Math.floor(Math.random() * 2)));
            //Creature (Math.floor(Math.random() * 2));
        }
    }
}
console.log(creatureArray);

// populoidaan sivu olioilla
