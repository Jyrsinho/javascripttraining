/**
 * Retunrs an array containing all the numbers from start up
 * to and including end
 * @param start first number in the array to be returned
 * @param end last number in the array to be returned
 * @return an array containing all the numbers from start up to and including end
 */
function range(start, end) {
    let array = [];

    for (let i = start; i <= end; i++) {
        array.push(i);
    }

    return array;
}

module.exports = range;