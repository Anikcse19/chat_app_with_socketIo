const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const expressServer = http.createServer(app);
const io = new Server(expressServer);

io.on("connection", (socket) => {
  console.log("New User Connected");
  socket.on("chat", (msg) => {
    io.emit("chat_transfer", msg);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

PORT = 5001;
expressServer.listen(PORT, () => {
  console.log("Server listening at port", PORT);
});
