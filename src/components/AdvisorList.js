import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useInterval from './../hooks/useInterval';
import { fetchAdvisors } from '../actions/advisorAction';
import {
  ADVISOR_END_POINT,
  AVAILABLE_ADVISOR_END_POINT,
} from '../actions/constants';
import AdvisorCard from './AdvisorCard';
import Error from './Error';
import Loading from './Loading';

const AdvisorList = () => {
  const { advisors } = useSelector((state) => state.advisors);
  const { error } = useSelector((state) => state.error);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAdvisors(ADVISOR_END_POINT));
  }, [dispatch]);

  useInterval(async () => {
    dispatch(fetchAdvisors(AVAILABLE_ADVISOR_END_POINT));
  }, 30000);

  if (error) {
    return (
      <>
        <Error message={error} />
      </>
    );
  }

  return (
    <>
      <div className='container pt-2 pb-2'>
        <div className='row'>
          <div
            className='col-md-12 col-12 m-1 text-center font-weight-bold p-3'
            style={{ backgroundColor: '#06b4ae', color: '#ffffff' }}>
            OUR ADVISORS
          </div>
          {advisors && advisors.length > 0 ? (
            advisors.map((advisor, index) => {
              return <AdvisorCard advisor={advisor} key={index} />;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
};

export default AdvisorList;
