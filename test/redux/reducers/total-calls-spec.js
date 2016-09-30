import { expect } from 'chai';

import * as reducer from '../../../app/redux/reducers/total-calls';

describe('total calls reducer testing ', () => {
  it('returns correct data ', () => {
    const intialState = {
      hello: 'world'
    };
    expect(intialState).equal(reducer.default(intialState));
  });

  it('increases the call count correctly', () => {
    const intialState = 0;
    const expected = 1;
    const actual = reducer.default(intialState, { type: reducer.INCREASE_TOTAL_CALLS });
    expect(expected).equal(actual);
  });
});
