import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

import {
  REFRESH_CARS_REQUEST,
  APPEND_CAR_REQUEST,
  REPLACE_CAR_REQUEST,
  DELETE_CAR_REQUEST,
  createRefreshCarsRequestAction,
  createRefreshCarsDoneAction,
} from '../carToolActions';

export function* refreshCars() {
  const response = yield call(axios.get, 'http://localhost:3010/cars');

  yield put(createRefreshCarsDoneAction(response.data));
}

export function* appendCar(action) {
  yield call(axios.post, 'http://localhost:3010/cars', action.payload.car);

  yield put(createRefreshCarsRequestAction());
}

export function* replaceCar(action) {
  yield call(
    axios.put,
    'http://localhost:3010/cars/' + encodeURIComponent(action.payload.car.id),
    action.payload.car,
  );

  yield put(createRefreshCarsRequestAction());
}

export function* deleteCar(action) {
  yield call(
    axios.delete,
    'http://localhost:3010/cars/' + encodeURIComponent(action.payload.carId),
  );

  yield put(createRefreshCarsRequestAction());
}

export function* carsSaga() {
  yield takeLatest(REFRESH_CARS_REQUEST, refreshCars);
  yield takeEvery(APPEND_CAR_REQUEST, appendCar);
  yield takeEvery(REPLACE_CAR_REQUEST, replaceCar);
  yield takeEvery(DELETE_CAR_REQUEST, deleteCar);
}
