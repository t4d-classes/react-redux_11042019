import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

import { useCarToolStore } from '../hooks/useCarToolStore';


export const CarTool = (props) => {

  const { headerText } = props;

  const hookProps = useCarToolStore();

  const { 
    cars, editCarId, refreshCars, appendCar, replaceCar,
    deleteCar, editCar, cancelCar,
  } = props.cars ? props : hookProps;

  useEffect(() => {
    refreshCars();
  }, [ ]);

  return <>
    <ToolHeader headerText={headerText} />
    <CarTable cars={cars} editCarId={editCarId}
      onEditCar={editCar} onDeleteCar={deleteCar}
      onSaveCar={replaceCar} onCancelCar={cancelCar} />
    <CarForm buttonText="Add Car" onSubmitCar={appendCar} />
  </>;

};

CarTool.propTypes = {
  headerText: PropTypes.string.isRequired,
};