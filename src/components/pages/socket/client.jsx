//import { socket } from 'utils';


const Client = () => {

  const send = (msg) => {
    //socket().send("test msg", (res) => { console.log(res); });
  };

  return (
    <>
      <div>Socket Test</div>

      <br/>

      <table>
        <tbody>
          <tr>
            <th>msg</th>
            <td><input type='text' id='msg' onChange={send}></input></td>
          </tr>
        </tbody>
      </table>

      <button onClick={() => send()}>Send</button>
    </>
  );
};

export default Client;