import { Albert_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AccessibilityToolbar from "@/components/layout/AccessibilityToolbar";
import AskArasiWidget from "@/components/layout/AskArasiWidget";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-albert-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "AbilityAction CIC — Disability Support Services",
  description:
    "AbilityAction CIC provides expert disability support, benefits advice, employment guidance, and independent living help across the UK.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${albertSans.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <AccessibilityToolbar />
        <AskArasiWidget />
      </body>
    </html>
  );
}
