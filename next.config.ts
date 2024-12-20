import withPWA from "next-pwa";

const config = {
  /* config options here */
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
};

const nextConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching: [],
})(config);

export default nextConfig;
