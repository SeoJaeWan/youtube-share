import Play from "@/components/atoms/admin/play";
import ControllerStyle from "./controller.style";
import ListOption from "@/components/atoms/admin/listOption";
import SoundBar from "@/components/atoms/admin/soundBar";
import SlideText from "@/components/atoms/common/slideText";
import TrackController from "@/components/atoms/common/trackController";
import { useYoutube } from "@/hooks/useYoutube";
import { useParams } from "next/navigation";
import { useAlert } from "@/hooks/useAlert";

const Dump = {
  title: "노래를 추가해주세요.",
};

const Controller = () => {
  const { id } = useParams<{ id: string }>();
  const { current, shuffleList, loopList } = useYoutube();
  const { addMessage } = useAlert();

  const playing = current || Dump;

  const handleCopyLink = () => {
    const textArea = document.createElement("textarea");
    textArea.value = `${window.location.origin}/client/${id}`;

    document.body.prepend(textArea);
    textArea.select();

    try {
      document.execCommand("copy");
      addMessage({
        message: "링크가 복사되었습니다.",
        type: "notification",
        onConfirm: () => {
          textArea.remove();
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      textArea.remove();
    }
  };

  return (
    <ControllerStyle.Container>
      <ControllerStyle.TopController>
        <TrackController />

        <ControllerStyle.PlayingBox>
          <ListOption type="link" onClick={handleCopyLink} />
          <ListOption type="shuffle" isActive onClick={shuffleList} />
          <ListOption type="loop" isActive onClick={loopList} />
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
