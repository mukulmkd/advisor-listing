import { FETCH_ADVISORS, GET_ERRORS } from './types';

export const fetchAdvisors = (endPoint) => async (dispatch) => {
  await fetch(endPoint)
    .then((res) => {
      if (!res.ok) {
        return dispatch({
          type: GET_ERRORS,
          payload: `Error Occurred ${res.status}`,
        });
      }
      return res.json();
    })
    .then((advisors) => {
      dispatch({
        type: FETCH_ADVISORS,
        payload: advisors,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};
