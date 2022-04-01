import React from "react";
import Header from "./components/Header";

function App() {
  const name: string = "Nuwan";
  const age: number = 30;
  const isActive: boolean = true;

  const getName = (name: string): number => {
    return age;
  };

  return (
    <div className="App">
      <Header title="Nuwan" color="red" />
      {name}-{age}-{isActive && <span>ACTIVE</span>}
      {getName("Nuwan")}
    </div>
  );
}

export default App;
