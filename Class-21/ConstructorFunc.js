let HPLaptop = {
    name:'HP',
    ram:'8',
    price:'40000',
    storage:'512',
    run: function run(){

    }
}

let DellLaptop = {
    name:'Dell',
    ram:'16',
    price:'60000',
    storage:'1024'
}

let AppleLaptop = {
    name:'Apple',
    ram:'16',
    price:'160000',
    storage:'1024'
}

function createLaptop(_name, _ram, _price, _storage) {
    let laptop = {}

    laptop.name = _name
    laptop.ram = _ram
    laptop.price = _price
    laptop.storage = _storage

    return laptop
}

let lenovoLaptop = createLaptop('lenovo', '8', '50000', '1024')
// console.log(lenovoLaptop)

// constructor function
function Laptop(_name, _ram, _price, _storage) {
    this.name = _name
    this.ram = _ram
    this.price = _price
    this.storage = _storage
}

let acerLaptop = new Laptop('acer', '8', '50000', '1024')
console.log(acerLaptop)