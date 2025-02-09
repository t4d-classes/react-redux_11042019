import { bindActionCreators } from 'redux';

import {
  createAppendCarAction, createReplaceCarAction,
  createEditCarAction,
} from './carToolActions';

export const mapStateToProps = ({ cars, editCarId }) => ({ cars, editCarId });

export const mapDispatchToProps = dispatch => bindActionCreators({
  appendCar: createAppendCarAction,
  replaceCar: createReplaceCarAction,
  editCar: createEditCarAction,
}, dispatch);
