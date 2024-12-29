import { color } from "@/style/theme";
import { Metadata } from "next";

const client = process.env.NEXT_PUBLIC_CLIENT;

const createMeta = ({
  title = "",
  description,
}: {
  title?: string;
  description: string;
}): Metadata => ({
  title: `Rhythm Up${title}`,
  description,
  keywords: "리듬업, 노동요, 재생목록, 유튜브, 노래, 음악, 뮤직",
  verification: {
    google: "xDw6n-eYm5QL9k9bksfKbS7_HgYWxkLNr2dj-cQ3Eeo",
    other: {
      "naver-site-verification": "0fc31dc1e75cc9e80987a315848e2045322fc792",
    },
  },
  openGraph: {
    title: `Rhythm Up${title}`,
    description,
    type: "website",
    url: client,
    images: { url: `${client}/assets/common/image.png` },
  },
  twitter: {
    title: `Rhythm Up${title}`,
    description,
    card: "summary_large_image",
    images: { url: `${client}/assets/common/image.png` },
  },
  manifest: "/manifest.json",
  applicationName: "Rhythm Up",
  appleWebApp: {
    capable: true,
    title: `Rhythm Up`,
    statusBarStyle: "default",
  },
});

export default createMeta;
