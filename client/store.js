import { configureStore } from '@reduxjs/toolkit';
import recieptSlicer from './reducers/reciptSlicer';
import menuSlicer from './reducers/burgerMenuSlicer';
import tabBarSlicer from './reducers/tabBarSlicer';

const store = configureStore({
  reducer: {
    reciepts: recieptSlicer,
    menu: menuSlicer,
    tabBar: tabBarSlicer
  },
});

export default store;