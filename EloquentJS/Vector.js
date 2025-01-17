
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Adds a given vector to this vector
     * @param vector to be added
     * @returns {Vector} new vector holding added values of this
     * and a given vector
     */
    plus(vector) {
        let newVector = new Vector();
        newVector.x = this.x - vector.x;
        newVector.y = this.y - vector.y;
        return newVector;
    }



}