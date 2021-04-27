class Alive{
    /**
     *
     * @param name
     * @param age
     */
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    /**
     *
     * @returns {string}
     */
    action() {
        return `Hi ${this.name}. You are ${this.age}`
    }
}

class Marry{

    /**
     *
     * @param name
     * @param age
     * @param color
     */
    constructor(name, age, color= '') {
        this.name = name
        this.age = age
        this._color = color;
    }



    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }
}

Alive.prototype.changeName = function (){
    return `changed ${this.name} `
};

let humanMale = new Alive('Jhon', 20)
let humanFemale = new Marry('Marry', 21, 'white')
let jobs = [3, 2, 5, 2]

jobs = jobs.map( value => value * 2)


export  {Marry}
