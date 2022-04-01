//Value Types
let myName: string = "Nuwan";
let age: number = 40;
let isMigrate: boolean = true;
let family: any = [1, 2, 3];

//Reference Types

let names: string[] = ["Nuwan", "Dasuni", "Mevan"];
let ages: number[] = [40, 36, 5];
let info: any[] = [
  { name: "Nuwan", age: 40 },
  { name: "Dasuni", age: 36 },
  { name: "Mevan", age: 5 },
];

//Type Assertion

let message;
message = "I am TypeScript and I am Lucky :)";
let endsWithC = (<string>message).endsWith("c");

// Tuple

let employee: [number, string, boolean];
employee = [1, "Nuwan", true];

let employees: [number, string][] = [
  [1, "Nuwan"],
  [2, "Dasuni"],
  [3, "Mevan"],
];

//Union: Allow us to declare a varible which have more than one valaue

let pid: number | string;

pid = 100;
pid = "123Z";

//Special Types: enums

enum Colors {
  Red = 1,
  Green = 2,
  Blue = 3,
}

let backgroundColor = Colors.Red;

// Objects
/* 
const person: {
  id: number;
  name: string;
} = {
  id: 100,
  name: "Nuwan",
};
 */

type User = {
  id: number;
  name: string;
};

const person: User = {
  id: 100,
  name: "Nuwan",
};

// Functions
const add = (a: number, b: number): number => a + b;

//Interface

interface MathFunc {
  (a: number, b: number): number;
}

const addNew: MathFunc = (a, b) => a + b;
const sub: MathFunc = (a, b) => a - b;

//Classes

class Person {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  get personId(): number {
    return this.id;
  }

  get personName(): string {
    return this.name;
  }
}

const p1 = new Person(100, "Nuwan");
console.log(p1.personId, p1.personName);
const p2 = new Person(200, "Dasuni");

// Classes and interface

type Position = {
  x: number;
  y: number;
};

interface IShape {
  color: string;
  position: Position;
  draw(): string;
}

class Shape implements IShape {
  color: string;
  position: Position;

  constructor(color: string, position: Position) {
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
  radius: number;
  constructor(color: string, position: Position, radius: number) {
    super(color, position);
    this.radius = radius;
  }

  //Overriding
  draw(): string {
    return `Draw ${this.color} circle at the position of ${this.position.x},${this.position.y} of the radius of ${this.radius}`;
  }
}

const circle = new Circle("green", { x: 3, y: 6 }, 10);
console.log(circle.draw());

// Generics
