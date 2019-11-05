const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';


const calcToolReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return state + action.value;
    case SUBTRACT_ACTION:
      return state - action.value;
    default:
      return state;
  }
};

const createStore = (reducerFn) => {
  let currentState = undefined;
  const subscriberFns = [];
  return {
    getState: () => currentState,
    dispatch: action => {
      currentState = reducerFn(currentState, action);
      subscriberFns.forEach(callbackFn => callbackFn());
    },
    subscribe: callbackFn => {
      subscriberFns.push(callbackFn);
    },
  };
};

const store = createStore(calcToolReducer);

store.subscribe(() => {
  console.log(store.getState());
});

const createAddAction = value => ({ type: ADD_ACTION, value });
const createSubtractAction = value => ({ type: SUBTRACT_ACTION, value });

store.dispatch(createAddAction(1));
store.dispatch(createSubtractAction(2));
store.dispatch(createAddAction(3));
store.dispatch(createSubtractAction(4));
store.dispatch(createAddAction(5));
