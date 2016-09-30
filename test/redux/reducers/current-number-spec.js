import { expect } from 'chai';

import * as reducer from '../../../app/redux/reducers/current-number';

describe('current number reducer testing ', () => {
  it('has correct action creator for set current call time', () => {
    const testData = 1;
    const actionCreator = reducer.appendCurrentNumber(testData);
    expect(testData).equal(actionCreator.payload.data);
  });

  it('returns correct data ', () => {
    const intialState = {
      hello: 'world'
    };
    expect(intialState).equal(reducer.default(intialState));
  });

  it('returns correct dialled number', () => {
    const intialState = '123';
    const expected = '1234';
    const actual = reducer.default(intialState, { type: reducer.APPEND_CURRENT_NUMBER,
      payload: { data: '4' } });
    expect(expected).equal(actual);
  });
});
