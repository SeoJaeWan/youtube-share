import SlideText from "@/components/atoms/common/slideText";
import ControllerStyle from "./controller.style";
import TrackController from "@/components/atoms/common/trackController";

const Controller = () => {
  return (
    <ControllerStyle.Container>
      <ControllerStyle.Title>
        <SlideText>Title~~</SlideText>
      </ControllerStyle.Title>

      <TrackController />
    </ControllerStyle.Container>
  );
};

export default Controller;
