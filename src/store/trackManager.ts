import { create } from "zustand";

interface TrackManagerState {
  isList: boolean;
  delay: number;
  duration: number;
  opacityDelay: number;
  updateList: (length: number) => void;
}

const useTrackManager = create<TrackManagerState>()((set) => ({
  isList: true,
  delay: 400,
  duration: 1000,
  opacityDelay: 1000,
  updateList: (length) =>
    set((state) => ({
      isList: !state.isList,
      opacityDelay: Math.min(6, length) * state.delay + state.duration,
    })),
}));

export default useTrackManager;
