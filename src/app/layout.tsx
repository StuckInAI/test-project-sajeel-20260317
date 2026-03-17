import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexaFlow — Build Products Faster",
  description: "The all-in-one platform to build, ship, and scale your digital products with speed and confidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
