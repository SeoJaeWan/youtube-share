"use client";
import Logo from "@/components/atoms/common/logo";
import HomeStyle from "./home.style";
import Button from "@/components/atoms/common/button";
import useWave from "@/hooks/useWave";
import { useRouter } from "next/navigation";
import { createRoom } from "@/socket";

const HomeTemplate = () => {
  const { onWave } = useWave();
  const router = useRouter();

  const handleCreateRoom = () => {
    createRoom(({ id }: { id: string }) => {
      onWave(() => {
        router.push(`/admin/${id}`);
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
    </HomeStyle.Container>
  );
};

export default HomeTemplate;
