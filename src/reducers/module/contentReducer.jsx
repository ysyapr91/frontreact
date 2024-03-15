const SET_PAGE = 'content/SET_PAGE';
const GET_PAGE = 'content/GET_PAGE';
const SET_MAIN_TAB = 'content/SET_MAIN_TAB';
const GET_MAIN_TAB = 'content/GET_MAIN_TAB';
const GET_MAIN_TAB_LIST = 'content/GET_MAIN_TAB_LIST';
const SET_DATA = 'content/SET_DATA';
const GET_DATA = 'content/GET_DATA';

export const setPage = data => ({ type: SET_PAGE, payload: data});
export const getPage = data => ({ type: GET_PAGE, payload: data});
export const setMainTab = data => ({ type: SET_MAIN_TAB, payload: data});
export const getMainTab = data => ({ type: GET_MAIN_TAB, payload: data});
export const getMainTabList = data => ({ type: GET_MAIN_TAB_LIST, payload: data});
export const setData = data => ({ type: SET_DATA, payload: data});
export const GetData = data => ({ type: GET_DATA, payload: data});

const initState = {
    page: "Home",
    pageList: [],
    mainTab: "",
    mainTabList: [],
    data: {},
};

export default function contentReducer(state = initState, action) {
    const param = {...state};

    switch(action.type) {
        case SET_PAGE:
            param.pageList.push(action.payload);
            param.page = action.payload;
            return {};

        case GET_PAGE:
            return param.page;

        case SET_MAIN_TAB:
            param.mainTab = action.payload;
            return {};

        case GET_MAIN_TAB:
            return param.mainTab;

        case GET_MAIN_TAB_LIST:
            return param.mainTabList;

        case SET_DATA:
            if(typeof action.payload == "object") {
                Object.assign(param.data, action.payload);
            }
            return {};

        case GET_DATA:
            return param.data;

        default:
            return param;
    }
}
