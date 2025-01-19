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
    expect(testGroup.group).toEqual([2]);
})

test("should add multiple elements to group", () => {
    let testGroup = new Group();
    testGroup.add(2);
    testGroup.add(3);
    testGroup.add(4);
    expect(testGroup.group).toEqual([2,3,4]);
})