# TypeScript Topics Help to Work with Angular

tsc 5-property.ts --target es5 && node 5-property.js

## 1- Variable Declaration

## 2- Types

## 3- Type Assertions (Explictlty tels to the TS about the type)

```
let message; // any
message = 'nuwan';

let endsWithC = (<string>message).endsWith('c');  // common interpretation
let alternativeWay = (message as string).endsWith('c')

```

## 4- Arrow Functions

## 5- Interfaces (less cohesion)

Interfaces are purely for decalaration NOT for implementation

```

function sum(point:{x:number,y:number}) => x + y ; // in-line annotation

Inline annotation is bit unclear so, we can use interface instead

interface IPoint {
    x: number,
    y: number
}

function sum(point:IPoint) => ...


```

## 6- Classes (Cohesion concept, highly related things have to be in as a one unit)

## 7- Access modifiers (private, protected, public)

## 8- Access Modifiers in Construtor

## 9- Property (Getter and Setter)

## 10-
