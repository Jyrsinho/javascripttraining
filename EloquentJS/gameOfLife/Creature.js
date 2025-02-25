export default class Creature {

    constructor(randomNumber) {
        if (randomNumber === 0) {
            this.alive = false;
        }
        else {
            this.alive = true;
        }
    }

    die() {
        this.alive = false;
    }

    live() {
        this.alive = true;
    }

    get isAlive() {
        return this.alive();
    }


}


