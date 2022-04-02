# ReactJS with TypeScript

## 1. Defining Component Type

### FC - Functional Component

```
import React, { FC } from "react";

const App: FC = () => {
  return <div className="App">I am App Component</div>;
};

export default App;
```

## 2. Define Props using an interface

```
// string, number and boolean data types
import from "react";

interface IProps {
  name: string;
  age: number;
  email?: string;
}

export const Person = (props: IProps) => {
  const { name, age, email } = props;
  return (
    <div>
      <div>
        {name}-{age}-{email}
      </div>
    </div>
  );
};

------------------------------------------------------------------
// Objects

import { FC } from "react";

interface IProps {
  name: {
    first:string,
    last:string
  }
}

export const Product: FC<IProps> = (props: IProps) => {
  return (
    <div>
      {props.first} {props.last}
    </div>
  );
};

-------------------------------------------------------------------
//Array Objects

const nameList = [
  { first: "Nuwan", last: "Chathuranga" },
  { first: "Dasuni", last: "Nadeera" },
  { first: "Mevan", last: "Gaurawa" },
];
  <PersonList list={nameList} />

interface IPersonList{
list:{
  first:string,
  last:string
}[]
}

```

### 3. Events

```
const handleOnChange = (event: ChangeEvent<HTMLInputElement>) =>
    setCountry(event.target.value);

```

### 4. enum

```
export enum Status {
  Good = "I am in Good",
  Better = "I am Better",
  Best = "I am the Best",
}

```

### 5. type

```
 type Name = "Nuwan" | "Chathuranga";
  const nameForTypes: Name = "Nuwan";
```
