import { combineReducers } from 'redux';

import currentNumber from './current-number';
import currentScreen from './current-screen';
import currentCallTime from './current-call-time';
import totalCalls from './total-calls';
import dialledCalls from './dialled-calls';

export default combineReducers({
  currentNumber,
  currentScreen,
  currentCallTime,
  totalCalls,
  dialledCalls
});
