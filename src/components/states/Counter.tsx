import React, { useReducer } from "react";

type CounterState = {
    count: number;
}

type CounterAction = {
    type: string;
    payload: number
}

const initialState: CounterState = { count: 0 };

function reducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };
    default:
        return { count: state.count }
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch({type: 'Increment', payload: 10})

  const handleDecrement = () => dispatch({type: 'Decrement', payload: 10})

  return (
    <>
      <div className="container-text">Count : {state.count}</div>
      <button className="btn" onClick={handleIncrement}> Increment </button>
      <button className="btn" onClick={handleDecrement}> Decrement </button>
    </>
  );
};

export default Counter;
