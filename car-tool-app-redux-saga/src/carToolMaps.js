import { bindActionCreators } from 'redux';

import {
  createRefreshCarsRequestAction, createAppendCarRequestAction,
  createReplaceCarRequestAction, createDeleteCarRequestAction,
  createEditCarAction, createCancelCarAction
} from './carToolActions';

export const mapStateToProps = ({ cars, editCarId }) => ({ cars, editCarId });

export const mapDispatchToProps = dispatch => bindActionCreators({
  refreshCars: createRefreshCarsRequestAction,
  appendCar: createAppendCarRequestAction,
  replaceCar: createReplaceCarRequestAction,
  deleteCar: createDeleteCarRequestAction,
  editCar: createEditCarAction,
  cancelCar: createCancelCarAction,
}, dispatch);
