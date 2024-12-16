import { notificationList, notificationMusic } from "@/socket";
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
  addMusic: (music: HopeMusic) => void;
  initList: (hopeMusicList: HopeMusic[]) => void;
  playerMusicUpdate: (hopeMusic: HopeMusic | null) => void;
  playerListUpdate: (hopeMusicList: HopeMusic[]) => void;
}

export const INIT_VOLUME = 50;

const YoutubeContext = createContext<YoutubeContextType | null>(null);

const YoutubeProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [playing, setPlaying] = useState(false);
  const [list, setList] = useState<HopeMusic[]>([]);
  const listRef = useRef<HopeMusic[]>(list);
  const originListRef = useRef<HopeMusic[]>([]);

  const [current, setCurrent] = useState<HopeMusic | null>(null);
  const currentTurn = useRef(0);
  const player = useRef<YT.Player | null>(null);

  const updateList = useCallback(
    (newList: HopeMusic[], originList?: HopeMusic[]) => {
      setList(newList);
      listRef.current = newList;

      notificationList(newList);

      if (originList) {
        originListRef.current = originList;
      }
    },
    []
  );

  const updateCurrent = useCallback((music: HopeMusic) => {
    setCurrent(music);
    notificationMusic(music);
  }, []);

  const readyPlayer = useCallback((event: YT.PlayerEvent) => {
    player.current = event.target;
    event.target.setVolume(INIT_VOLUME);

    player.current.playVideo();
  }, []);

  const stateChange = useCallback(
    (event: YT.PlayerStateChangeEvent) => {
      if (event.data === YT.PlayerState.ENDED) {
        const loop = localStorage.getItem("loop") === "true";
        let update = currentTurn.current + 1;
        const list = listRef.current;

        if (loop) {
          update = update % list.length;
        }

        if (update !== list.length) {
          const next = list[update];
          updateCurrent(next);
          currentTurn.current = update;
          setPlayer(next.link);
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
    },
    [updateCurrent]
  );

  const setPlayer = useCallback(
    (link: string) => {
      if (player.current) {
        player.current.destroy();
      }

      new window.YT.Player("player", {
        height: "360",
        width: "640",
        videoId: link,
        events: {
          onReady: readyPlayer,
          onStateChange: stateChange,
        },
      });
    },
    [readyPlayer, stateChange]
  );

  const shuffleList = useCallback(
    (shuffle: boolean) => {
      const newList = [...originListRef.current];

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
      updateList(newList);
    },
    [current, updateList]
  );

  const loopList = useCallback((loop: boolean) => {
    localStorage.setItem("loop", loop ? "true" : "false");
  }, []);

  const updateVolume = useCallback((volume: number) => {
    player.current!.setVolume(volume);
  }, []);

  const play = useCallback(() => {
    if (!current) {
      setPlayer(list[currentTurn.current].link);
      updateCurrent(list[currentTurn.current]);
    } else {
      player.current!.playVideo();
    }
  }, [current, list, updateCurrent]);

  const stop = useCallback(() => {
    player.current!.pauseVideo();
  }, []);

  const update = useCallback(
    (idx: number) => {
      currentTurn.current = idx;
      setPlayer(list[idx].link);
      updateCurrent(list[idx]);
    },
    [list, updateCurrent]
  );

  const remove = useCallback(
    (time: string) => {
      const newList = list.filter((music) => music.time !== time);
      const originNewList = originListRef.current.filter(
        (music) => music.time !== time
      );
      updateList(newList, originNewList);
    },
    [list, updateList]
  );

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

  const addMusic = useCallback(
    (music: HopeMusic) => {
      const newList = [...list, music];

      updateList(newList, newList);
    },
    [list, updateList]
  );

  const initList = useCallback(
    (hopeMusicList: HopeMusic[]) => {
      updateList(hopeMusicList, hopeMusicList);
    },
    [updateList]
  );

  const playerMusicUpdate = useCallback((hopeMusic: HopeMusic | null) => {
    setCurrent(hopeMusic);
  }, []);

  const playerListUpdate = useCallback((hopeMusicList: HopeMusic[]) => {
    setList(hopeMusicList);
  }, []);

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
        addMusic,
        initList,
        playerMusicUpdate,
        playerListUpdate,
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
