import * as Pages from 'components/pages';
import * as Tests from 'components/tests';

const SET_PAGE = 'content/SET_PAGE';
const SET_TAB_IDX = 'content/SET_TAB_IDX';
const SET_DATA = 'content/SET_DATA';

export const setPage = data => ({ type: SET_PAGE, payload: data});
export const setTabIdx = data => ({ type: SET_TAB_IDX, payload: data});
export const setData = data => ({ type: SET_DATA, payload: data});

const initState = {
    page: "HOME",
    pageList: [],
    tabIdx: 1,
    tabList: [
        {page: "TEST", component: <Tests.TestReduxData />},
        {page: "HOME", component: <Pages.Home />},
        {page: "REQUEST", component: <Tests.TestRequest />},
        {page: "COUNT", component: <Tests.TestCount />},
    ],
    data: {}
};

export default function contentReducer(state = initState, action) {

    switch(action.type) {
        case SET_PAGE:
            return {
                ...state,
                pageList: [...state.pageList, action.payload],
                page: action.payload
            };

        case SET_TAB_IDX:
            return {
                ...state,
                tabIdx: action.payload
            };

        case SET_DATA:
            if (typeof action.payload === "object") {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        ...action.payload
                    }
                };
            }
            return state;

        default:
            return state;
    }
}
