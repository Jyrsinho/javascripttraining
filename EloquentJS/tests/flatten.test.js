const flatten = require("../flatten");




test("flatten should return an empty array when given an empty array", () => {
        let testArray = [];
        expect(flatten(testArray)).toStrictEqual([]);
    }
)

test ('flatten should flatten two arrays into one', () => {
    let testArray = [[1,2,3], [4]];
    expect(flatten(testArray)).toStrictEqual([1,2,3,4]);
})

test ('flatten should flatten three arrays into one', () => {
    let testArray = [[1,2,3], [4], [5,6,7]] ;
    expect(flatten(testArray)).toStrictEqual([1,2,3,4,5,6,7]);
})

test ('flatten should return same array when given onedimensional array', () => {
    let testArray = [[1,2,3]];
    expect(flatten(testArray)).toStrictEqual([1,2,3]);
})

test ('flatten should flatten when given three arrays with one empty', () => {
    let testArray = [[1,2,3], [], [4,5,6]];
    expect(flatten(testArray)).toStrictEqual([1,2,3,4,5,6]);
})