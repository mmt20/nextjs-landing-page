import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prodcut Landing Page",
  description: "A simple product landing page built with Next.js and twindcss v4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}  antialiased`}>
        <Provider>
          <ResponsiveNav />
          {children}
          <Footer />
          <ScrollToTop />
        </Provider>
      </body>
    </html>
  );
}
