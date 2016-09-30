import { expect } from 'chai';

import * as reducer from '../../../app/redux/reducers/current-screen';

describe('current screen reducer testing ', () => {
  it('has correct action creator for set current screen', () => {
    const testData = 'keypad';
    const actionCreator = reducer.setCurrentScreen(testData);
    expect(testData).equal(actionCreator.payload.data);
  });

  it('returns correct data ', () => {
    const intialState = {
      hello: 'world'
    };
    expect(intialState).equal(reducer.default(intialState));
  });

  it('sets correct screen', () => {
    const intialState = 'keypad';
    const expected = 'call';
    const actual = reducer.default(intialState, { type: reducer.SET_CURRENT_SCREEN,
      payload: { data: 'call' } });
    expect(expected).equal(actual);
  });
});
