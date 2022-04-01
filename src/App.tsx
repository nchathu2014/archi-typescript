import React, { FC } from "react";
import { Person } from "./components/Person";

const App: FC = () => {
  return (
    <div className="App">
      <Person name="Nuwan" age={30} email={"nuwan@gmail.com"} />
    </div>
  );
};

export default App;
