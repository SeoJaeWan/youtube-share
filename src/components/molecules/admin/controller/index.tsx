import Play from "@/components/atoms/admin/play";
import ControllerStyle from "./controller.style";
import ListOption from "@/components/atoms/admin/listOption";
import SoundBar from "@/components/atoms/admin/soundBar";
import SlideText from "@/components/atoms/common/slideText";
import TrackController from "@/components/atoms/common/trackController";
import { useAlert } from "@/hooks/useAlert";

const Controller = () => {
  const { addMessage } = useAlert();

  const handleAdd = () => {
    addMessage({
      message: "저장된 리스트가 있어요.\n저장된 리스트를 불러오시겠습니까?",
      type: "single",
      onConfirm: () => {
        console.log("confirm");
      },
    });
  };

  const handleTest2 = () => {
    addMessage({
      message: "저장된 리스트가 있어요.\n저장된 리스트를 불러오시겠습니까?",
      type: "multiple",
      onConfirm: () => {
        console.log("confirm");
      },
      onCancel: () => {
        console.log("cancel");
      },
    });
  };

  return (
    <ControllerStyle.Container>
      <ControllerStyle.TopController>
        <TrackController />

        <ControllerStyle.PlayingBox>
          <ListOption type="loop" active onClick={handleAdd} />
          <ListOption type="shuffle" onClick={handleTest2} />
        </ControllerStyle.PlayingBox>
      </ControllerStyle.TopController>
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
