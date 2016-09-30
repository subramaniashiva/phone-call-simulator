import createReducer from 'utils/redux';

const initialState = 'keypad';

export const GET_CURRENT_SCREEN = 'get_current_screen';
export const SET_CURRENT_SCREEN = 'set_current_screen';

export function getCurrentScreen() {
  return {
    type: GET_CURRENT_SCREEN
  };
}

export function setCurrentScreen(data) {
  return {
    type: SET_CURRENT_SCREEN,
    payload: {
      data
    }
  };
}

// The actual reducer
export default createReducer(initialState, {
  [GET_CURRENT_SCREEN]: state => state,
  [SET_CURRENT_SCREEN]: (state, { data }) => (data)
});
