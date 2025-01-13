const sum = require("../sum.js");

test('array containing element zero should return zero', () => {
    let testArray = [0];
    expect(sum(testArray)).toBe(0);
})

test('given array containing 1 and 2 should return 3', () => {
    let testArray = [1,2];
    expect(sum(testArray)).toBe(3);
})