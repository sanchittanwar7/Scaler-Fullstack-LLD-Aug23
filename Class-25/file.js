let fs = require("fs")

console.log("Start")

let promise_file1 = fs.promises.readFile('./file1.txt', 'utf8')
let promise_file2 = fs.promises.readFile('./file2.txt', 'utf8')
let promise_file3 = fs.promises.readFile('./file3.txt', 'utf8')

console.log("Finish")

const readCallback = data => {
    console.log("Promise is resolved. And the data is: ", data)
}

const errorCallback = error => {
    console.log("Promise is rejected with this error: ", error)
}

const finallyCallback = () => {
    console.log("Promise is executed")
}

promise_file1
    .then(readCallback)
    .catch(errorCallback)
    .finally(finallyCallback)

promise_file2.then(readCallback)

promise_file2.catch(errorCallback)

promise_file2.finally(finallyCallback)

promise_file3.then(readCallback)

promise_file3.catch(errorCallback)

promise_file3.finally(finallyCallback)
