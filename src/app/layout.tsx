import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soft Timer",
  description:
    "Soft timer is a timer that won't set off a loud alarm after it gets set off. It's perfect if you don't want to make noise or if your hands are busy",
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
