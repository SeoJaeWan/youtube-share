import ClientTemplate from "@/components/templates/client";
import createMeta from "@/utils/createMeta";

export const metadata = createMeta({
  title: ` - 참가자`,
  description: "초대가 왔어요! 노동요를 함께 만들어보세요.",
});

const Client = () => {
  return <ClientTemplate />;
};

export default Client;
