/**
 * Takes an array and returns it in reverse order
 * @param originalArray to be reversed
 * @returns given array in reverse order
 */
function reverse(originalArray) {
    let reversedArray = [];
    index = originalArray.length -1;

    for (const number of originalArray) {
        reversedArray[index] = number;
        index --;
    }

    return reversedArray;
}

module.exports = reverse;