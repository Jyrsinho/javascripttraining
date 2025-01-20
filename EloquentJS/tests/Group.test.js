const Group = require('../Group')




test('should construct an empty group', () => {
    let testGroup = new Group();
    expect(testGroup.group).toEqual([]);

})

test('should add element to group', () => {
    let testGroup = new Group();
    testGroup.add(2);
    expect(testGroup.group).toEqual([2]);
})

test("should not add element to group if same element is already in group", () => {
    let testGroup = new Group();
    testGroup.add(2);
    expect(testGroup.add(2)).toEqual(false);
    expect(testGroup.group).toStrictEqual([2]);
})

test("should add multiple elements to group", () => {
    let testGroup = new Group();
    testGroup.add(2);
    testGroup.add(3);
    testGroup.add(4);
    expect(testGroup.group).toStrictEqual([2,3,4]);
})

test('should remove element from group', () => {
    let testGroup = new Group();
    testGroup.add(2);
    testGroup.add(3);
    testGroup.add(4);
    testGroup.delete(3);
    expect(testGroup.group).toStrictEqual([2,4]);
})

test('should return false if element to be removed is not in the group', () => {
    let testGroup = new Group();
    testGroup.add(2);
    testGroup.add(3);
    testGroup.add(4);
    expect(testGroup.delete(5)).toBe(false);
})

test("should return true if element to be searched is in the group", () => {
    let testGroup = new Group();
    testGroup.add(2);
    testGroup.add(3);
    testGroup.add(4);
    expect(testGroup.has(3)).toBe(true);
})

test('should return false if element to be searched is not in the group', () => {
    let testGroup = new Group();
    testGroup.add(2);
    testGroup.add(3);
    expect(testGroup.has(4)).toBe(false);
})

test("static from method creates a group out of array", () => {
    let testArray = [1, 2, 3, 4, 5];
    let testGroup = Group.from(testArray);
    expect(testGroup.group).toEqual(testArray);

})

test("group is iterable", () => {
    let testGroup = new Group();
    testGroup.add(2);
    testGroup.add(3);
    testGroup.add(4);
    let goalArray = [];
    for (let element of testGroup) {
        goalArray.push(element);
    }
    expect(goalArray.length).toBe(3);

})