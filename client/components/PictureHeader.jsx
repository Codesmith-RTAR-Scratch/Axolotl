import React from 'react';
// import BurgerMenu from './BurgerMenu';

import { useSelector } from 'react-redux';

const pictureHeader = () => {

  // const isToggled = useSelector((state) => state.menu.isToggled);

  return (
    <div className='pictureHeader'>
      {/* <BurgerMenu isToggled={ isToggled } /> */}
      <h1>RTAR</h1>
    </div>
  );
};

export default pictureHeader;




