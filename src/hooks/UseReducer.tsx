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
