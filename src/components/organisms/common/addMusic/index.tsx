import useTrackManager from "@/store/trackManager";
import AddMusicStyle from "./addMusic.style";
import MusicForm from "@/components/molecules/common/musicForm";

const AddMusic = () => {
  const { duration, opacityDelay, isList } = useTrackManager();

  const className = isList ? "hide" : "show";
  const delay = isList ? 0 : opacityDelay;

  return (
    <AddMusicStyle.Container
      $duration={duration}
      $delay={delay}
      className={className}
    >
      <MusicForm />
    </AddMusicStyle.Container>
  );
};

export default AddMusic;
