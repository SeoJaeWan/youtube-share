"use client";
import { PropsWithChildren } from "react";
import YoutubeProvider from "@/hooks/useYoutube";

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  return <YoutubeProvider>{children}</YoutubeProvider>;
};

export default Layout;
