"use client";

import { PropsWithChildren, useEffect } from "react";
import YoutubeProvider from "@/hooks/useYoutube";
import { clearSocket } from "@/socket";

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  useEffect(() => {
    return () => {
      clearSocket();
    };
  }, []);

  return <YoutubeProvider>{children}</YoutubeProvider>;
};

export default Layout;
