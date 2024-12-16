"use client";
import List from "@/components/molecules/common/list";
import ClientStyle from "./client.style";
import AddMusic from "@/components/organisms/common/addMusic";
import Controller from "@/components/molecules/client/controller";
import { useEffect } from "react";
import { bombRoom, joinRoom, playList, playMusic } from "@/socket";
import { useParams, useRouter } from "next/navigation";
import useWave from "@/hooks/useWave";
import { useYoutube } from "@/hooks/useYoutube";
import { useAlert } from "@/hooks/useAlert";

const ClientTemplate = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const { onWave } = useWave();
  const { addMessage } = useAlert();
  const { playerListUpdate, playerMusicUpdate } = useYoutube();

  useEffect(() => {
    joinRoom(params.id, ({ status }) => {
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
      }
    });
  }, [params, router, onWave, addMessage]);

  useEffect(() => {
    playList(playerListUpdate);
    playMusic(playerMusicUpdate);
    bombRoom(() => {
      addMessage({
        message: "방장이 방을 나갔습니다.",
        type: "single",
        onConfirm: () => {
          router.push("/");
        },
      });
    });
  }, [router, playerListUpdate, playerMusicUpdate, addMessage]);

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
