/**
 * Counts the number of given characters in the given string
 * @param string to be counted from
 * @param char to be counted
 */
function countChar(string, char) {
    count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}

module.exports = countChar;