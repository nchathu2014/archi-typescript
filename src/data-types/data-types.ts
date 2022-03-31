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

//Special Types

enum Colors {
  Red = 1,
  Green = 2,
  Blue = 3,
}

let backgroundColor = Colors.Red;

//Type Assertion

let message;
message = "I am TypeScript and I am Lucky :)";
let endsWithC = (<string>message).endsWith("c");
