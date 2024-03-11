const GET_NUMBER = 'count/GET_NUMBER';
const INCREASE = 'count/INCREASE';
const DECREASE = 'count/DECREASE';

export const getNumber = data => ({ type: GET_NUMBER, payload: data});
export const increase = i => ({ type: INCREASE, payload: i});
export const decrease = i => ({ type: DECREASE, payload: i});

const initState = [];

export default function testCount(state = initState, action) {
    let copyState = [...state];
    console.log(copyState);

    switch(action.type){
        case GET_NUMBER:
            return copyState;

        case INCREASE:
            copyState[action.payload].num ++;
            return copyState;

        case DECREASE:
            copyState[action.payload].num --;
            return copyState;

        default:
            return state;
    }

}