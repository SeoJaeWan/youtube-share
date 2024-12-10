"use client";

import { useRef, useState } from "react";

// https://www.youtube.com/embed/QJV9fu9yAKU?si=f2ApoSvQuMJumCdq
const LIST = [
  "QJV9fu9yAKU",
  "xqdAk07lWP0",
  "QJV9fu9yAKU",
  "xqdAk07lWP0",
  "QJV9fu9yAKU",
  "xqdAk07lWP0",
  "QJV9fu9yAKU",
];
export default function Home() {
  const [video, setVideo] = useState(0);
  const [title, setTitle] = useState("");
  const videoRef = useRef<YT.Player | null>(null);

  function onPlayerStateChange(event: YT.PlayerStateChangeEvent) {
    console.log(event);
    if (event.data === YT.PlayerState.ENDED) {
      setVideo((prev) => {
        videoRef.current?.loadVideoById(LIST[prev]);
        return prev + 1;
      });
    }
  }

  function onPlayerReady(event: YT.PlayerEvent) {
    videoRef.current = event.target;
    console.log(event);
    setTitle(event.target.videoTitle);
    event.target.playVideo();
  }

  const add = () => {
    // 동영상 변경
    videoRef.current?.loadVideoById(LIST[1]);

    // videoRef.current?.loadPlaylist(LIST);
  };

  function onYouTubeIframeAPIReady() {
    new window.YT.Player("player", {
      height: "360",
      width: "640",
      videoId: LIST[video],
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });

    setVideo((prev) => prev + 1);
  }

  return (
    <>
      <p>{title}</p>
      <div id={"player"} hidden></div>
      <button
        onClick={() => {
          onYouTubeIframeAPIReady();
        }}
      >
        재생
      </button>
      <button onClick={add}>추가</button>
    </>
  );
}
