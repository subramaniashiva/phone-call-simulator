export default function createReducer(initialState, reducerMap) {
  return (state = initialState, action = {}) => {
    const reducer = reducerMap[action.type];
    const getNewState = (oldState, currentAction) => {
      if (Array.isArray(oldState)) {
        return [...reducer(oldState, currentAction.payload)];
      }
      return (typeof oldState === 'object') ? ({ ...oldState, ...reducer(oldState, currentAction.payload) }) : reducer(oldState, currentAction.payload);
    };
    return reducer ? getNewState(state, action) : state;
  };
}
