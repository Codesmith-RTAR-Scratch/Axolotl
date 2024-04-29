import { createSlice } from '@reduxjs/toolkit';
import { Navigate } from 'react-router-dom';

const initialState = {
  page: '/photo'
};

export const tabBarSlice = createSlice({
  name: 'tab-bar',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      Navigate(action.payload);
    }
  }
});

export const { changePage } = tabBarSlice.actions;

export default tabBarSlice.reducer;