import * as common from "utils/js/common";

const SET_PAGE = 'content/SET_PAGE';
const SET_DATA = 'content/SET_DATA';
const COUNTING_UP = 'content/COUNTING_UP';
const COUNTING_DOWN = 'content/COUNTING_DOWN';

export const setPage = data => ({ type: SET_PAGE, payload: data});
export const setData = data => ({ type: SET_DATA, payload: data});
export const countingUp = i => ({ type: COUNTING_UP, payload: i});
export const countingDown = i => ({ type: COUNTING_DOWN, payload: i});

const initState = {
    page: "Home",
    data: {},
    pageList: [],
    countingPage: 0
};

export default function contentReducer(state = initState, action) {
    const param = {...state};

    switch(action.type) {
        case SET_PAGE:
            param.pageList.push(action.payload);
            param.page = action.payload;
            return param;

        case SET_DATA:
            let payload = action.payload;
            if(typeof payload == "object") {
                Object.assign(param.data, payload);
            }
            
            return param;
    
        case COUNTING_UP:
            param.countingPage++;
            return null;
            
        case COUNTING_DOWN:
            param.countingPage--;
            return null;

        default:
            return param;
    }

}
