"use client";
import Logo from "@/components/atoms/logo";
import HomeStyle from "./home.style";
import Button from "@/components/atoms/button";
import useWave from "@/components/atoms/wave";
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
