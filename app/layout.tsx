import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Практикум по нейросетям для малого бизнеса",
  description:
    "Двухдневный практикум Натальи Руцкой: нейросети, промпты, ИИ-помощник и готовые материалы для бизнеса.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
