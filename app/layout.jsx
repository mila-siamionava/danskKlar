import { Inter } from "next/font/google";

import "@/styles/global.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "DanskKlar",
  description:
    "Danish language practice and PD3.5 preparation",
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="da"
      className={inter.variable}
    >
      <body>{children}</body>
    </html>
  );
}