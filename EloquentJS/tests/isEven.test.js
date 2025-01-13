const isEven = require('../isEven')

test('isEven should return true for 0',  ()=> {
    expect(isEven(0)).toBe(true);
})

test('isEven should return false for 1',  ()=> {
    expect(isEven(1)).toBe(false);
})

test('isEven should return true for 2',  ()=> {
    expect(isEven(2)).toBe(true);
})

test('isEven should return false for 3',  ()=> {
    expect(isEven(3)).toBe(false);
})

test('isEven should return true for 400',  ()=> {
    expect(isEven(400)).toBe(true);
})

test('isEven should return false for -1',  ()=> {
    expect(isEven(-1)).toBe(false);
})