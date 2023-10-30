let fs = require("fs")

console.log("Start")

let promise_file1 = fs.promises.readFile('./file.txt', 'utf8')

const readCallback1 = data => {
    console.log("Promise is resolved and the result is: ", data)
    let promise_file2 = fs.promises.readFile('./file2.txt', 'utf8')
    return promise_file2
}

const errorCallback1 = error => {
    console.log(error)
    let promise_file2 = fs.promises.readFile('./file2.txt', 'utf8')
    return promise_file2
}

let readCallback2 = data => {
    console.log("Promise is resolved and the result is: ", data)
    let promise_file3 = fs.promises.readFile('./file3.txt', 'utf8')
    return promise_file3
}

let readCallback3 = data => {
    console.log("Promise is resolved and the result is: ", data)
}

promise_file1.then(readCallback1).catch(errorCallback1).then(readCallback2).then(readCallback3)

console.log("finish")