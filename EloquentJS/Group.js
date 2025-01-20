/*
Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods.
Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member),
 delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether
 its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

Give the class a static from method that takes an iterable object as its argument and creates a group that contains all the values produced by iterating over it.
 */

const GroupIterator = require("./GroupIterator");

class Group {
    constructor() {
        this.group = [];
    }


    /**
     * adds a value to the group (but only if it isn’t already a member)
     * if value to be added is already a member, returns false.
     * @param newElement
     */
    add(newElement) {
        for (let element of this.group) {
            if (newElement === element) {
                return false;
            }
        }
        this.group.push(newElement);
    }

    /**
     * removes an element from the group if it is a member. Else return false
     * @param element to be removed
     */
    delete(elementToBeRemoved) {
        let index = 0;
        for (let element of this.group) {
            if (element === elementToBeRemoved) {
                return this.group.splice(index, 1);
            }
            index++;
        }
        return false;
    }

    /**
     * has returns a Boolean value indicating whether
     *  its argument is a member of the group
     * @param searchedElement element to be searched from the group
     * @returns {boolean} true if searchedElement is in the group, false if not
     */
    has(searchedElement) {

        for (let element of this.group) {
            if (element === searchedElement) {
                return true;
            }
        }

        return false;
    }

    //Give the class a static from method that takes an iterable object as its argument
    // and creates a group that contains all the values produced by iterating over it.
    static from(iterable) {
        let group = new Group();
        for (let element of iterable) {
            group.add(element);
        }
        return group;
}

    [Symbol.iterator] () {
        const groupIterator = new GroupIterator(this);
        return groupIterator;

    }

}


module.exports = Group;


