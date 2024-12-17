"use client";

import { PropsWithChildren } from "react";
import LayoutStyle from "./layout.style";

const Layout = (props: PropsWithChildren) => {
  const { children } = props;

  return <LayoutStyle.Container>{children}</LayoutStyle.Container>;
};

export default Layout;
