import ControllerStyle from "./controller.style";

const Controller = () => {
  return (
    <ControllerStyle.Container>
      <ControllerStyle.PlayingBox></ControllerStyle.PlayingBox>
      <ControllerStyle.InfoBox>
        <ControllerStyle.LeftController>
          <ControllerStyle.MusicTitle>Music Title</ControllerStyle.MusicTitle>
        </ControllerStyle.LeftController>
      </ControllerStyle.InfoBox>
    </ControllerStyle.Container>
  );
};

export default Controller;
