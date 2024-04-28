import { configureStore } from '@reduxjs/toolkit';
import photoSlicer from './reducers/photoSlicer';
import menuSlicer from './reducers/burgerMenuSlicer';
import tabBarSlicer from './reducers/tabBarSlicer';

const store = configureStore({
  reducer: {
    photos: photoSlicer,
    menu: menuSlicer,
    tabBar: tabBarSlicer
  },
});

export default store;