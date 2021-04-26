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

    constructor(name, age, color= '') {
        this.name = name
        this.age = age
        this.color = color
    }
}

Alive.prototype.changeName = function (){
    return `changed ${this.name} `
};

let humanMale = new Alive('Jhon', 20)
let humanFemale = new Marry('Marry', 21, 'white')
console.log(humanFemale)
