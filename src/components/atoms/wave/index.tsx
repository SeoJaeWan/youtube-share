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
        console.log("!!!!", path);
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

      <WaveStyle.Container ref={waveRef} className={waveAni} />
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
