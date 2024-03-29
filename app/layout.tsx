import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import GoogleAdsense from "../components/GoogleAdsense";
import Providers from "../contexts";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

export const runtime = "edge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Framer Motion Examples",
  description: "Introduces beautiful Framer Motion examples with codes.",
};

const Header = dynamic(() => import("../components/Header"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-1GELWPGE7D" />
      <GoogleAdsense pId="4436108648632802" />
    </html>
  );
}
