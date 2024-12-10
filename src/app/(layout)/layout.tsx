"use client";

import Layout from "@/components/templates/layout";
import Global from "@/style/global";
import { PropsWithChildren } from "react";

const MainLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <>
      <Global />
      <Layout>{children}</Layout>
    </>
  );
};

export default MainLayout;
