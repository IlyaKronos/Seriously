let Seriously = require('./lib/seriously')

let runner = new Seriously(2000)

runner.add(async () => {
    console.log('Hello!')
})

runner.add(async () => {
    console.log('You will see this message after 2 seconds')
})

let x = 10
setTimeout(() => {
    runner.add(async () => {
        console.log('And you will see this message after ' + x.toString() + ' seconds')
    })
}, x * 1000)