import Play from "@/components/atoms/admin/play";
import ControllerStyle from "./controller.style";
import ListOption from "@/components/atoms/admin/listOption";
import SoundBar from "@/components/atoms/admin/soundBar";
import SlideText from "@/components/atoms/common/slideText";
import TrackController from "@/components/atoms/common/trackController";
import { useYoutube } from "@/hooks/useYoutube";

const Dump = {
  title: "노래를 추가해주세요.",
};

const Controller = () => {
  const { current, shuffleList, loopList } = useYoutube();

  const playing = current || Dump;

  return (
    <ControllerStyle.Container>
      <ControllerStyle.TopController>
        <TrackController />

        <ControllerStyle.PlayingBox>
          <ListOption type="loop" onClick={loopList} />
          <ListOption type="shuffle" onClick={shuffleList} />
        </ControllerStyle.PlayingBox>
      </ControllerStyle.TopController>
      {/*  */}
      <ControllerStyle.InfoBox>
        <ControllerStyle.LeftController>
          <ControllerStyle.MusicTitle>
            <SlideText>{playing.title}</SlideText>
          </ControllerStyle.MusicTitle>
          <SoundBar />
        </ControllerStyle.LeftController>
        {/*  */}
        <Play />
      </ControllerStyle.InfoBox>
    </ControllerStyle.Container>
  );
};

export default Controller;
