import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';
const MULTIPLY_ACTION = 'MULTIPLY';
const DIVIDE_ACTION = 'DIVIDE';

const calcToolReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return state + action.value;
    case SUBTRACT_ACTION:
      return state - action.value;
    case MULTIPLY_ACTION:
      return state * action.value;
    case DIVIDE_ACTION:
      return state / action.value;
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

const createAddAction = value => ({ type: ADD_ACTION, value });
const createSubtractAction = value => ({ type: SUBTRACT_ACTION, value });
const createMultiplyAction = value => ({ type: MULTIPLY_ACTION, value });
const createDivideAction = value => ({ type: DIVIDE_ACTION, value });

const Calculator = ({ result, onAdd, onSubtract, onMultiply, onDivide }) => {

  const [ num, setNum ] = useState(0);

  return <form>
    <div>
      Result: {result}
    </div>
    <div>
      <label>Num Input:</label>
      <input type="number" value={num}
        onChange={({ target: { value }}) => setNum(Number(value))} />
    </div>
    <div>
      <button type="button" onClick={() => onAdd(num)}>Add</button>
      <button type="button" onClick={() => onSubtract(num)}>Subtract</button>
      <button type="button" onClick={() => onMultiply(num)}>Multiply</button>
      <button type="button" onClick={() => onDivide(num)}>Divide</button>
    </div>
  </form>;
};

const store = createStore(calcToolReducer);

store.subscribe(() => {
  ReactDOM.render(
    <Calculator
      result={store.getState()}
      onAdd={num => store.dispatch(createAddAction(num))}
      onSubtract={num => store.dispatch(createSubtractAction(num))}
      onMultiply={num => store.dispatch(createMultiplyAction(num))}
      onDivide={num => store.dispatch(createDivideAction(num))}
    />,
    document.querySelector('#root'),
  );
});


store.dispatch(createAddAction(0));
