import {rootConstants} from "./rootReducer";

export const updatePros = (id, value) => {
    return {
        type: rootConstants.UPDATE_PROS,
        payload: {id: id, value: value}
    }
};

export const updateCons = (id, value) => {
    return {
        type: rootConstants.UPDATE_CONS,
        payload: {id: id, value: value}
    }
};

export const updateActivePros = (id) => {
    return {
        type: rootConstants.UPDATE_ACTIVE_PROS,
        id: id
    }
};

export const updateActiveCons = (id) => {
    return {
        type: rootConstants.UPDATE_ACTIVE_CONS,
        id: id
    }
};
