"use client";

import { WaveProvider } from "@/components/atoms/wave";
import Layout from "@/components/templates/layout";
import Global from "@/style/global";
import { PropsWithChildren } from "react";

const MainLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Layout>
      <Global />
      <WaveProvider>{children}</WaveProvider>
    </Layout>
  );
};

export default MainLayout;
