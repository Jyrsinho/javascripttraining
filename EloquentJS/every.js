/**
 * tests if an array's every element passes the given test
 * @param array to be tested
 * @param test function that does the testing
 * @returns {boolean} true if all the elements pass the test, false if not
 */
function every (array, test) {
    for (let i = 0; i < array.length; i++) {

        if (!test(array[i])) {
            return false;
        }
    }
    return true;
}

/**
 * Same purpose as function every. this one uses built in some method
 * @param array
 * @param test
 */
function everysome(array, test) {
    if (!array.some(test)) {
        return false;
    }
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log();

console.log(everysome([1, 3, 5], n => n < 10));
// → true
console.log(everysome([2, 4, 16], n => n < 10));
// → false
console.log(everysome([], n => n < 10));
// → true