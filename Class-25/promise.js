let promise = new Promise((resolve, reject) => {
    // some task which needs to be done by this promise
    const a = 5
    const b = 5

    if (a == b) {
        resolve('Value is equal')
    } else {
        reject('Value is not equal')
    }
})

// then method
promise.then(data => {
    // do something
    console.log("Promise is resolved. Final data is: ", data)
})

// catch method
promise.catch(error => {
    // handle error
    console.log("Promise is rejected due to this error: ", error)
})