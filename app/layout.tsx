
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "出海实战派 | 网站出海 SEO 策略与 AI 工具实战教程",
  description: "提供硬核的网站出海 SEO 方案、AI 工具应用实战及高转化落地页构建指南。助力开发者与站长通过技术手段实现全球流量增长。",
  keywords: ["网站出海", "SEO实战", "AI工具", "落地页优化", "流量变现", "Google排名"],
  openGraph: {
    title: "出海实战派 - 网站出海 & SEO & AI 实战教程",
    description: "拒绝泛认知。提供可落地的网站出海 SEO 实战方法论，利用 AI 工具构建长效流量资产。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "出海实战派 - 网站出海 SEO 与 AI 工具实战",
    description: "专为开发者设计的网站出海实战课程，涵盖 SEO 选词、AI 自动化内容产出。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans text-[#1d1d1f] bg-white">
        {children}
      </body>
    </html>
  );
}
