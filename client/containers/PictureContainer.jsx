import React from 'react';
import { useSelector } from 'react-redux';

import PictureHeader from '../components/PictureHeader';
import PictureBody from '../components/PictureBody';

const PictureContainer = () => {
  return (
    <div className='pictureContainer'>
      <PictureHeader />
      <PictureBody />
    </div>
  );
};

export default PictureContainer;