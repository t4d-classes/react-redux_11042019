import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

import { carPropType } from '../propTypes/carPropTypes';

export const CarEditRow = ({
  car,
  onSaveCar: saveCar,
  onCancelCar: cancelCar }) => {

  const [ editCarForm, change ] = useForm({ ...car });

return <tr>
    <td>{car.id}</td>
    <td><input type="text" id="make-input" name="make"
        value={editCarForm.make} onChange={change} /></td>
    <td><input type="text" id="model-input" name="model"
        value={editCarForm.model} onChange={change} /></td>
    <td><input type="number" id="year-input" name="year"
        value={editCarForm.year} onChange={change} /></td>
    <td><input type="text" id="color-input" name="color"
        value={editCarForm.color} onChange={change} /></td>
    <td><input type="number" id="price-input" name="price"
        value={editCarForm.price} onChange={change} /></td>
    <td>
      <button type="button" onClick={() => saveCar({ ...editCarForm, id: car.id })}>Save</button>
      <button type="button" onClick={cancelCar}>Cancel</button>
    </td>
  </tr>;

};

CarEditRow.propTypes = {
  car: carPropType.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};