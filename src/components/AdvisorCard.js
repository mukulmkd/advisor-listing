import React from 'react';
import CardButton from './CardButton';
import Online from './Online';
import Offline from './Offline';

const AdvisorCard = ({ advisor }) => {
  return (
    <>
      <div className='card col-md-12 col-12 m-1'>
        <div className='card-body row'>
          <div className='col-md-2 col-6 p-0'>
            <img
              src={advisor.profile_pic_url}
              alt={advisor.id.toString()}
              className='rounded-circle img-fluid'
              style={{ width: '10rem' }}
            />
          </div>
          <div className='col-md-7 col-6'>
            <div className='profile-title'>{advisor.advisor_name}</div>
            {advisor.call_available || advisor.chat_available ? (
              <Online
                text={
                  advisor.call_available && !advisor.chat_available
                    ? 'on call'
                    : !advisor.call_available && advisor.chat_available
                    ? 'on chat'
                    : ''
                }
              />
            ) : (
              <Offline />
            )}
          </div>
          <div className='col-md-3 col-12'>
            <div className='row'>
              <div className='rate-color col-md-12 pl-0 mt-1'>
                {advisor.rate}
              </div>
              <div className='col-md-12 col-6 mt-1 pl-0'>
                <CardButton
                  isAvailable={advisor.call_available}
                  icon='call'
                  actionText='CALL'
                />
              </div>
              <div className='col-md-12 col-6 mt-1 pl-0'>
                <CardButton
                  isAvailable={advisor.chat_available}
                  icon='chat'
                  actionText='CHAT'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvisorCard;
