import { Server } from "socket.io";

export const getUserList = async (io: Server, id: string) => {
  const sockets = await io.in(id).fetchSockets();

  return sockets.map((socket) => socket.id);
};
