import StyledComponentsRegistry from "@/style/lib/registry";
import Theme from "@/style/lib/theme";
import localFont from "next/font/local";
import Script from "next/script";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.variable}>
        <div id={"player"} hidden />
        <Script
          src="https://www.youtube.com/iframe_api"
          strategy="beforeInteractive"
        />
        <StyledComponentsRegistry>
          <Theme>{children}</Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
