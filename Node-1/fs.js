const fs = require('fs')

// Read a file
const data = fs.readFileSync('f1.txt', 'utf-8')
// const data = fs.readFileSync('f4.txt', 'utf-8')
console.log(data)

// Write in a file
const content = 'Content which i want to write in file 2'
fs.writeFileSync('f2.txt', content, 'utf-8') // overrides existing text in the file
fs.writeFileSync('f3.txt', content, 'utf-8') // creates a new file if the file is not present

// Append in a file
const moreContent = 'I want this content to be appended. And not overidden'
fs.appendFileSync('f2.txt', moreContent, 'utf-8')

// Rename a file
fs.renameSync('f3.txt', 'f4.txt')

// Check if a file exists or not
const doesExist = fs.existsSync('f3.txt')
console.log(doesExist)

// Working with Directories

// Create a directory
// fs.mkdirSync('dir1')
// fs.mkdirSync('dir1/dir2', { recursive: true });


// Remove a directory
// fs.rmdirSync('dir1')

