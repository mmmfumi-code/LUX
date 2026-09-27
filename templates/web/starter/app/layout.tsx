import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  // 公開URLが決まったら SITE_URL を指定してビルドする（OGP 画像の絶対URLに使われる）
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  title: site.title,
  description: site.description,
  openGraph: { title: site.title, description: site.description, images: ["/og.png"] },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f3f1ed" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* 採用グラフィックの書体に合わせて変更する */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
