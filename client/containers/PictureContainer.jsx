import React from 'react';
import { useSelector } from 'react-redux';

import PictureHeader from '../components/PictureHeader';
import PictureBody from '../components/PictureBody';
import ReceiptChart from '../components/ReceiptChart';

const PictureContainer = () => {
  return (
    <div className='pictureContainer'>
      <PictureHeader />
      <PictureBody />
      {/* <TabBar /> */}
      <ReceiptChart />
    </div>
  );
};

export default PictureContainer;