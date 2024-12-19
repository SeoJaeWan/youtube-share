"use client";

import { HopeMusic } from "@/types/global";
import { io } from "socket.io-client";

const socket = io();

socket.connect();

socket.on("connect", () => {
  console.log("socket connected");
});

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

const observeJoin = (callback: () => void) => {
  socket.on("join", callback);
};

const check = (callback: (check: boolean) => void) => {
  socket.emit("check");
  socket.on("checked", callback);
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

const bombRoom = (callback: () => void) => {
  socket.on("bomb", callback);
};

const clearSocket = () => {
  socket.off("enter");
  socket.off("join");
  socket.off("checked");
  socket.off("addedList");
  socket.off("playList");
  socket.off("playMusic");
  socket.off("bomb");
};

export {
  createRoom,
  joinRoom,
  observeJoin,
  check,
  addList,
  addedList,
  notificationList,
  playList,
  notificationMusic,
  playMusic,
  bombRoom,
  clearSocket,
};
