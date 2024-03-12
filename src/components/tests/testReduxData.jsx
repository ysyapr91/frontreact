import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData } from 'reducers/module/treeDataReducer';


function TreeData() {
    const content = useSelector(state => state.content);
    const dispatch = useDispatch();

    const onData = (e) => {
        let k = e.target.getAttribute('name');
        let v = e.target.value;
        dispatch(setData({[k]: v}));
    }
    

    return (
    <>
        <input type="text" name="test1" onChange={onData}></input>
        <br/>
        <input type="text" name="test2" onChange={onData}></input>
    </>
    );
}

export default TreeData;