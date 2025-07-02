import type { Metadata } from "next";
import { Bricolage_Grotesque } from 'next/font/google';
import "./globals.css";
import Footer from "./components/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: [ '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Chitrak Shah",
  description: "Powering India's Real Estate Operating System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} font-bricolage antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
