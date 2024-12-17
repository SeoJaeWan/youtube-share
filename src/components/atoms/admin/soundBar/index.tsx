import { INIT_VOLUME, useYoutube } from "@/hooks/useYoutube";
import SoundBarStyle from "./soundBar.style";
import { useState } from "react";

const SoundBar = () => {
  const [value, setValue] = useState(INIT_VOLUME);
  const { updateVolume } = useYoutube();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberValue = parseInt(e.target.value);
    setValue(numberValue);
    updateVolume(numberValue);
  };

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
        value={value}
        onChange={handleChange}
        $trackBackground={trackBackground}
      />
    </SoundBarStyle.Container>
  );
};

export default SoundBar;
