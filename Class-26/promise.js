// Promise.all()

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolve')
    }, 3000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolve')
    }, 1000)
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 3 reject')
    }, 500)
})

// Promise.all([promise1, promise2])
//     .then(data => console.log(data[0], data[1]))
//     .catch(error => console.log(error))


// Promise.race()
Promise.race([promise1, promise2, promise3])
    .then(data => console.log(data))
    .catch(error => console.log(error))


// Promise.any()
Promise.any([promise1, promise2, promise3])
    .then(data => console.log(data))
    .catch(error => console.log(error))