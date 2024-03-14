import * as common from "utils/js/common";

const SET_PAGE = 'content/SET_PAGE';
const SET_DATA = 'content/SET_DATA';

export const setPage = data => ({ type: SET_PAGE, payload: data});
export const setData = data => ({ type: SET_DATA, payload: data});

const initState = {
    page: "Home",
    data: {},
    pageList: []
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

        default:
            return param;
    }

}
