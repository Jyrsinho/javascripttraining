const reverse = require("../reverse");

test("reverse should return an array", () => {
    let testArray = [0];
    expect(reverse(testArray)).toStrictEqual([0]);
})

test("reverse should reverse an array 1,2,3 to 3,2,1", () => {
    let testArray = [1,2,3];
    expect(reverse(testArray)).toStrictEqual([3,2,1]);
})

test("reverse should reverse an array 2,2,3 to 3,2,2", () => {
    let testArray = [2,2,3];
    expect(reverse(testArray)).toStrictEqual([3,2,2]);
})