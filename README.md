# ReactJS with TypeScript

## 1. Defining Component Type

## FC - Functional Component

```
import React, { FC } from "react";

const App: FC = () => {
  return <div className="App">I am App Component</div>;
};

export default App;
```

## 2. Define Basic Props

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

## 3. Define Advanced Props

### Union

```
<StatusDemo status={"success"} />

import { FC } from "react";

interface IStatusDemo {
  status: "loading" | "success" | "error";
}

export const StatusDemo: FC<IStatusDemo> = ({ status }: IStatusDemo) => {
  let message: string | null = null;
  if (status === "loading") message = "Loading...";
  if (status === "success") message = "Successful :)";
  if (status === "error") message = "Error :(";
  return (
    <div>
      <p>MESSAGE: {message}</p>
    </div>
  );
};
```

### Children (String as a Children)

```
<ChildrenOneDemo>I am a Children</ChildrenOneDemo>

import { FC } from "react";

interface IChildrenOneDemo {
  children: string;
}
export const ChildrenOneDemo: FC<IChildrenOneDemo> = (
  props: IChildrenOneDemo
) => {
  return <div>{props.children}</div>;
```

### Children (React component as a Children)

```
<ChildrenTwoDemo>
  <ChildrenOneDemo>I am another Children</ChildrenOneDemo>
</ChildrenTwoDemo>

import { FC } from "react";

interface IChildrenTwoDemo {
  children: React.ReactNode;
}

export const ChildrenTwoDemo: FC<IChildrenTwoDemo> = (
  props: IChildrenTwoDemo
) => {
  return <div>{props.children}</div>;
};

```

## 3. Events

## onClick Event

```
import { FC, MouseEvent } from "react";

interface IButton {
  handleClick: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
}
export const Button: FC<IButton> = ({ handleClick }: IButton) => {
  return (
    <div>
      <button onClick={(event) => handleClick(event, 1)}>Click Me</button>
    </div>
  );
};
```

### onChange Event

```
import React, { FC, ChangeEvent } from "react";

interface IInputDemo {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputDemo: FC<IInputDemo> = (props: IInputDemo) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={props.value}
        onChange={(event) => console.log(event.target.value)}
      />
    </div>
  );
};

```

## 4. Styles as Props

```
import { FC } from "react";

interface IStylesDemo {
  styles: React.CSSProperties;
}
export const StylesDemo: FC<IStylesDemo> = ({ styles }: IStylesDemo) => {
  return (
    <div style={{ ...styles }}>
      <h1>I am a Component</h1>
    </div>
  );
};
```

## 5. Hooks

### useState

```
import { FC, useState } from "react";

interface IUser {
  name?: string;
  email?: string;
}

export const UseStateDemo: FC<IUser> = (props: IUser) => {
  const [user, setUser] = useState<IUser | null>(null);
  const handleLogIn = () => {
    setUser({
      name: "nuwan",
      email: "nuwan@gmail.com",
    });
  };

  const handleLogOut = () => {
    setUser(null);
  };
```

### useReducer

```
import { FC, useReducer } from "react";

interface IState {
  count: number;
}

/* interface IAction {
  type: "increment" | "decrement" | "reset";
  payload?: number;
} */

interface IUpdateAction {
  type: "increment" | "decrement";
  payload: number;
}

interface IResetAction {
  type: "reset";
}

type IAction = IUpdateAction | IResetAction;

const initialState = {
  count: 0,
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const UseReducer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count:{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
```

## 4. enum

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
