"use client";
import List from "@/components/molecules/common/list";
import ClientStyle from "./client.style";
import AddMusic from "@/components/organisms/common/addMusic";
import Controller from "@/components/molecules/client/controller";
import { useEffect } from "react";
import { joinRoom, playList, playMusic } from "@/socket";
import { useParams } from "next/navigation";
import useWave from "@/hooks/useWave";
import { useYoutube } from "@/hooks/useYoutube";

const ClientTemplate = () => {
  const params = useParams<{ id: string }>();
  const { onWave } = useWave();
  const { playerListUpdate, playerMusicUpdate } = useYoutube();

  useEffect(() => {
    joinRoom(params.id, ({ status }) => {
      if (status === "fail") {
        alert("방이 존재하지 않습니다.");
      } else {
        onWave();
      }
    });
  }, [params, onWave]);

  useEffect(() => {
    playList(playerListUpdate);
    playMusic(playerMusicUpdate);
  }, [playerListUpdate, playerMusicUpdate]);

  return (
    <ClientStyle.Container>
      <ClientStyle.Controller>
        <Controller />
      </ClientStyle.Controller>
      <ClientStyle.List>
        <List type={"client"} />
        <AddMusic />
      </ClientStyle.List>
    </ClientStyle.Container>
  );
};

export default ClientTemplate;
