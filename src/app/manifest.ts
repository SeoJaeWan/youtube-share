import { color } from "@/style/theme";
import { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "Rhythm Up",
    short_name: "RhythmUp",
    description:
      "혼자 관리하는 노동요는 그만! 함께 즐거운 노동요를 만들어보세요.",
    start_url: "/",
    display: "standalone",
    background_color: "transparent",
    theme_color: color.secondary,
    icons: [
      {
        src: "/assets/common/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/common/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
};

export default manifest;
