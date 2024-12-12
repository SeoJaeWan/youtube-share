"use client";
import Logo from "@/components/atoms/common/logo";
import HomeStyle from "./home.style";
import Button from "@/components/atoms/common/button";
import useWave from "@/hooks/useWave";
import { useRouter } from "next/navigation";

const HomeTemplate = () => {
  const { onWave } = useWave();
  const router = useRouter();

  const handleClickPlaying = () => {
    onWave(() => {
      router.push("/admin/123");
    });
  };

  return (
    <HomeStyle.Container>
      <Logo />

      <HomeStyle.FadeButton>
        <Button effect onClick={handleClickPlaying}>
          Playing
        </Button>
      </HomeStyle.FadeButton>
    </HomeStyle.Container>
  );
};

export default HomeTemplate;
