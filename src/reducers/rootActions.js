import {rootConstants} from "./rootReducer";

export const updatePros = (id, value) => ({ type: rootConstants.UPDATE_PROS, payload: {id: id, value: value} });

export const updateCons = (id, value) => ({ type: rootConstants.UPDATE_CONS, payload: {id: id, value: value} });

export const updateActivePros = (id) => ({ type: rootConstants.UPDATE_ACTIVE_PROS, id: id});

export const updateActiveCons = (id) => ({ type: rootConstants.UPDATE_ACTIVE_CONS, id: id});
