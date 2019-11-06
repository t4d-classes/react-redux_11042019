import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

import { carPropType } from '../propTypes/carPropTypes';

export class CarEditRow extends React.Component {

  // state = { ...car }

  constructor(props) {
    super(props);

    this.state = { ...this.props.car };

    this.change = this.change.bind(this);
    // this.saveCar = this.saveCar.bind(this);
  }

  componentDidMount() {
    console.log('edit car row came to life...');
  }

  componentWillUnmount() {
    console.log('edit car row came to death...');
  }

  change({ target: { name, value, type }}) {
    this.setState({
      [ name ]: type === 'number'
        ? Number(value)
        : value,
    });
  }

  saveCar = () => {
    this.props.onSaveCar({
      ...this.state,
      id: this.props.car.id,
    });
  }

  render() {

    return <tr>
        <td>{this.props.car.id}</td>
        <td><input type="text" id="make-input" name="make"
            value={this.state.make} onChange={this.change} /></td>
        <td><input type="text" id="model-input" name="model"
            value={this.state.model} onChange={this.change} /></td>
        <td><input type="number" id="year-input" name="year"
            value={this.state.year} onChange={this.change} /></td>
        <td><input type="text" id="color-input" name="color"
            value={this.state.color} onChange={this.change} /></td>
        <td><input type="number" id="price-input" name="price"
            value={this.state.price} onChange={this.change} /></td>
        <td>
          <button type="button" onClick={this.saveCar}>Save</button>
          <button type="button" onClick={this.props.onCancelCar}>Cancel</button>
        </td>
      </tr>;
  }
}


CarEditRow.propTypes = {
  car: carPropType.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};