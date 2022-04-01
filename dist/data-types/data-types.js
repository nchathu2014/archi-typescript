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
//Special Types
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
let backgroundColor = Colors.Red;
//Type Assertion
let message;
message = "I am TypeScript and I am Lucky :)";
let endsWithC = message.endsWith("c");
