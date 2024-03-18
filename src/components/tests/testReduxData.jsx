import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { setData, getTab, getTabList} from 'reducers/module/contentReducer';

function TestReduxData() {
    const content = useSelector(state => state.content);
    const dispatch = useDispatch();

    const onData = (e) => {

    }
    

    return (
        <>
            <br/><br/><br/>
            <input type="text" name="test1" onChange={onData}></input>
            <br/>
            <input type="text" name="test2" onChange={onData}></input>
        </>
    );
}

export default TestReduxData;