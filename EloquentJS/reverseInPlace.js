/**
 * Reverses the given array without creating a new array
 * @param originalArray array to be reversed
 * @returns given array with it's elements in reversed order.
 */
function reverseInPlace(originalArray) {

    i = 0;
    j = originalArray.length - 1;
    let temp;

    while (i< j) {
        temp = originalArray[i];
        originalArray[i] = originalArray[j];
        originalArray[j] = temp;

        i++;
        j--;

    }

    return originalArray;
}

module.exports = reverseInPlace;