import { expect, assert } from 'chai';

import * as reducer from '../../../app/redux/reducers/current-call-time';

describe('current call time reducer testing ', () => {
  it('has correct action creator for set current call time', () => {
    const testData = 1;
    const actionCreator = reducer.setCurrentCallTime(testData);
    expect(testData).equal(actionCreator.payload.data);
  });

  it('returns correct data ', () => {
    const intialState = {
      hello: 'world'
    };
    expect(intialState).equal(reducer.default(intialState));
  });

  it('returns correct formatted time', () => {
    const intialState = {
      hours: '00',
      mins: '00',
      secs: '00'
    };
    const expected = {
      hours: '00',
      mins: '00',
      secs: '10'
    };
    const actual = reducer.default(intialState, { type: reducer.SET_CURRENT_CALL_TIME,
      payload: { data: 10 } });
    assert.deepEqual(expected, actual);
  });
});
