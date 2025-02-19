/*
It is a box with a lock. There is an array in the box, but you can get at it only when the box is unlocked.

Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the function,
and then ensures that the box is locked again before returning, regardless of whether the argument function returned
normally or threw an exception.
 */

const box = new class {
    locked = true;
    #content = [];

    unlock() { this.locked = false; }
    lock() { this.locked = true;  }
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this.#content;
    }
};

function withBoxUnlocked(body) {
    if (box.locked) {
        box.unlock();
    }
    try {
        body();
    }
    catch (e) {
        if (e.message.includes("Locked")) {
            console.log(e);
        }
        if (e.message.includes("Pirates")) {
            console.log(e.name + ": " + e.message);
        }
    }
    finally {
        if (!box.locked) {
            box.lock();
        }
    }

}

withBoxUnlocked(() => {
    console.log("lisätään kultapala");
    box.content.push("gold piece");
    console.log(box.content);
});

try {
    withBoxUnlocked(() => {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}



// → true
console.log(box.locked);


