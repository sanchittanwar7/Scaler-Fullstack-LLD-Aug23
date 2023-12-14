const path = require('path')
const fs = require('fs')

// const sourcePath = '/Users/stanwar/Desktop/Sanchit/Work/LLD/Node-1/f1.txt'
// const complicatedPath = '/Users/stanwar/Desktop/Sanchit/Work/LLD/Node-1/../lazy/public/./index.html'

// // join different paths
// const p = path.join('LLD', 'Node-1', 'dir1', 'dir2')
// console.log(p)

// const baseName = path.basename(sourcePath)
// console.log(baseName) // actual name of the file

// const directoryName = path.dirname(sourcePath)
// console.log(directoryName) // absolute path of the directory

// const extName = path.extname(sourcePath)
// console.log(extName)

// const parsedPath = path.parse(sourcePath)
// console.log(parsedPath)

// const normalisedPath = path.normalize(complicatedPath)
// console.log(normalisedPath)

// const absolutePath1 = '/Users/stanwar/Desktop/Sanchit/Work/LLD/Node-1'
// const absolutePath2 = '/Users/stanwar/Desktop/Sanchit/Work/LLD/Node-1/dir1/dir2'

// const relativePath = path.relative(absolutePath1, absolutePath2)
// console.log(relativePath)

const from = '/Users/stanwar/Desktop/Sanchit/Work/LLD/Node-1/dir1/file1.txt'
const to = '/Users/stanwar/Desktop/Sanchit/Work/LLD/Node-1/dir2/file1.txt'

const readStream = fs.createReadStream(from)

const writeStream = fs.createWriteStream(to)

// console.log(readStream)
// console.log(writeStream)

readStream.pipe(writeStream)

readStream.on('error', err => {
    console.log("Error while reading: ", err)
})

writeStream.on('error', err => {
    console.log("Error while writing: ", err)
})