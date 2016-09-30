import createReducer from 'utils/redux';

const initialState = 0;

export const GET_TOTAL_CALLS = 'get_total_calls';
export const INCREASE_TOTAL_CALLS = 'increase_total_calls';
export const PRINT_TOTAL_CALLS = 'print_total_calls';

export function getTotalCalls() {
  return {
    type: GET_TOTAL_CALLS
  };
}

export function increaseTotalCalls() {
  return {
    type: INCREASE_TOTAL_CALLS
  };
}

export function printTotalCalls() {
  return {
    type: PRINT_TOTAL_CALLS
  };
}

// The actual reducer
export default createReducer(initialState, {
  [GET_TOTAL_CALLS]: state => state,
  [INCREASE_TOTAL_CALLS]: state => (state + 1),
  [PRINT_TOTAL_CALLS]: (state) => {
    console.log('Total number of calls ', state);
    return state;
  }
});
