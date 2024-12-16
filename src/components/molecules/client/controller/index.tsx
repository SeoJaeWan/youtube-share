import SlideText from "@/components/atoms/common/slideText";
import ControllerStyle from "./controller.style";
import TrackController from "@/components/atoms/common/trackController";
import { useYoutube } from "@/hooks/useYoutube";

const Dump = {
  title: "재생 중인 음악이 없습니다.",
};

const Controller = () => {
  const { current } = useYoutube();

  const playing = current || Dump;

  return (
    <ControllerStyle.Container>
      <ControllerStyle.Title>
        <SlideText>{playing.title}</SlideText>
      </ControllerStyle.Title>

      <TrackController />
    </ControllerStyle.Container>
  );
};

export default Controller;
