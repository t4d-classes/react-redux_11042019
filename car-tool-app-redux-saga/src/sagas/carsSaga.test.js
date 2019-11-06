import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import {
  refreshCars,
  appendCar,
  replaceCar,
  deleteCar,
} from './carsSaga';
import {
  createRefreshCarsRequestAction,
  createRefreshCarsDoneAction,
  createAppendCarRequestAction,
  createReplaceCarRequestAction,
  createDeleteCarRequestAction,
} from '../carToolActions';

describe('Car Saga', () => {

  test('Refresh Cars', () => {
    const iterator = refreshCars();

    expect(iterator.next().value).toEqual(
      call(axios.get, 'http://localhost:3010/cars'),
    );

    const cars = [
      {
        id: 1,
        make: 'Ford',
        model: 'Fusion Hybrid',
        year: 2019,
        color: 'red',
        price: 100,
      },
    ];

    expect(iterator.next({ data: cars }).value).toEqual(
      put(createRefreshCarsDoneAction(cars)),
    );
  });

  test('Append Car', () => {

    const car = {
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: 2019,
      color: 'red',
      price: 100,
    };

    const iterator = appendCar(createAppendCarRequestAction(car));

    expect(iterator.next().value).toEqual(
      call(
        axios.post,
        'http://localhost:3010/cars',
        car,
      ),
    );

    car.id = 1;

    expect(iterator.next({ data: car }).value).toEqual(
      put(createRefreshCarsRequestAction()),
    );
  });

  test('Replace Car', () => {

    const car = {
      id: 1,
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: 2019,
      color: 'red',
      price: 100,
    };

    const iterator = replaceCar(createReplaceCarRequestAction(car));

    expect(iterator.next().value).toEqual(
      call(
        axios.put,
        'http://localhost:3010/cars/' + encodeURIComponent(car.id),
        car,
      ),
    );

    expect(iterator.next({ data: car }).value).toEqual(
      put(createRefreshCarsRequestAction()),
    );
  });

  test('Delete Car', () => {

    const carId = 1;

    const iterator = deleteCar(createDeleteCarRequestAction(carId));

    expect(iterator.next().value).toEqual(
      call(
        axios.delete,
        'http://localhost:3010/cars/' + encodeURIComponent(carId),
      ),
    );

    expect(iterator.next().value).toEqual(
      put(createRefreshCarsRequestAction()),
    );
  });

});
