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

test("should add two vectors together", () => {
    let vector1 = new Vector(100,100);
    let vector2 = new Vector(50,50);
    let vector3 = vector1.plus(vector2);
    expect(vector3.x).toBe(150);
    expect(vector3.y).toBe(150);
})

test("should minus two vectors together", () => {
    let vector1 = new Vector(100,100);
    let vector2 = new Vector(50,50);
    let vector3 = vector1.minus(vector2);
    expect(vector3.x).toBe(50);
    expect(vector3.y).toBe(50);
} )

test("should have a getter for length", () => {
    let vector = new Vector(0,0);
    expect(vector.length).toBe(0);
})

test('should calculate the length of a vector', () => {
    let vector = new Vector(100,100);
    expect(vector.length).toBeCloseTo(141.42,2);
})

