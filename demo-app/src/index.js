import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators, combineReducers } from 'redux';

const ADD_ACTION = 'ADD';
const SUBTRACT_ACTION = 'SUBTRACT';
const MULTIPLY_ACTION = 'MULTIPLY';
const DIVIDE_ACTION = 'DIVIDE';
const CLEAR_ACTION = 'CLEAR';
const DELETE_HISTORY_ENTRY_ACTION = 'DELETE_HISTORY_ENTRY_ACTION';

// const resultReducer = (result = 0, action) => {
//   switch (action.type) {
//     case ADD_ACTION:
//       return result + action.value;
//     case SUBTRACT_ACTION:
//       return result - action.value;
//     case MULTIPLY_ACTION:
//       return result * action.value;
//     case DIVIDE_ACTION:
//       return result / action.value;
//     case CLEAR_ACTION:
//       return 0;
//     default:
//       return result;
//   }  
// };

const historyReducer = (history = [], action) => {
  switch (action.type) {
    case ADD_ACTION:
      return history.concat({
        op: 'Add',
        val: action.value,
        id: Math.max(...history.map(e => e.id), 0) + 1,
      });
    case SUBTRACT_ACTION:
      return history.concat({
        op: 'Subtract',
        val: action.value,
        id: Math.max(...history.map(e => e.id), 0) + 1,
      });
    case MULTIPLY_ACTION:
      return history.concat({
        op: 'Multiply',
        val: action.value,
        id: Math.max(...history.map(e => e.id), 0) + 1,
      });
    case DIVIDE_ACTION:
      return history.concat({
        op: 'Divide',
        val: action.value,
        id: Math.max(...history.map(e => e.id), 0) + 1,
      });
    case CLEAR_ACTION:
      return [];
    case DELETE_HISTORY_ENTRY_ACTION:
      return history.filter(
        entry => entry.id !== action.historyEntryId);
    default:
      return history;
  }
}

// const calcToolReducer = (state = {}, action) => {
//   return {
//     ...state,
//     result: resultReducer(state.result, action),
//     history: historyReducer(state.history, action),
//   };
// };

const calcToolReducer = combineReducers({
  // result: resultReducer,
  history: historyReducer,
});

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
const createClearAction = () => ({ type: CLEAR_ACTION });
const createDeleteHistoryEntryAction = historyEntryId =>
  ({ type: DELETE_HISTORY_ENTRY_ACTION, historyEntryId });

// const add = value => dispatch(createAddAction(value));


// const add = value => dispatch(createAddAction(value));
//add(1);

const getOpCount = (op, history) => {
  return history.filter(entry => entry.op === op).length;
};

const Calculator = ({
  history, onAdd, onSubtract,
  onMultiply, onDivide, onClear, onDeleteHistoryEntry
}) => {

  const [ num, setNum ] = useState(0);

  return <>
    <form>
      <div>
        Result: {history.reduce( (result, entry) => {
          switch (entry.op) {
            case 'Add':
              return result + entry.val;
            case 'Subtract':
              return result - entry.val;
            case 'Multiply':
              return result * entry.val;
            case 'Divide':
              return result / entry.val;
            default:
              return result;
          }
        }, 0)}
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
        <button type="button" onClick={() => { onClear(); setNum(0); }}>Clear</button>
      </div>
    </form>
    <table>
      <thead>
        <tr>
          <th>Op</th>
          <th>Val</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {history.map(entry => <tr key={entry.id}>
          <td>{entry.op}</td>
          <td>{entry.val}</td>
          <td><button type="button"
            onClick={() => onDeleteHistoryEntry(entry.id)}>Delete</button></td>
        </tr>)}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3">
            Add: {getOpCount('Add', history)},
            Sub: {getOpCount('Subtract', history)},
            Mul: {getOpCount('Multiply', history)},
            Div: {getOpCount('Divide', history)},
          </td>
        </tr>
      </tfoot>
    </table>
  </>;
};

const store = createStore(calcToolReducer);

const { add, subtract, multiply, divide, clear, deleteHistoryEntry } = bindActionCreators({
  add: createAddAction,
  subtract: createSubtractAction,
  multiply: createMultiplyAction,
  divide: createDivideAction,
  clear: createClearAction,
  deleteHistoryEntry: createDeleteHistoryEntryAction,
}, store.dispatch);


store.subscribe(() => {
  ReactDOM.render(
    <Calculator
      history={store.getState().history}
      onAdd={add}
      onSubtract={subtract}
      onMultiply={multiply}
      onDivide={divide}
      onClear={clear}
      onDeleteHistoryEntry={deleteHistoryEntry}
    />,
    document.querySelector('#root'),
  );
});


add(0);
