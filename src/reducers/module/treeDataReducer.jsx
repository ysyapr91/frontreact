const SET_DATA = 'treeData/SET_DATA';

export const setData = data => ({ type: SET_DATA, payload: data});

const initState = {
    
};

export default function treeDataReducer(state = initState, action) {
    const param = {...state};

    switch(action.type) {
        case SET_DATA:
            let payload = action.payload;
            if(typeof payload == "object") {
                Object.assign(param.data, payload);
            }
            return param;
    
        default:
            return param;
    }

}
