class Vector {

    constructor(x= 0, y= 0) {
        this.x = x;
        this.y = y;
    }

    /**
     * Adds a given vector to this vector
     * @param otherVector to be added
     * @returns {Vector} new vector holding added values of this
     * and a given vector
     */
    plus(otherVector) {
        let newVector = new Vector();
        newVector.x = this.x + otherVector.x;
        newVector.y = this.y + otherVector.y;
        return newVector;
    }

    /**
     * decreases a given vector from this vector
     * @param otherVector to be decreased
     * @returns {Vector} mew vector holding the result of decreasing operation
     */
    minus(otherVector) {
        let newVector = new Vector();
        newVector.x = this.x - otherVector.x;
        newVector.y = this.y - otherVector.y;
        return newVector;
    }
}
module.exports = Vector;
