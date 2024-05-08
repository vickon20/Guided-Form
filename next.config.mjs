/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sdgs.un.org",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
