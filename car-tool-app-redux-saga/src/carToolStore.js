import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';


import { carToolReducer } from './carToolReducers';
import { carsSaga } from './sagas/carsSaga';


const sagaMiddleware = createSagaMiddleware();

export const carToolStore = createStore(
  carToolReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(carsSaga)