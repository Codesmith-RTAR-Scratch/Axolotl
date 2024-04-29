import { configureStore } from '@reduxjs/toolkit';
import receiptSlicer from './reducers/receiptSlicer';
import menuSlicer from './reducers/burgerMenuSlicer';
import tabBarSlicer from './reducers/tabBarSlicer';

const store = configureStore({
  reducer: {
    receipt: receiptSlicer,
    menu: menuSlicer,
    tabBar: tabBarSlicer
  },
});

export default store;