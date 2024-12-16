import { notificationList, notificationMusic } from "@/socket";
import { HopeMusic } from "@/types/global";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { useAlert } from "../useAlert";

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
  initList: () => void;
  playerMusicUpdate: (hopeMusic: HopeMusic | null) => void;
  playerListUpdate: (hopeMusicList: HopeMusic[]) => void;
}

export const INIT_VOLUME = 50;

const YoutubeContext = createContext<YoutubeContextType | null>(null);

const YoutubeProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [playing, setPlaying] = useState(false);
  const [list, setList] = useState<HopeMusic[]>([]);
  const [current, setCurrent] = useState<HopeMusic | null>(null);

  const listRef = useRef<HopeMusic[]>(list);
  const originListRef = useRef<HopeMusic[]>([]);
  const currentTurn = useRef(0);
  const player = useRef<YT.Player | null>(null);

  const { addMessage } = useAlert();

  const updateList = useCallback(
    (newList: HopeMusic[], originList?: HopeMusic[]) => {
      setList(newList);
      listRef.current = newList;

      notificationList(newList);

      if (originList) {
        originListRef.current = originList;
        localStorage.setItem("playList", JSON.stringify(originList));
      }
    },
    []
  );

  const updateCurrent = (music: HopeMusic) => {
    setCurrent(music);
    notificationMusic(music);
  };

  const readyPlayer = (event: YT.PlayerEvent) => {
    player.current = event.target;
    event.target.setVolume(INIT_VOLUME);

    player.current.playVideo();
  };

  const stateChange = (event: YT.PlayerStateChangeEvent) => {
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
  };

  const setPlayer = (link: string) => {
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
  };

  const shuffleList = (shuffle: boolean) => {
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
  };

  const loopList = (loop: boolean) => {
    localStorage.setItem("loop", loop ? "true" : "false");
  };

  const updateVolume = (volume: number) => {
    player.current!.setVolume(volume);
  };

  const play = () => {
    if (list.length === 0) {
      addMessage({
        message: "재생할 음악이 없습니다.\n플레이리스트에 노래를 추가해주세요.",
        type: "single",
      });
    } else {
      if (!current) {
        setPlayer(list[currentTurn.current].link);
        updateCurrent(list[currentTurn.current]);
      } else {
        player.current!.playVideo();
      }
    }
  };

  const stop = () => {
    player.current!.pauseVideo();
  };

  const update = (idx: number) => {
    currentTurn.current = idx;
    setPlayer(list[idx].link);
    updateCurrent(list[idx]);
  };

  const remove = (time: string) => {
    const newList = list.filter((music) => music.time !== time);
    const originNewList = originListRef.current.filter(
      (music) => music.time !== time
    );
    updateList(newList, originNewList);
  };

  const currentTime = useCallback(() => {
    let time = 0;

    if (player.current) {
      time = Number(player.current.getCurrentTime());
    }

    return time;
  }, []);

  const currentDuration = useCallback(() => {
    let duration = 0;

    if (player.current) {
      duration = Number(player.current.getDuration());
    }

    return duration;
  }, []);

  const addMusic = useCallback(
    (music: HopeMusic) => {
      const newList = [...list, music];

      updateList(newList, newList);
    },
    [list, updateList]
  );

  const initList = useCallback(() => {
    const playListRaw = localStorage.getItem("playList");

    if (playListRaw) {
      const playList = JSON.parse(playListRaw);

      if (Array.isArray(playList)) {
        addMessage({
          message:
            "이전 플레이리스트가 존재합니다.\n플레이리스트를 불러오시겠습니까?",
          type: "multiple",
          onConfirm: () => {
            updateList(playList, playList);
          },
          onCancel: () => {
            localStorage.removeItem("playList");
          },
        });
      }
    }
  }, [addMessage, updateList]);

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
