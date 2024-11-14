import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clickedButtons: {},
};

export const rabSlice = createSlice({
  name: "rabbit",
  initialState,
  reducers: {
    showRabbit: (state, action) => {
      const { nums } = action.payload;
      state.clickedButtons[nums] = true;
    },
    hideRabbit: (state, action) => {
      const { nums } = action.payload;
      state.clickedButtons[nums] = false;
    },
  },
});

export const { showRabbit, hideRabbit } = rabSlice.actions;
export default rabSlice.reducer;
