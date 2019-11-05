import React from 'react';

import { carsPropType } from '../propTypes/carPropTypes';
import { CarViewRow } from '../components/CarViewRow';

export const CarTable = ({
  cars,
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
        {cars.map(car => <CarViewRow key={car.id} car={car} />)}
      </tbody>
    </table>
  );

};

CarTable.propTypes = {
  cars: carsPropType.isRequired,
};