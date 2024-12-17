import HomeTemplate from "@/components/templates/home";
import createMeta from "@/utils/createMeta";

export const metadata = createMeta({
  title: "",
  description:
    "혼자 관리하는 노동요는 그만! 함께 즐거운 노동요를 만들어보세요.",
});

const Home = () => {
  return <HomeTemplate />;
};

export default Home;
