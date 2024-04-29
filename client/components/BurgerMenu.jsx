import React from 'react';

import { useDispatch } from 'react-redux';
import { toggleMenu } from '../reducers/burgerMenuSlicer';

const BurgerMenu = ({ isToggled }) => {
  const dispatch = useDispatch();
  return(
    <button className='burger-menu-button' onClick={ () => dispatch(toggleMenu()) }>
      <ion-icon name="menu-outline"></ion-icon>
      <div className={isToggled ? 'burger-menu' : 'burger-menu-on'}>
        <a href='https://chat.openai.com/'>This is a sample</a>
        <a href='https://chat.openai.com/'>This is a sample</a>
        <a href='https://chat.openai.com/'>This is a sample</a>
      </div>
    </button>
  );
};
export default BurgerMenu;
