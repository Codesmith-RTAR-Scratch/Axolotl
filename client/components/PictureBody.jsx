
import React from 'react';

// import { isLoading } from '../reducers/photoSlicer';

// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

const pictureBody = () => {
  // const isLoading = useSelector((state) => state.photos.isLoading);

  return (
    <div className='pictureUpload'>
      <input type="file"></input>

      <form action='/upload' method='post' encType='multipart/form-data'>
        <input className='input' name='image' type='file' />
        <button className='pictureUploadButton'>
          <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' strokeLinejoin='round' strokeLinecap='round' viewBox='0 0 24 24' strokeWidth='2' fill='none' stroke='currentColor' className='icon'><polyline points='16 16 12 12 8 16'></polyline><line y2='21' x2='12' y1='12' x1='12'></line><path d='M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3'></path><polyline points='16 16 12 12 8 16'></polyline></svg>
        </button>
      </form>
    </div>
  );
};

export default pictureBody;


