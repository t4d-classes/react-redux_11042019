import React from 'react';
import PropTypes from 'prop-types';

import { carPropType } from '../propTypes/carPropTypes';

export const CarViewRow = ({ car, onDeleteCar, onEditCar }) => {

  const editCar = () => {
    onEditCar(car.id);
  };

  const deleteCar = () => {
    onDeleteCar(car.id);
  };

return <tr>
    <td>{car.id}</td>
    <td>{car.make}</td>
    <td>{car.model}</td>
    <td>{car.year}</td>
    <td>{car.color}</td>
    <td>{car.price}</td>
    <td>
      <button type="button" onClick={editCar}>Edit</button>
      <button type="button" onClick={deleteCar}>Delete</button>
    </td>
  </tr>;

};

CarViewRow.propTypes = {
  car: carPropType.isRequired,
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
};