import { createSlice } from "@reduxjs/toolkit";

// const [ counter, setCounter] = useState(10);

export const counterSlice = createSlice({
  name: "counter",
  initialState: 100,
  reducers: {
    increaseby1: (state) => state + 1,
    increaseby10: (state) => state + 90,
    decreaseby1: (state) => state - 1,
    decreaseby10: (state) => state - 10,
    increaseByValue: (state, action) => (state += action.payload),
  },
});

export const {
  increaseby1,
  increaseby10,
  decreaseby1,
  decreaseby10,
  increaseByValue,
} = counterSlice.actions;

export default counterSlice.reducer;
