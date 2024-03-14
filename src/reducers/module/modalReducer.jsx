const INIT_LIST = 'modal/INIT_LIST';
const PUSH_LIST = 'modal/PUSH_LIST';

export const initList = d => ({ type: INIT_LIST, payload: d});
export const pushList = d => ({ type: PUSH_LIST, payload: d});


const initState = {
    list: [],
    count: 0
}

export default function modalReducer(state = initState, action) {
    const param = {...state};

    switch(action.type) {
        case INIT_LIST:
            param.list = [];
            return param;

        case PUSH_LIST:
            param.list.push(action.payload);
            return param;

        default:
            return param;
    }
}
