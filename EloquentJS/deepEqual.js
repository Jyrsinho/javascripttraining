function deepEqual(a, b) {


    if (typeof a == "object" && typeof b == "object" && a != null && b != null) {
        let aKeys = Object.keys(a);
        let bKyes = Object.keys(b);
        let aValues = Object.values(a);
        let bValues = Object.values(b);
        if (aKeys.length === bKyes.length) {
            for (let i = 0; i < aKeys.length; i++) {
                if (aKeys[i] !== bKyes[i]) {
                    return false;
                }
                if (aValues[i] !== bValues[i]) {
                    return false;
                }
            }
        }
    }

    return true;

    }

module.exports = deepEqual;