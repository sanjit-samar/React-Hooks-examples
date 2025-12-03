import "./styles.css";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "Increase":
      return {
        ...state,
        count: state.count + 1,
      };
    case "Decrease":
      return {
        ...state,
        count: state.count - 1,
      };
    case "default":
      return null;
  }
}

const initialState = { count: 0 };

export default function HookuseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "Increase" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Decrease" });
        }}
      >
        -
      </button>
    </div>
  );
}
