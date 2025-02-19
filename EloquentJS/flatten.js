/**
 * takes an array of arrays and flattens it to a single array
 * with all the elements of the original arrays
 * @param arrays
 */
function flatten(arrays) {

    if (arrays.length === 0) return [];

    return  arrays.reduce((previous, next) => {
        return previous.concat(next);
    });


}

module.exports = flatten;