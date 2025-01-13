/**
 * Returns an array containing numbers from start up
 * to and including end with given steps.
 * @param start first number in the array to be returned
 * @param end last number in the array to be returned
 * @param step difference between two elements in array
 * @return an array containing all the numbers from start up to and including end
 */
function range(start, end, step) {
    let array = [];
    let ascending = true;

    if (step === undefined) {
        step = 1;
    }

    if (end < start) {
        ascending = false;
    }

    for (let i = start; i <= end && ascending || i>= end && !ascending;) {
        array.push(i);
        if (ascending) {
            i += step;
        } else {
            i -= step;
        }
    }

    return array;
}

module.exports = range;