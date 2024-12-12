import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import SoundBarStyle from "./soundBar.style";
import { InputHTMLAttributes } from "react";

const SoundBar = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { value, ...rest } = props;

  return (
    <SoundBarStyle.Container>
      {value === 0 ? <HiMiniSpeakerXMark /> : <HiMiniSpeakerWave />}

      <SoundBarStyle.Input
        type={"range"}
        min={0}
        max={100}
        step={1}
        {...rest}
        value={value}
      />
    </SoundBarStyle.Container>
  );
};

export default SoundBar;
