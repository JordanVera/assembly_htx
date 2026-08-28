import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prestigeeventshouston.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
