const Vector = require('../Vector')




test('should construct a vector with x and y values', () => {
    let vector = new Vector(100,100);
    expect(vector.x).toBe(100);
    expect(vector.y).toBe(100);
    })


