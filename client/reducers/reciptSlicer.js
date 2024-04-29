import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  recieptData: [],
  loading: 'idle',
};

export const fetchReceiptData = createAsyncThunk('/table', async (formData) => {
  const response = await axios.post('http://localhost:3000/table', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
});

export const recieptTableSlice = createSlice({
  name: 'reciepts',
  initialState,
  reducers: {}, // do i need this? will changing paths in tabBarSlicer make it harder to navigate to the reciept page? should I be navigating to a page that is on the tab bar from the upload button?
  extraReducers: (builder) => {
    builder.addCase(fetchReceiptData.fulfilled, (state, action) => {
      state.recieptData = action.payload;
      state.loading = 'idle';
    });
  },
});

export const { actions } = recieptTableSlice;

export default recieptTableSlice.reducer;
