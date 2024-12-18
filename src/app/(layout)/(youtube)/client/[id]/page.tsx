import ClientTemplate from "@/components/templates/client";

const client = process.env.NEXT_PUBLIC_CLIENT;

export const metadata = {
  title: `Rhythm Up - 참가자`,
  description: "초대가 왔어요! 노동요를 함께 만들어보세요.",
  keywords: "노동요, 재생목록, 유튜브, 노래, 음악, 뮤직",
  openGraph: {
    title: `Rhythm Up - 참가자`,
    description: "초대가 왔어요! 노동요를 함께 만들어보세요.",
    type: "website",
    images: { url: `${client}/assets/common/image.png` },
  },
  twitter: {
    title: `Rhythm Up - 참가자`,
    description: "초대가 왔어요! 노동요를 함께 만들어보세요.",
    card: "summary_large_image",
    images: { url: `${client}/assets/common/image.png` },
  },
};

const Client = () => {
  return <ClientTemplate />;
};

export default Client;
