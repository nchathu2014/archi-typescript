"use strict";
//Value Types
let myName = "Nuwan";
let age = 40;
let isMigrate = true;
let family = [1, 2, 3];
//Reference Types
let names = ["Nuwan", "Dasuni", "Mevan"];
let ages = [40, 36, 5];
let info = [
    { name: "Nuwan", age: 40 },
    { name: "Dasuni", age: 36 },
    { name: "Mevan", age: 5 },
];
//Type Assertion
let message;
message = "I am TypeScript and I am Lucky :)";
let endsWithC = message.endsWith("c");
// Tuple
let employee;
employee = [1, "Nuwan", true];
let employees = [
    [1, "Nuwan"],
    [2, "Dasuni"],
    [3, "Mevan"],
];
//Union: Allow us to declare a varible which have more than one valaue
let pid;
pid = 100;
pid = "123Z";
//Special Types: enums
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
let backgroundColor = Colors.Red;
const person = {
    id: 100,
    name: "Nuwan",
};
// Functions
const add = (a, b) => a + b;
const addNew = (a, b) => a + b;
const sub = (a, b) => a - b;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    get personId() {
        return this.id;
    }
    get personName() {
        return this.name;
    }
}
const p1 = new Person(100, "Nuwan");
console.log(p1.personId, p1.personName);
const p2 = new Person(200, "Dasuni");
class Shape {
    constructor(color, position) {
        this.color = color;
        this.position = position;
    }
    draw() {
        return `Draw ${this.color} circle at the position of ${this.position.x},${this.position.y}`;
    }
}
const shape = new Shape("red", { x: 100, y: 900 });
console.log(shape.draw());
// Inheritance
class Circle extends Shape {
    constructor(color, position, radius) {
        super(color, position);
        this.radius = radius;
    }
    draw() {
        return `Draw ${this.color} circle at the position of ${this.position.x},${this.position.y} of the radius of ${this.radius}`;
    }
}
const circle = new Circle("green", { x: 3, y: 6 }, 10);
console.log(circle.draw());
