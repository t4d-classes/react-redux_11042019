import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';
const MULTIPLY_ACTION = 'MULTIPLY';
const DIVIDE_ACTION = 'DIVIDE';

const calcToolReducer = (state = { result: 0, history: [] }, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        history: state.history.concat({
          op: 'Add',
          val: action.value,
          id: Math.max(...state.history.map(e => e.id), 0) + 1,
        }),
        result: state.result + action.value,
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        history: state.history.concat({
          op: 'Subtract',
          val: action.value,
          id: Math.max(...state.history.map(e => e.id), 0) + 1,
        }),
        result: state.result - action.value,
      };
    case MULTIPLY_ACTION:
      return {
        ...state,
        history: state.history.concat({
          op: 'Multiply',
          val: action.value,
          id: Math.max(...state.history.map(e => e.id), 0) + 1,
        }),
        result: state.result * action.value,
      };
    case DIVIDE_ACTION:
      return {
        ...state,
        history: state.history.concat({
          op: 'Divide',
          val: action.value,
          id: Math.max(...state.history.map(e => e.id), 0) + 1,
        }),
        result: state.result / action.value,
      };
    default:
      return state;
  }
};

// const createStore = (reducerFn) => {
//   let currentState = undefined;
//   const subscriberFns = [];
//   return {
//     getState: () => currentState,
//     dispatch: action => {
//       currentState = reducerFn(currentState, action);
//       subscriberFns.forEach(callbackFn => callbackFn());
//     },
//     subscribe: callbackFn => {
//       subscriberFns.push(callbackFn);
//     },
//   };
// };

const createAddAction = value => ({ type: ADD_ACTION, value });
const createSubtractAction = value => ({ type: SUBTRACT_ACTION, value });
const createMultiplyAction = value => ({ type: MULTIPLY_ACTION, value });
const createDivideAction = value => ({ type: DIVIDE_ACTION, value });

// const add = value => dispatch(createAddAction(value));


// const add = value => dispatch(createAddAction(value));
//add(1);

const Calculator = ({ result, history, onAdd, onSubtract, onMultiply, onDivide }) => {

  const [ num, setNum ] = useState(0);

  return <>
    <form>
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
    </form>
    <table>
      <thead>
        <tr>
          <th>Op</th>
          <th>Val</th>
        </tr>
      </thead>
      <tbody>
        {history.map(entry => <tr key={entry.id}>
          <td>{entry.op}</td>
          <td>{entry.val}</td>
        </tr>)}
      </tbody>
    </table>
  </>;
};

const store = createStore(calcToolReducer);

const { add, subtract, multiply, divide } = bindActionCreators({
  add: createAddAction,
  subtract: createSubtractAction,
  multiply: createMultiplyAction,
  divide: createDivideAction,
}, store.dispatch);


store.subscribe(() => {
  ReactDOM.render(
    <Calculator
      result={store.getState().result}
      history={store.getState().history}
      onAdd={add}
      onSubtract={subtract}
      onMultiply={multiply}
      onDivide={divide}
    />,
    document.querySelector('#root'),
  );
});


add(0);
