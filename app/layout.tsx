import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Caveat } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Happy Girlfriend Day ❤️",
  description: "An interactive love story",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${caveat.variable} bg-[#FFF8FC] text-[#222222] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}