import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TIKARI Finance - Non-Interest & Faith-Based Financial Infrastructure",
  description:
    "Experience banking that honors your faith. Certified AAOIFI non-interest ledgers, Murabaha investment tools, and Wadiah savings.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-tikari-cream-light text-tikari-green-dark">
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}