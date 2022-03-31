//Value Types
var myName = "Nuwan";
var age = 40;
var isMigrate = true;
var family = [1, 2, 3];
//Reference Types
var names = ["Nuwan", "Dasuni", "Mevan"];
var ages = [40, 36, 5];
var info = [
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
var backgroundColor = Colors.Red;
