import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatarko.ru",
        port: "",
      },
    ],
  },
};

export default nextConfig;
