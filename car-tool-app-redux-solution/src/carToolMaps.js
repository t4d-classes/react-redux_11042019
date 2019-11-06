import { bindActionCreators } from 'redux';

import {
  createAppendCarAction, createReplaceCarAction, createDeleteCarAction,
  createEditCarAction, createCancelCarAction
} from './carToolActions';

export const mapStateToProps = ({ cars, editCarId }) => ({ cars, editCarId });

export const mapDispatchToProps = dispatch => bindActionCreators({
  appendCar: createAppendCarAction,
  replaceCar: createReplaceCarAction,
  deleteCar: createDeleteCarAction,
  editCar: createEditCarAction,
  cancelCar: createCancelCarAction,
}, dispatch);
