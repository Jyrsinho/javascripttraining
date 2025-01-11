const countChar = require('./countChar')


test('countChar should count zero k chars in string auto',  ()=> {
    expect(countChar("auto",'k')).toBe(0);
})

test("countChar should return one for a in auto", () => {
    expect(countChar("auto", 'a')).toBe(1);
})