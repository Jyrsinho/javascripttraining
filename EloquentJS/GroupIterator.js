class GroupIterator {

    constructor(group) {
        this.group = group.group;
        this.index = 0;
        this.value = group[this.index];

    }

    next() {
        if ( this.group[this.index + 1] == null) {
            return {done: true};
        }
        let value = this.value + 1;
        this.index++;
        return {value, done: false};
    }
}

module.exports = GroupIterator;