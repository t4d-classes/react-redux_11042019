import React from 'react';
// import PropTypes from 'prop-types';

import { carPropType, carsPropType } from '../propTypes/carPropTypes';

export const AltCarViewRow = ({ car }) => {

return <tr>
    <td>{car.id}</td>
    <td>{car.make}</td>
    <td>{car.model}</td>
    <td>{car.year}</td>
    <td>{car.color}</td>
    <td>${car.price}</td>
    <td></td>
  </tr>;

};

AltCarViewRow.propTypes = {
  car: carPropType.isRequired,
};