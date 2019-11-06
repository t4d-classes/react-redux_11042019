import { createStore } from 'redux';

import { carToolReducer } from './carToolReducers';

export const carToolStore = createStore(carToolReducer);