const flatten = require("../flatten");


test("flatten should return an array", () => {
        let testArray = [];
        expect(flatten(testArray)).toStrictEqual([]);
    }
)