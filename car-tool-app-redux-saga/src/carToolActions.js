export const REFRESH_CARS_REQUEST = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE = 'REFRESH_CARS_DONE';

export const APPEND_CAR_REQUEST = 'APPEND_CAR_REQUEST';
export const REPLACE_CAR_REQUEST = 'REPLACE_CAR_REQUEST';
export const DELETE_CAR_REQUEST = 'DELETE_CAR_REQUEST';
export const EDIT_CAR = 'EDIT_CAR';
export const CANCEL_CAR = 'CANCEL_CAR';

export const createRefreshCarsRequestAction = () => ({ type: REFRESH_CARS_REQUEST });
export const createRefreshCarsDoneAction = cars => ({ type: REFRESH_CARS_DONE, payload: { cars } });
export const createAppendCarRequestAction = car => ({ type: APPEND_CAR_REQUEST, payload: { car } });
export const createReplaceCarRequestAction = car => ({ type: REPLACE_CAR_REQUEST, payload: { car } });
export const createDeleteCarRequestAction = carId => ({ type: DELETE_CAR_REQUEST, payload: { carId } });
export const createEditCarAction = carId => ({ type: EDIT_CAR, payload: { carId } });
export const createCancelCarAction = () => ({ type: CANCEL_CAR });