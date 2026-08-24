import type { Metadata } from "next";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Dansk Trainer",
  description: "Danish language practice",
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