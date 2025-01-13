/**
 * Retunrs the sum of all the elements in the array
 * @param arr that's elements will be summed
 */
function sum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

module.exports = sum;