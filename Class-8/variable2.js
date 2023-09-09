let obj = {
    name: "Sanchit",
    age: 25
}
console.log(obj.name)
console.log(obj['age'])
console.log(obj.age)

let array = [1,2,3,"some string",{},obj]
console.log(array[5].age)

let temp = array[5]
console.log(temp.age)
// array[5]['age'] -> temp['age']

console.log(typeof array)

