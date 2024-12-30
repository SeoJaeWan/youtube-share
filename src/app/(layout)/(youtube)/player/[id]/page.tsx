import PlayerTemplate from "@/components/templates/player";
import createMeta from "@/utils/createMeta";

export const metadata = createMeta({
  title: ` - 플레이어`,
  description:
    "혼자 관리하는 노동요는 그만! 함께 즐거운 노동요를 만들어보세요.",
});

const Player = () => {
  return <PlayerTemplate />;
};

export default Player;
