import type { Metadata } from "next";
import "@/public/styles/global.css";

export const viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Vita",
  icons: {
    icon: "/pwa/icon-192x192.png",
  },
  description: "The health damagochi",
  manifest: "/pwa/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
