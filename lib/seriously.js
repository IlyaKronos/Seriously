let Queue = require('./queue')

class Seriously {
    constructor(rate) {
        this.queue = new Queue()
        this.rate = rate ? parseInt(rate) : false
        
        this.running = false
    }
    
    sleep(ms) {
        return new Promise(resolve => {
            setTimeout(() => { resolve() }, ms)
        })
    }

    async run() {
        if (this.running) {
            return
        } else {
            this.running = true
        }

        let next = this.queue.next()

        if (!next) {
            this.running = false

            return
        }

        try {
            await next()
        } catch (e) {}

        if (this.rate) {
            await this.sleep(this.rate)
        }

        this.running = false
        this.run()
    }

    add(func) {
        this.queue.add(func)

        if (this.running) { return }

        this.run()
    }
}

module.exports = Seriously