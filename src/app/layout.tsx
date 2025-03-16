import type { Metadata } from "next";
import { Kanit, Geist_Mono } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  weight: ["100","200","300","400"]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
