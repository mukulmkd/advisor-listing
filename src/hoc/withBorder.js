import React from 'react';

const withBorder = (BaseComponent) => (props) => {
  return (
    <>
      <div className='border border-success m-5'>
        <BaseComponent {...props} />
      </div>
    </>
  );
};

export default withBorder;
