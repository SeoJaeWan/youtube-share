"use client";
import Logo from "@/components/atoms/common/logo";
import HomeStyle from "./home.style";
import Button from "@/components/atoms/common/button";
import useWave from "@/hooks/useWave";
import { useRouter } from "next/navigation";
import { createRoom } from "@/socket";
import Github from "@/components/atoms/common/github";

const HomeTemplate = () => {
  const { onWave } = useWave();
  const router = useRouter();

  const handleCreateRoom = () => {
    createRoom(({ id }: { id: string }) => {
      onWave(() => {
        router.push(`/player/${id}`);
      });
    });
  };

  return (
    <HomeStyle.Container>
      <Logo />

      <HomeStyle.FadeButton>
        <Button effect onClick={handleCreateRoom}>
          Playing
        </Button>
      </HomeStyle.FadeButton>

      <HomeStyle.Github>
        <Github />
      </HomeStyle.Github>
    </HomeStyle.Container>
  );
};

export default HomeTemplate;
