import { combineReducers } from 'redux';

import {
  REFRESH_CARS_DONE,
  EDIT_CAR, CANCEL_CAR,
} from './carToolActions';


export const carsReducer = (cars = [], action) => {

  switch (action.type) {
    case REFRESH_CARS_DONE:
      return action.payload.cars;
    default:
      return cars;
  }
};

export const editCarIdReducer = (editCarId = -1, action) => {

  switch (action.type) {
    case EDIT_CAR:
      return action.payload.carId;
    case REFRESH_CARS_DONE:
    case CANCEL_CAR:
      return -1;
    default:
      return editCarId;
  }

};

export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
});
