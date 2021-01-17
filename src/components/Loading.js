import React from 'react';

const Loading = () => {
  return (
    <>
      <div className='d-flex justify-content-center col-md-12 mt-5 pt-5'>
        <div className='spinner-grow text-info ml-1' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
        <div className='spinner-grow text-info ml-1' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
        <div className='spinner-grow text-info ml-1' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
        <div className='spinner-grow text-info ml-1' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
        <div className='spinner-grow text-info ml-1' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
