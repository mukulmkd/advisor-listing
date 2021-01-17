import React from 'react';

const Error = ({ message }) => {
  return (
    <>
      <div className='alert alert-danger text-center'>
        <strong>Error!</strong> We have encountered an error. {message}.
      </div>
    </>
  );
};

export default Error;
