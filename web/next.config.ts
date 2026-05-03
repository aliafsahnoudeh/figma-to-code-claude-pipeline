import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@taskflow/components", "@taskflow/themes"],
};

export default nextConfig;
