import React from 'react';

const Online = ({ text }) => {
  return (
    <>
      <div>
        <span className='indicator online'></span>
        <div className='font-italic font-weight-bold'>Available {text}</div>
      </div>
    </>
  );
};

export default Online;
