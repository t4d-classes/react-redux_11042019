import React, { useState } from 'react';

import { carsPropType } from '../propTypes/carPropTypes';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';


export const CarTool = ({ headerText, cars: initialCars }) => {

  const [ cars, setCars ] = useState(initialCars);
  const [ editCarId, setEditCarId ] = useState(-1);


  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
    setEditCarId(-1);
  };

  const appendCar = (car) => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));
    setEditCarId(-1);
  };

  const replaceCar = (car) => {
    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = cars.concat();
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  };

  return <>
    <ToolHeader headerText={headerText} />
    <CarTable cars={cars} editCarId={editCarId}
      onEditCar={setEditCarId} onDeleteCar={deleteCar}
      onSaveCar={replaceCar} onCancelCar={() => setEditCarId(-1)} />
    <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
  </>;

};

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: carsPropType.isRequired,
};