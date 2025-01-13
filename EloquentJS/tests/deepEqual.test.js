const deepEqual = require("../deepEqual");


test("deepEqual returns true for two empty arrays", () => {
    let testObject1 = {};
    let testObject2 = {};
    expect(deepEqual(testObject1, testObject2)).toBe(true);
})

test("deepEqual returns false for two objects with different values", () => {
    let testObject1 = {name: "Simo"};
    let testObject2 = {name: "Timo"};
    expect(deepEqual(testObject1, testObject2)).toBe(false);
})

test("deepEqual returns true for two arrays with same values", () => {
    let testObject1 = {name: "Simo", age: 12};
    let testObject2 = {name: "Simo", age: 12};
    expect(deepEqual(testObject1, testObject2)).toBe(true);
})