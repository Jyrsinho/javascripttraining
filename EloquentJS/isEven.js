

/**
 *  Zero is even. One is odd. For any other number N, its evenness is the same as N - 2.
 *  Function returns whether a given number is even using this rule.
 */
function isEven(number) {
    //basecase
    if (number ===0) return true;
    if (number ===1) return false;
    //recursive step

    if (number > 0) return isEven(number - 2);
    else if (number < 0) return isEven(number + 2);
}

module.exports = isEven;