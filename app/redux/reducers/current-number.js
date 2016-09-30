import createReducer from 'utils/redux';

const initialState = '';

export const GET_CURRENT_NUMBER = 'get_current_number';
export const APPEND_CURRENT_NUMBER = 'append_current_number';
export const RESET_CURRENT_NUMBER = 'reset_current_number';

export function getCurrentNumber() {
  return {
    type: GET_CURRENT_NUMBER
  };
}

export function appendCurrentNumber(data) {
  return {
    type: APPEND_CURRENT_NUMBER,
    payload: {
      data
    }
  };
}

export function resetCurrentNumber() {
  return {
    type: RESET_CURRENT_NUMBER
  };
}
// The actual reducer
export default createReducer(initialState, {
  [GET_CURRENT_NUMBER]: state => state,
  [APPEND_CURRENT_NUMBER]: (state, { data }) => (state + data),
  [RESET_CURRENT_NUMBER]: () => ''
});
