const reverseInPlace = require("../reverseInPlace");

test("reverseInPlace should return an array", () => {
    let testArray = [];
    expect(reverseInPlace(testArray)).toStrictEqual([]);
})

test("reverseInPlace should return an array 1,2 when given array 2,1", () => {
    let testArray = [2,1];
    expect(reverseInPlace(testArray)).toStrictEqual([1,2]);
})

test("reverseInPlace should return an array 3,2,1 when given 1,2,3", () => {
    let testArray = [1,2,3]
    expect(reverseInPlace(testArray)).toStrictEqual([3,2,1]);
})

test("reverseInPlace should reverse array with 10 integers", () => {
    let testArray = [1,2,3,4,5,6,7,8,9,10];
    expect(reverseInPlace(testArray)).toStrictEqual([10,9,8,7,6,5,4,3,2,1]);
    }
)