import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  distDir: 'out',
  basePath: '/hlpfldev.tsx',
  assetPrefix: '/hlpfldev.tsx/'
};

export default nextConfig;
