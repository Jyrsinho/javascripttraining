const range = require('./range');
const isEven = require("./isEven");


test('range should return array containing zero when given zero and zero', () => {
    expect(range(0, 0)).toStrictEqual([0]);
})

test('range should return array containing zero and one when given zero and one', () => {
    expect(range(0, 1)).toStrictEqual([0,1]);
})

test("range should return array containing integers from 2 to seven", () => {
    expect(range(2, 7)).toStrictEqual([2,3,4,5,6,7]);
})

test("range should return array containing integers from -2 to 2", () => {
    expect(range(-2, 2)).toStrictEqual([-2,-1,0,1,2]);
})