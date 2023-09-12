let groot = {
    name: "groot",
    age: 500,
    address: {
        houseNumber: 123,
        spaceshipName: "guardians",
        planet: {
            name: "titan",
            number: 123
        }
    },
    sayHi: function() {
        console.log("Im groot")
    }
}

// console.log(groot.sayHi())

console.log(groot.address.planet.name)

groot.address.planet.number = 456

console.log(groot)

delete groot.age

console.log(groot)

groot.age = 500;
console.log(groot)