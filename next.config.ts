import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3001",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "apiirina.duckdns.org",
        pathname: "/uploads/**",
      },
    ],
    qualities: [75, 80, 85],
  },
};

export default nextConfig;
