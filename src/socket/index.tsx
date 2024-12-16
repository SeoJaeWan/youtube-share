"use client";

import { HopeMusic } from "@/types/global";
import { io } from "socket.io-client";

const socket = io();

socket.connect();

const createRoom = (
  callback: ({ id, status }: { id: string; status: string }) => void
) => {
  socket.emit("create");
  socket.on("enter", callback);
};

const joinRoom = (
  id: string,
  callback: ({ id, status }: { id: string; status: string }) => void
) => {
  socket.emit("join", id);
  socket.on("enter", callback);
};

const check = (callback: (check: boolean) => void) => {
  socket.emit("check");
  socket.on("checked", callback);
};

const disconnect = () => {
  socket.disconnect();
};

const addList = (hopeMusic: HopeMusic) => {
  socket.emit("addList", hopeMusic);
};

const addedList = (callback: (hopeMusic: HopeMusic) => void) => {
  socket.on("addedList", callback);
};

const notificationList = (hopeMusicList: HopeMusic[]) => {
  socket.emit("updateList", hopeMusicList);
};

const notificationMusic = (hopeMusic: HopeMusic | null) => {
  socket.emit("updateMusic", hopeMusic);
};

const playList = (callback: (hopeMusicList: HopeMusic[]) => void) => {
  socket.on("playList", callback);
};

const playMusic = (callback: (hopeMusic: HopeMusic | null) => void) => {
  socket.on("playMusic", callback);
};

export {
  createRoom,
  joinRoom,
  check,
  disconnect,
  addList,
  addedList,
  notificationList,
  playList,
  notificationMusic,
  playMusic,
};
