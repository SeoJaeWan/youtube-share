import { NextConfig } from "next";

const config: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  output: "standalone" as const,
  serverExternalPackages: ["socket.io"],
};

export default config;
