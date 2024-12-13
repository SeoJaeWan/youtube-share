import SoundBarStyle from "./soundBar.style";
import { InputHTMLAttributes } from "react";

const SoundBar = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { value = 0, ...rest } = props;

  const trackBackground = `linear-gradient(
      to right,
      ${"#FFFFFF"} ${value}%,
      ${"rgba(255, 255, 255, 0.4)"} ${value}%
    )`;

  return (
    <SoundBarStyle.Container>
      <SoundBarStyle.Input
        type={"range"}
        min={0}
        max={100}
        step={1}
        {...rest}
        value={value}
        $trackBackground={trackBackground}
      />
    </SoundBarStyle.Container>
  );
};

export default SoundBar;
