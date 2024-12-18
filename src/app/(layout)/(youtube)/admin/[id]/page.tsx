import AdminTemplate from "@/components/templates/admin";

const client = process.env.NEXT_PUBLIC_CLIENT;

export const metadata = {
  title: `Rhythm Up - 운영자`,
  description:
    "혼자 관리하는 노동요는 그만! 함께 즐거운 노동요를 만들어보세요.",
  keywords: "노동요, 재생목록, 유튜브, 노래, 음악, 뮤직",
  openGraph: {
    title: `Rhythm Up - 운영자`,
    description:
      "혼자 관리하는 노동요는 그만! 함께 즐거운 노동요를 만들어보세요.",
    type: "website",
    images: { url: `${client}/assets/common/image.png` },
  },
  twitter: {
    title: `Rhythm Up - 운영자`,
    description:
      "혼자 관리하는 노동요는 그만! 함께 즐거운 노동요를 만들어보세요.",
    card: "summary_large_image",
    images: { url: `${client}/assets/common/image.png` },
  },
};

const Admin = () => {
  return <AdminTemplate />;
};

export default Admin;
