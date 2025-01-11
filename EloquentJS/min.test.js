const min = require('./min')

test('min should return 2 for 2 and 4',  ()=> {
    expect(min(2,4)).toBe(2);
})

test('min should return 1 for 2 and 1',  ()=> {
    expect(min(2,1)).toBe(1);
})

test ('min should return 1 for 1 and 1', () => {
    expect(min(1,1)).toBe(1);
})