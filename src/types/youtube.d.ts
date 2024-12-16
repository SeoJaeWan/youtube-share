declare global {
  namespace YT {
    interface PlayerOptions {
      height?: string;
      width?: string;
      videoId?: string;
      playerVars?: {
        autoplay?: number;
      };
      events?: {
        onReady?: (event: PlayerEvent) => void;
        onStateChange?: (event: PlayerStateChangeEvent) => void;
      };
    }

    interface PlayerEvent {
      target: Player;
    }

    interface PlayerStateChangeEvent extends PlayerEvent {
      data: number;
    }

    enum PlayerState {
      BUFFERING = 3,
      ENDED = 0,
      PAUSED = 2,
      PLAYING = 1,
      UNSTARTED = -1,
      VIDEO_CUED = 5,
    }

    class Player {
      constructor(elementId: string | HTMLElement, options: PlayerOptions);
      loadVideoById(videoId: string): void;
      playVideo(): void;
      pauseVideo(): void;
      stopVideo(): void;
      seekTo(seconds: number, allowSeekAhead: boolean): void;
      getPlayerState(): number;
      setVolume(volume: number): void;
      getVolume(): number;
      getDuration(): number;
      getCurrentTime(): number;
      clearVideo(): void;
      destroy(): void;
      videoTitle: string;
    }
  }
}

export {};
