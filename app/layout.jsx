import "@/styles/global.css";

export const metadata = {
  title: "Dansk Trainer",
  description: "Danish language practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}