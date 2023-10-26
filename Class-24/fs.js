const fs = require('fs')

// Sync
// console.log("Starting")

// const file1 = fs.readFileSync('/Users/stanwar/Desktop/Sanchit/Work/LLD/Class-24/file1.txt')
// console.log("Data of file 1: ", file1)

// const file2 = fs.readFileSync('/Users/stanwar/Desktop/Sanchit/Work/LLD/Class-24/file2.txt')
// console.log("Data of file 2: ", file2)

// console.log("Finished")

// Async
console.log("Starting")

fs.readFile('/Users/stanwar/Desktop/Sanchit/Work/LLD/Class-24/file1.txt', (err, result) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Result 1: ", result)
        fs.readFile('/Users/stanwar/Desktop/Sanchit/Work/LLD/Class-24/file2.txt', (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Result 2: ", result)
            }
        })
    }
})

// fs.readFile('/Users/stanwar/Desktop/Sanchit/Work/LLD/Class-24/file2.txt', (err, result) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Result 2: ", result)
//     }
// })

console.log("Finished")