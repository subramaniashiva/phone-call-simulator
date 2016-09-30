import createReducer from 'utils/redux';

const initialState = {};

export const GET_ALL_CALL_DETAILS = 'get_all_call_details';
export const SET_CALL_DETAILS = 'set_call_details';
export const PRINT_TOP_CALLED_NUMBERS = 'print_top_called_numbers';

export function getAllCallDetails() {
  return {
    type: GET_ALL_CALL_DETAILS
  };
}

export function setCallDetails(data) {
  return {
    type: SET_CALL_DETAILS,
    payload: {
      data
    }
  };
}

export function printTopCalledNumbers(data) {
  return {
    type: PRINT_TOP_CALLED_NUMBERS,
    payload: {
      data
    }
  };
}

// The actual reducer
export default createReducer(initialState, {
  [GET_ALL_CALL_DETAILS]: state => state,
  [SET_CALL_DETAILS]: (state, { data }) => {
    const currentState = { ...state };
    if (!currentState[data.number]) {
      currentState[data.number] = {};
      currentState[data.number].count = 0;
    }
    currentState[data.number].count += 1;
    return currentState;
  },
  [PRINT_TOP_CALLED_NUMBERS]: (state, { data }) => {
    const result = [];
    let tempObj;
    Object.keys(state).forEach((key) => {
      if (state && {}.hasOwnProperty.call(state, key)) {
        tempObj = {
          number: key,
          count: state[key].count
        };
        if (!result.length) {
          result.push(tempObj);
        } else if (result[0].count < tempObj.count) {
          result.unshift(tempObj);
        } else {
          result.push(tempObj);
        }
      }
    });
    console.log('Top 3 dialled calls list: ', result.slice(0, data));
    return state;
  }
});
