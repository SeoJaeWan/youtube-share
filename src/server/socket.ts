import { Server, Socket } from "socket.io";
import { getUserList } from "./utils/socketUtils";
import { HopeMusic } from "../types/global";

const createSocket = (io: Server) => {
  io.on("connection", (socket) => {
    const rooms = [] as Socket[];
    let room: string = "";

    socket.on("create", () => {
      const id = Math.random().toString(36).substr(2, 9);

      socket.join(id);
      io.to(id).emit("users", 1);

      room = id;
    });

    socket.on("join", (id) => {
      rooms.length = 0;

      const ids = io.sockets.adapter.rooms.get(id);

      if (!ids || ids.size < 0) {
        return socket.emit("no_room", id);
      }

      socket.join(id);
      io.to(id).emit("users", ids.size + 1);

      room = id;
    });

    socket.on("disconnect", () => {
      if (room) {
        const ids = io.sockets.adapter.rooms.get(room)!;
        io.to(room).emit("users", ids.size - 1);

        socket.leave(room);
        room = "";
      }
    });

    socket.on(
      "addList",
      async ({ hopeMusic, id }: { hopeMusic: HopeMusic; id: string }) => {
        const userList = await getUserList(io, id);

        if (userList.length < 0) {
          return socket.emit("no_room", id);
        }

        const adminId = userList[0];

        io.to(adminId).emit("addList", hopeMusic);
      }
    );

    socket.on("playList", (playingList: HopeMusic[]) => {
      io.to(room).emit("playList", playingList);
    });
  });
};

export default createSocket;
