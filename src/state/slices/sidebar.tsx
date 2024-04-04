import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SidebarState {
  value: boolean;
}

const initialState: SidebarState = {
  value: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    open: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
    toggle: (state) => {
      state.value = !state.value;
    },
    set: (state, action:PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, close, toggle, set } = sidebarSlice.actions;

export default sidebarSlice.reducer;
