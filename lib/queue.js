class Queue {
    constructor() {
        this._queue = []

        this.index = -1
    }

    add(elem) {
        this._queue.push(elem)
    }

    next() {
        if (this._queue[this.index + 1]) {
            this.index++
        
            return this._queue[this.index]
        }

        return false
    }
}

module.exports = Queue