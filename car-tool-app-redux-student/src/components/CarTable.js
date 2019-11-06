import React from 'react';
import PropTypes from 'prop-types';

import { carsPropType } from '../propTypes/carPropTypes';
import { CarViewRow } from '../components/CarViewRow';
import { CarEditRow } from '../components/CarEditRow';

export const CarTable = ({
  cars, editCarId,
  ViewRow, EditRow,
  onEditCar: editCar,
  onDeleteCar: deleteCar,
  onSaveCar: saveCar,
  onCancelCar: cancelCar
}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car => {
          if (car.id === editCarId) {
            return <EditRow key={car.id} car={car} onSaveCar={saveCar} onCancelCar={cancelCar}  />
          } else {
            return <ViewRow key={car.id} car={car} onEditCar={editCar} onDeleteCar={deleteCar} />
          }
        })}
      </tbody>
    </table>
  );

};

CarTable.defaultProps = {
  ViewRow: CarViewRow,
  EditRow: CarEditRow,
};

CarTable.propTypes = {
  cars: carsPropType.isRequired,
  editCarId: PropTypes.number.isRequired,
  ViewRow: PropTypes.elementType.isRequired,
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};