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
import React from "react";

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
```
