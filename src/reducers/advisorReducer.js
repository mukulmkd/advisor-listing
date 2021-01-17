import { FETCH_ADVISORS } from './../actions/types';

const initialState = {
  advisors: [],
};

const advisorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADVISORS:
      return {
        ...state,
        advisors: action.payload,
      };
    default:
      return state;
  }
};
export default advisorReducer;
