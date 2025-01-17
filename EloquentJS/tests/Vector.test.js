const Vector = require('../Vector')




test('should construct a vector with x and y values', () => {
    let vector = new Vector(100,100);
    expect(vector.x).toBe(100);
    expect(vector.y).toBe(100);
    })

test("should construct vector with zero for x and y values when given no parameters", () => {
    let vector = new Vector();
    expect(vector.x).toBe(0);
    expect(vector.y).toBe(0);

})

