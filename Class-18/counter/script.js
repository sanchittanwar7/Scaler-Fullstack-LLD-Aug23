let counter = document.querySelector('#counter')

let incrementBtn = document.querySelector('#increment')
let decrementBtn = document.querySelector('#decrement')
let resetBtn = document.querySelector('#reset')

let incrementBy = document.querySelector('#incrementBy')

incrementBtn.addEventListener('click', () => {
    let currentValue = parseInt(counter.innerText)
    let incrementNumber = parseInt(incrementBy.value)

    let answer = currentValue + incrementNumber

    counter.innerText = answer
})

decrementBtn.addEventListener('click', () => {
    let currentValue = parseInt(counter.innerText)
    let incrementNumber = parseInt(incrementBy.value)

    let answer = currentValue - incrementNumber

    if (answer < 0) {
        answer = 0
    }

    counter.innerText = answer
})

resetBtn.addEventListener('click', () => {
    counter.innerText = 0
})
