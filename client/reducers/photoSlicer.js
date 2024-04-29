import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  totalPrice: 0,
  tax: 0,
  tip: 0,
  itemList: [],
  people: []
};

export const pictureSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: { // do i need this? will changing paths in tabBarSlicer make it harder to navigate to the reciept page? should I be navigating to a page that is on the tab bar from the upload button?
    isLoading: (state, action) => {
      if(state.isLoading === true) state.isLoading = false;
      else state.isLoading = true;
    }
  }
});

export const { isLoading } = pictureSlice.actions;

export default pictureSlice.reducer;
