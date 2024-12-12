"use client";
import { usePathname } from "next/navigation";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import WaveStyle from "./wave.style";

interface WaveContextValue {
  onWave: (callback: () => void) => void;
}

const WaveContext = createContext<WaveContextValue | null>(null);

export const WaveProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const path = usePathname();
  const [wave, setWave] = useState(false);
  const waveRef = useRef<HTMLDivElement>(null);

  const waveAni = path === "/" ? (wave ? "wave-start" : "") : "wave-end";

  const onWave = (callback: () => void) => {
    if (waveRef.current) {
      setWave(true);

      const waveAnimationEnd = () => {
        callback();
        waveRef.current!.removeEventListener("animationend", waveAnimationEnd);
      };

      waveRef.current.addEventListener("animationend", waveAnimationEnd);
    }
  };

  useEffect(() => {
    setWave(false);
  }, [path]);

  return (
    <WaveContext.Provider
      value={{
        onWave,
      }}
    >
      {children}

      <WaveStyle.Container ref={waveRef} className={waveAni}>
        <WaveStyle.Wave
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="7" />
            <use xlinkHref="#gentle-wave" x="48" y="5" />
            <use xlinkHref="#gentle-wave" x="48" y="3" />
            <use xlinkHref="#gentle-wave" x="48" y="0" />
          </g>
        </WaveStyle.Wave>

        <WaveStyle.Box />
      </WaveStyle.Container>
    </WaveContext.Provider>
  );
};

const useWave = () => {
  const wave = useContext(WaveContext);
  if (!wave) {
    throw new Error("Cannot find WaveProvider");
  }

  return wave;
};

export default useWave;
