import React from 'react';
import { useSelector } from 'react-redux';

import PictureHeader from '../components/PictureHeader';
import PictureBody from '../components/PictureBody';
import pictureBody from '../components/PictureBody';

const PictureContainer = () => {
  const disappear = document.getElementsByClassName('pictureUpload');
  disappear.display = 'none';
  return (
    <div className='pictureContainer'>
      <PictureHeader />
      <PictureBody />
    </div>
  );
};

export default PictureContainer;