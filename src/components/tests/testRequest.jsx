import React, { useState } from 'react';
import { request } from 'utils';


const App = () => {

  const [param, setParam] = useState({
    url: '',
    data: {}
  });

  const call = () => {
    
    request().testGetAxios(param.url, param.data, (res) => {
      
    }) 
  };

  const onUrl = (e) => {
    setParam({
      ...param,
      url: e.target.value
    })
  }

  const onData = (e) => {
    console.log(e);

    return;

    setParam({
      ...param,
      data: e.target.value
    })
  }

  const chk = (e) => {
    console.log("request", request().getAxios);
    console.log("url", param.url);
    console.log("data", param.data);
  }

  const test = (url) => {
    request().testGetAxios('/typicode/demo/posts', {}, (res) => {
      
    }) 
  };

  return (
    <>
      <div>Request Test</div>

      <br/>

      <table>
        <tbody>
          <tr>
            <th>url</th>
            <td><input type='text' id='url' placeholder='url' onChange={onUrl}></input></td>
          </tr>
          <tr>
            <th>req</th>
            <td><textarea id='req' placeholder='request data' rows='10' cols='50'></textarea></td>
          </tr>
          <tr>
            <th>res</th>
            <td><textarea id='res' placeholder='response data' rows='10' cols='50'></textarea></td>
          </tr>
        </tbody>
      </table>

      <br/>

      <button onClick={() => call('')}>call</button>
      <button onClick={() => chk('')}>chk</button>
      <button onClick={() => test('')}>test</button>
    </>
  );
};

export default App;