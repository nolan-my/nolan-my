import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nolan Innovation",
  description: "Product engineering for startups and businesses, from first architecture to production.",
  icons: {
    icon: "/logo.png",
  },
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
