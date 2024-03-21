import { io } from 'socket.io-client';
const connect = io.connect(process.env.REACT_APP_SOCKET_SERVER);

export default function socket() {

    return {
        send: (msg) => {
            console.log(msg);
            socket.emit("send", { message: msg });
        }
    }
};