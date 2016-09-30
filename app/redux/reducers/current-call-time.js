import createReducer from 'utils/redux';
import leftPadZero from 'utils/leftPadZero';

const initialState = {
  hours: '00',
  mins: '00',
  secs: '00'
};

export const GET_CURRENT_CALL_TIME = 'get_current_call_time';
export const SET_CURRENT_CALL_TIME = 'set_current_call_time';
export const RESET_CURRENT_CALL_TIME = 'reset_current_call_time';

export function getCurrentCallTime() {
  return {
    type: GET_CURRENT_CALL_TIME
  };
}

export function setCurrentCallTime(data) {
  return {
    type: SET_CURRENT_CALL_TIME,
    payload: {
      data
    }
  };
}

export function resetCurrentCallTime() {
  return {
    type: RESET_CURRENT_CALL_TIME
  };
}
// The actual reducer
export default createReducer(initialState, {
  [GET_CURRENT_CALL_TIME]: state => state,
  [SET_CURRENT_CALL_TIME]: (state, { data }) => {
    const totalSeconds = parseInt(data, 10);
    const hours = parseInt(totalSeconds / 3600, 10);
    const mins = parseInt((totalSeconds % 3600) / 60, 10);
    const secs = parseInt((totalSeconds % 3600) % 60, 10);
    return {
      hours: leftPadZero(hours, 2),
      mins: leftPadZero(mins, 2),
      secs: leftPadZero(secs, 2)
    };
  },
  [RESET_CURRENT_CALL_TIME]: () => initialState
});
