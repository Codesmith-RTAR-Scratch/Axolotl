import React from 'react';
import { useSelector } from 'react-redux';

import PictureHeader from '../components/PictureHeader';
import ReceiptTable from '../components/ReceiptTable';

const ReceiptContainer = () => {
  return (
    <div className='container'>
      <PictureHeader />
      <ReceiptTable />
    </div> 
  );
};

export default ReceiptContainer;