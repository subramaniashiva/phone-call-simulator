import { expect, assert } from 'chai';

import * as reducer from '../../../app/redux/reducers/dialled-calls';

describe('dialled calls reducer testing ', () => {
  it('has correct action creator for set call details', () => {
    const testData = 'hello word';
    const actionCreator = reducer.setCallDetails(testData);
    expect(testData).equal(actionCreator.payload.data);
  });

  it('returns correct data ', () => {
    const intialState = {
      hello: 'world'
    };
    expect(intialState).equal(reducer.default(intialState));
  });

  it('sets correct call details', () => {
    const intialState = {};
    const expected = {
      1234: {
        count: 1
      }
    };
    const actual = reducer.default(intialState, { type: reducer.SET_CALL_DETAILS,
      payload: { data: { number: 1234 } } });
    assert.deepEqual(actual, expected);
  });
});
