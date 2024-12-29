"use client";
import { useAlert } from "@/hooks/useAlert";
import useWave from "@/hooks/useWave";
import { useYoutube } from "@/hooks/useYoutube";
import {
  addedList,
  bombRoom,
  clearClientSocket,
  joinRoom,
  notificationList,
  notificationMusic,
  observeJoin,
  playList,
} from "@/socket";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PlayerStyle from "./player.style";
import Controller from "@/components/molecules/admin/controller";
import List from "@/components/molecules/common/list";
import AddMusic from "@/components/organisms/common/addMusic";
import { Type } from "@/types/global";

const PlayerTemplate = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [type, setType] = useState<Type | null>(null);

  const { onWave } = useWave();
  const { addMessage } = useAlert();
  const { list, current, playerListUpdate, initList, addMusic } = useYoutube();

  // join
  useEffect(() => {
    console.log("join");
    joinRoom(params.id, ({ status, type }) => {
      if (status === "fail") {
        addMessage({
          message: "방이 존재하지 않습니다.",
          type: "single",
          onConfirm: () => {
            router.push("/");
          },
        });
      } else {
        onWave();

        if (type === "admin") {
          console.log("????!!!");
          initList();
        } else {
          playList(playerListUpdate);
        }

        setType(type);
      }
    });
  }, [router, params.id, initList, onWave, addMessage, playerListUpdate]);

  useEffect(() => {
    console.log("router");
  }, [router]);

  useEffect(() => {
    console.log("params");
  }, [params.id]);

  // Client
  useEffect(() => {
    if (type === "client") {
      bombRoom((type) => {
        setType(type);
      });
    }

    return () => {
      clearClientSocket();
    };
  }, [type, router]);

  // Admin
  useEffect(() => {
    console.log(type);
    if (type === "admin") {
      addedList(addMusic);
      observeJoin(() => {
        console.log("join");
        notificationList(list);
        notificationMusic(current);
      });
    }
  }, [type, list, current, addMusic]);

  if (!type) return null;

  return (
    <PlayerStyle.Container>
      <PlayerStyle.Controller>
        <Controller type={type} />
      </PlayerStyle.Controller>
      <PlayerStyle.List>
        <List type={type} />
        <AddMusic />
      </PlayerStyle.List>
    </PlayerStyle.Container>
  );
};

export default PlayerTemplate;
