import type { NextConfig } from "next";

// 静的サイトとして書き出す（out/ → npm run export で ../site/ にコピー）。
// GitHub Pages などサブパスで公開する場合は BASE_PATH=/repo-name を指定してビルドする。
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
