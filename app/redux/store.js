import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/root-reducer';

export default createStore(rootReducer, undefined, compose(
  applyMiddleware(thunk)
));

