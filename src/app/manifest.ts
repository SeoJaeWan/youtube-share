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
    background_color: color.white,
    theme_color: color.primary,
  };
};

export default manifest;
