import Play from "@/components/atoms/admin/play";
import ControllerStyle from "./controller.style";
import ListOption from "@/components/atoms/admin/listOption";
import SoundBar from "@/components/atoms/admin/soundBar";
import SlideText from "@/components/atoms/common/slideText";

const Controller = () => {
  return (
    <ControllerStyle.Container>
      <ControllerStyle.PlayingBox>
        <ListOption type="loop" active />
        <ListOption type="shuffle" />
      </ControllerStyle.PlayingBox>
      {/*  */}
      <ControllerStyle.InfoBox>
        <ControllerStyle.LeftController>
          <ControllerStyle.MusicTitle>
            <SlideText>
              Music TitleMusic TitleMusic TitleMusic TitleMusic TitleMusic
              TitleMusic TitleMusic TitleMusic Title
            </SlideText>
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
