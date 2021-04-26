class Alive{

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    action() {
        return `Hi ${this.name}. You are ${this.age}`
    }
}

class Marry{

    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

Array.prototype.changeName = function (){
    return `changed ${this.name} `
};

let humanMale = new Alive('Jhon', 20)
let humanFemale = new Alive('Marry', 21)

console.log(humanMale.action.call(humanFemale))

