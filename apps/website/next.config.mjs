/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@onetrue/ui"],

  // Static site output (creates /out)
  output: "export",

  // If you use next/image anywhere
  images: { unoptimized: true },
};

export default nextConfig;
