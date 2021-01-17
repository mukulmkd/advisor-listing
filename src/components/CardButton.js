import React from 'react';

const CardButton = ({ isAvailable, icon, actionText }) => {
  return (
    <>
      <button
        type='button'
        className={`btn-common d-flex justify-content-center align-content-between ${
          isAvailable ? 'btn-action' : 'btn-disabled'
        }`}
        style={{
          pointerEvents: isAvailable ? 'auto' : 'none',
          width: '9rem',
        }}>
        <span className='material-icons mr-1'>{icon}</span>
        <span>{`${actionText} ${isAvailable ? `NOW` : `LATER`}`}</span>
      </button>
    </>
  );
};

export default React.memo(CardButton);
