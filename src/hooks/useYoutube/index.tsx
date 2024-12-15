import { HopeMusic } from "@/types/global";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface YoutubeContextType {
  list: HopeMusic[];
  current: HopeMusic | null;
  playing: boolean;
  //
  play: () => void;
  stop: () => void;
  update: (idx: number) => void;
  remove: (time: string) => void;
  updateVolume: (volume: number) => void;
  currentTime: () => number;
  currentDuration: () => number;
  shuffleList: (shuffle: boolean) => void;
  loopList: (loop: boolean) => void;
}

export const INIT_VOLUME = 50;

const YoutubeContext = createContext<YoutubeContextType | null>(null);

const YoutubeProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [playing, setPlaying] = useState(false);
  const [list, setList] = useState<HopeMusic[]>([
    {
      title: "test",
      link: "QtFNIZV_RO8",
      time: "00:00",
    },
    {
      title: "test2",
      link: "QtFNIZV_RO8",
      time: "00:02",
    },
    {
      title: "test3",
      link: "QtFNIZV_RO8",
      time: "00:04",
    },
  ]);
  const listRef = useRef<HopeMusic[]>(list);
  const originList = useRef<HopeMusic[]>([
    {
      title: "test",
      link: "QtFNIZV_RO8",
      time: "00:00",
    },
    {
      title: "test2",
      link: "QtFNIZV_RO8",
      time: "00:02",
    },
    {
      title: "test3",
      link: "QtFNIZV_RO8",
      time: "00:04",
    },
  ]);

  const [current, setCurrent] = useState<HopeMusic | null>(null);
  const currentTurn = useRef(0);
  const player = useRef<YT.Player | null>(null);

  const readyPlayer = useCallback((event: YT.PlayerEvent) => {
    player.current = event.target;
    event.target.setVolume(INIT_VOLUME);
  }, []);

  const stateChange = useCallback((event: YT.PlayerStateChangeEvent) => {
    if (event.data === YT.PlayerState.ENDED) {
      const loop = localStorage.getItem("loop") === "true";
      let update = currentTurn.current + 1;
      const list = listRef.current;

      if (loop) {
        update = update % list.length;
      }

      if (update !== list.length) {
        const next = list[update];
        setCurrent(next);
        currentTurn.current = update;
        player.current?.loadVideoById(list[update].link);
      } else {
        setPlaying(false);
      }
    }

    if (event.data === YT.PlayerState.PAUSED) {
      setPlaying(false);
    }

    if (event.data === YT.PlayerState.PLAYING) {
      setPlaying(true);
    }
  }, []);

  const init = useCallback(() => {
    new window.YT.Player("player", {
      height: "360",
      width: "640",

      events: {
        onReady: readyPlayer,
        onStateChange: stateChange,
      },
    });
  }, [readyPlayer, stateChange]);

  const shuffleList = (shuffle: boolean) => {
    const newList = [...originList.current];

    if (shuffle) {
      for (let i = newList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newList[i], newList[j]] = [newList[j], newList[i]];
      }
    }

    const currentIdx = newList.findIndex(
      (music) => music.time === current?.time
    );

    localStorage.setItem("shuffle", shuffle ? "true" : "false");
    currentTurn.current = currentIdx;
    setList(newList);
    listRef.current = newList;
  };

  const loopList = (loop: boolean) => {
    localStorage.setItem("loop", loop ? "true" : "false");
  };

  const updateVolume = (volume: number) => {
    player.current!.setVolume(volume);
  };

  const play = () => {
    if (player.current) {
      if (!current) {
        player.current.loadVideoById(list[currentTurn.current].link);
        setCurrent(list[currentTurn.current]);
      }

      player.current.playVideo();
    }
  };

  const stop = () => {
    player.current!.pauseVideo();
  };

  const update = (idx: number) => {
    currentTurn.current = idx;
    setCurrent(list[idx]);
    player.current?.loadVideoById(list[idx].link);
  };

  const remove = (time: string) => {
    const newList = list.filter((music) => music.time !== time);
    setList(newList);
  };

  const currentTime = () => {
    let time = 0;

    if (player.current) {
      time = Number(player.current.getCurrentTime());
    }

    return time;
  };

  const currentDuration = () => {
    let duration = 0;

    if (player.current) {
      duration = Number(player.current.getDuration());
    }

    return duration;
  };

  useEffect(() => {
    init();
  }, [init]);

  return (
    <YoutubeContext.Provider
      value={{
        list,
        current,
        playing,
        //
        play,
        stop,
        update,
        remove,
        updateVolume,
        currentTime,
        currentDuration,
        shuffleList,
        loopList,
      }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};

export const useYoutube = () => {
  const context = useContext(YoutubeContext);

  if (!context) {
    throw new Error("YoutubeProvider를 찾을 수 없습니다.");
  }

  return context;
};

export default YoutubeProvider;
