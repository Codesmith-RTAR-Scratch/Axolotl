import { createSlice } from '@reduxjs/toolkit';
import { Navigate } from 'react-router-dom';

const initialState = {
  page: '/',
  isLoading: false
};

export const tabBarSlice = createSlice({
  name: 'tab-bar',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      Navigate(action.payload);
    },
    isLoading: (state, action) => {
      state.isLoading = !state.isLoading;
    }
  }
});

export const { changePage, isLoading } = tabBarSlice.actions;

export default tabBarSlice.reducer;