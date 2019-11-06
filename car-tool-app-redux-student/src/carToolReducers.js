import { combineReducers } from 'redux';

import {
  APPEND_CAR, REPLACE_CAR,
} from './carToolActions';

const initialCars = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'white', price: 25000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2018, color: 'red', price: 100000 },
];

export const carsReducer = (cars = initialCars, action) => {

  switch (action.type) {
    case APPEND_CAR:
      return cars.concat({
        ...action.payload.car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      });
    case REPLACE_CAR:
      const carIndex = cars.findIndex(c => c.id === action.payload.car.id);
      const newCars = cars.concat();
      newCars[carIndex] = action.payload.car;
      return newCars;
    default:
      return cars;
  }
};

export const editCarIdReducer = (editCarId = -1, action) => {

  switch (action.type) {
    default:
      return editCarId;
  }

};

export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
});
