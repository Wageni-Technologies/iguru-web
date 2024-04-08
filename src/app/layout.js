import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IGURU | Africa's Center of Commerce",
  description: "Africa's Center of Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className={inter.className}>
        {children}
        {/* I can't wait what will become of you */}
        {/* Be blessed and bless the people you serve */}
        {/* Emmanuel Columbus Mugenyi */}
        {/* Date: 7th April, 2024 19:54*/}
      </body>
    </html>
  );
}
