import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: ''
  },
  assetPrefix: "https://monuk7735.github.io/test-test/"
};

export default nextConfig;
