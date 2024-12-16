"use client";

import { WaveProvider } from "@/hooks/useWave";
import Layout from "@/components/templates/layout";
import Global from "@/style/global";
import { PropsWithChildren } from "react";
import AlertProvider from "@/hooks/useAlert";

const MainLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Layout>
      <Global />
      <AlertProvider>
        <WaveProvider>{children}</WaveProvider>
      </AlertProvider>
    </Layout>
  );
};

export default MainLayout;
