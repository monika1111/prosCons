export const rootConstants = {
    UPDATE_ACTIVE_PROS: 'UPDATE_ACTIVE_PROS',
    UPDATE_PROS: 'UPDATE_PROS',
    UPDATE_ACTIVE_CONS: 'UPDATE_ACTIVE_CONS',
    UPDATE_CONS: 'UPDATE_CONS'
};


const initialState = {
    pros: [
        {id: 1, value: "It's really tasty"},
        {id: 2, value: "It's really tasty"},
        {id: 3, value: "It's really tasty"},
        {id: 4, value: "It's really tasty"},
        {id: 5, value: "It's really tasty"},
        {id: 6, value: ""}
    ],
    activePros: null,
    activeCons: null,
    cons: [
        {id: 1, value: "Makes me fat"},
        {id: 2, value: "Too expensive"},
        {id: 6, value: ""}
    ]
};

const updateActivePros = (state, {id}) => {
  return {...state, activePros : id};
};

const updateActiveCons = (state, {id}) => {
    return {...state, activeCons : id};
};

const updateConsOrPros = (state, {payload}, type) => {
    const data = JSON.parse(JSON.stringify(state[type]));
    data.some((item, index) => {
        if(item.id === payload.id){
            if(payload.value == ''){
                data.splice(index, 1);
            } else{
                if(data.length == index + 1) {
                    data.push({id: payload.id + 1, value: ''});
                }
                Object.assign(item,{value: payload.value});
            }
            return true;
        }
        return false;
    });

    return   {...state, [type]: data};
};

const rootReducer = (state = initialState, action) => {
    if (action.type === rootConstants.UPDATE_ACTIVE_PROS) {
        return updateActivePros(state, action);
    }else if (action.type === rootConstants.UPDATE_PROS) {
        return updateConsOrPros(state, action, 'pros');
    }else if (action.type === rootConstants.UPDATE_ACTIVE_CONS) {
        return updateActiveCons(state, action);
    }else if (action.type === rootConstants.UPDATE_CONS) {
        return updateConsOrPros(state, action, 'cons');
    }else {
        return state
    }
};

export default rootReducer