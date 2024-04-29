import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isToggled: true
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      state.isToggled = !state.isToggled;
    }
  }
});

export const { toggleMenu } = menuSlice.actions;

export default menuSlice.reducer;