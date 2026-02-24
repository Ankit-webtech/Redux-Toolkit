import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseby1,
  increaseby10,
  decreaseby1,
  decreaseby10,
  increaseByValue,
} from "../app/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <>
      <h1>Counter Value = {count} </h1>
      <button onClick={() => dispatch(increaseby1())}>increaseby1</button>
      <button onClick={() => dispatch(increaseby10())}>increaseby10</button>
      <button onClick={() => dispatch(decreaseby1())}>decreaseby1</button>
      <button onClick={() => dispatch(decreaseby10())}>decreaseby10</button>
      <button onClick={() => dispatch(increaseby1())}>increaseby1</button>
      <button onClick={() => dispatch(increaseByValue(100))}>increasebyvalue</button>
    </>
  );
};

export default Counter;
