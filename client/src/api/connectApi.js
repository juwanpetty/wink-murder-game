import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:5000/");

export const connect = cb => {
  socket.on("chat", message => {
    console.log(message);
    cb(message);
  });
};
