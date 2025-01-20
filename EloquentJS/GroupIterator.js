class GroupIterator {

    constructor(group) {
        this.group = group.group;
        this.index = 0;

    }

    next() {
        if ( this.group[this.index] == null) {
            return {done: true};
        }
        let value = this.group[this.index];
        this.index++;
        return {value, done: false};
    }
}

module.exports = GroupIterator;