import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [ 'cdn-icons-png.flaticon.com' ]
  }
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "cdn-icons-png.flaticon.com",
  //     }
  //   ],
  // }
};

export default nextConfig;
