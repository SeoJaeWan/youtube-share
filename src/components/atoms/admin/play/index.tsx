import { useYoutube } from "@/hooks/useYoutube";
import PlayStyle from "./play.style";
import { useEffect, useState } from "react";

const Play = () => {
  const { playing, current, play, stop, currentDuration, currentTime } =
    useYoutube();
  const [percent, setPercent] = useState(0);

  const handleClick = () => {
    if (playing) {
      stop();
    } else {
      play();
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (playing) {
      interval = setInterval(() => {
        setPercent(currentTime() / currentDuration());
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [playing, current, currentDuration, currentTime]);

  return (
    <PlayStyle.Container onClick={handleClick}>
      <PlayStyle.StateBar
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 104.06 104.06"
        $percent={percent}
      >
        <circle className="state" cx="52.03" cy="52.03" r="42.03" />
        <g className="button">
          <circle cx="52.03" cy="52.03" r="40.03" />

          <rect
            x="38"
            y="37"
            width="28"
            height="28"
            fill="white"
            className={playing ? "show" : "hidden"}
          />

          <path
            d="M42.87,36.51v28.52c0,.6.61.98,1.1.68l22.61-14.26c.48-.3.48-1.04,0-1.34l-22.61-14.26c-.49-.31-1.1.07-1.1.67Z"
            className={playing ? "hidden" : "show"}
          />
        </g>
      </PlayStyle.StateBar>
    </PlayStyle.Container>
  );
};

export default Play;
