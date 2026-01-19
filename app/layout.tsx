import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300"], // Light
  subsets: ["latin"],
  variable: "--font-cormorant", // CSS variable
});

export const metadata: Metadata = {
  title: "Azzure Perfumes",
  description: "Discover the essence of luxury with Azzure Perfumes - where every scent tells a story.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${cormorant.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
