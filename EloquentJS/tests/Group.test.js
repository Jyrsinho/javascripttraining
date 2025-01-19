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