import React, { FC, createContext } from "react";
import { Person } from "./components/Person";
import { Product, Status } from "./components/Product";
import { PersonList } from "./props/PersonList";
import { PropsDemo } from "./props/PropsDemo";
import { StatusDemo } from "./advance-props/Status";
import { ChildrenOneDemo } from "./advance-props/Child/ChildrenOneDemo";
import { ChildrenTwoDemo } from "./advance-props/Child/ChildrenTwoDemo";
import { ButtonDemo } from "./advance-props/Button/ButtonDemo";
import { InputDemo } from "./advance-props/Input/InputDemo";
import { StylesDemo } from "./advance-props/Styles/StylesDemo";
import { UseStateDemo } from "./hooks/UseStateDemo";
import { UseReducer } from "./hooks/UseReducer";

export interface IAppContext {
  name: string;
  age: number;
  email: string;
  status: Status;
}

const appContextValue: IAppContext = {
  name: "Nuwan Dasuni Mevan",
  age: 39355,
  email: "ndm@gmail.com",
  status: Status.Best,
};

export const AppContext = createContext<IAppContext>(appContextValue);

const nameList = [
  { first: "Nuwan", last: "Chathuranga" },
  { first: "Dasuni", last: "Nadeera" },
  { first: "Mevan", last: "Gaurawa" },
];

const App: FC = () => {
  return (
    <div className="App">
      {/* <AppContext.Provider value={appContextValue}>
        <Person name="Nuwan" age={30} email={"nuwan@gmail.com"} />
        <Product />
      </AppContext.Provider> */}

      {/* <PropsDemo name="Nuwan C" count={10} isLogged={true} />
      <PersonList list={nameList} /> */}

      {/*  <StatusDemo status={"success"} /> */}

      {/* <ChildrenOneDemo>I am a Children</ChildrenOneDemo>
      <ChildrenTwoDemo>
        <ChildrenOneDemo>I am another Children</ChildrenOneDemo>
      </ChildrenTwoDemo> */}

      {/* <ButtonDemo /> */}
      {/* <InputDemo value="" onChange={(event) => console.log(event)} /> */}

      {/*  <StylesDemo
        styles={{
          border: "5px solid blue",
          padding: "1rem",
          background: "yellow",
        }}
      /> */}

      {/* <UseStateDemo /> */}

      <UseReducer />
    </div>
  );
};

export default App;
