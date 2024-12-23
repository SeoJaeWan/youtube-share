import withPWA from "next-pwa";

const config = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  output: "standalone" as const,
};

const nextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching: [],
})(config);

export default nextConfig;
