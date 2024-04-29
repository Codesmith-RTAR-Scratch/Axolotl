
import React from 'react';

// import { isLoading } from '../reducers/tabBarSlicer';

import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

const pictureBody = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.photos.isLoading);

  return (
    <table className='pictureUpload'>
      
    </table>
  );
};

export default pictureBody;
