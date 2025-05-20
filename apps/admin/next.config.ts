import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatar.iran.liara.run",
        protocol: "https",
      },
    ],
  },
  experimental: {
    authInterrupts: true,
  },
};

export default nextConfig;