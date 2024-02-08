import React, { useReducer, useState } from "react";
import { reducer } from "../store/reducer";

const Form = () => {
  const initialState = {
    name: "",
    lastName: "",
    age: "",
  };

  // const [state, setState] = useState(initialState);

  const [value, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_VALUE",
      payload: {
        [e.target.id]: e.target.value,
      },
    });
  };

  // const handleChange = (e) => {
  //   setState((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(value));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(JSON.stringify(state));
  // };

  const handleClear = () => {
    dispatch({
      type: "SET",
      payload: {
        ...initialState,
      },
    });
  };

  // const handleClear = () => {
  //   setState(initialState);
  // };

  return (
    <>
      <h2>useReducer Challenge</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Object.keys(initialState).map((key) => (
          <>
            <label htmlFor={key}>{key}:</label>
            <input
              type="text"
              id={key}
              value={value[key]}
              onChange={handleChange}
            />
          </>
        ))}
        {/* {Object.keys(initialState).map((key) => (
          <>
            <label htmlFor={key}>{key}:</label>
            <input
              type="text"
              id={key}
              value={state[key]}
              onChange={handleChange}
            />
          </>
        ))} */}
        <button type="submit">Submit</button>
        <button onClick={handleClear}>Clear</button>
      </form>
    </>
  );
};

export default Form;
