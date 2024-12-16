import { Server } from "socket.io";
import { getUserList } from "./utils/socketUtils";
import { HopeMusic } from "../types/global";

const createSocket = (io: Server) => {
  io.on("connection", (socket) => {
    let room: string = "";
    let isAdmin: boolean = false;

    const getId = () => {
      let id;

      do {
        id = Math.random().toString(36).substr(2, 9);
      } while (
        io.sockets.adapter.rooms.get(id) &&
        io.sockets.adapter.rooms.get(id)!.size > 0
      );

      return id;
    };

    socket.on("create", () => {
      const id = getId();

      socket.join(id);
      socket.emit("enter", { id, status: "success" });

      isAdmin = true;
      room = id;
    });

    socket.on("join", (id) => {
      const ids = io.sockets.adapter.rooms.get(id);

      if (!ids || ids.size < 0) {
        return socket.emit("enter", { id, status: "fail" });
      }

      const admin = Array.from(ids)[0];

      socket.join(id);
      socket.emit("enter", { id, status: "success" });

      room = id;

      io.to(admin).emit("join");
    });

    socket.on("check", () => {
      const ids = io.sockets.adapter.rooms.get(room)!;

      if (room) {
        const firstId = Array.from(ids)[0];

        if (socket.id === firstId) {
          return socket.emit("checked", true);
        }
      }

      socket.emit("checked", false);
    });

    socket.on("disconnect", () => {
      if (room) {
        const ids = io.sockets.adapter.rooms.get(room);
        if (ids) {
          if (isAdmin) {
            io.to(room).emit("bomb");

            ids.forEach((id) => {
              io.sockets.sockets.get(id)!.leave(room);
            });
          }
          room = "";
        }
      }
    });

    socket.on("addList", async (hopeMusic: HopeMusic) => {
      const userList = await getUserList(io, room);

      if (userList.length < 0) {
        return socket.emit("no_room", room);
      }

      const adminId = userList[0];

      io.to(adminId).emit("addedList", hopeMusic);
    });

    socket.on("updateList", (playingList: HopeMusic[]) => {
      io.to(room).emit("playList", playingList);
    });

    socket.on("updateMusic", (hopeMusic: HopeMusic) => {
      io.to(room).emit("playMusic", hopeMusic);
    });
  });
};

export default createSocket;
