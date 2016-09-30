import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Main from 'layouts/main';
import store from 'redux/store';

import 'styles/style.scss';

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
