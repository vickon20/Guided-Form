import type { Metadata } from "next";
import { Tilt_Neon } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const tilt_Tilt_Neon = Tilt_Neon({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Guided Form",
  description:
    "A form designed for our esteemed mentors and interested individuals that are willing to work for us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tilt_Tilt_Neon.className}>
        {children} <Toaster />
      </body>
    </html>
  );
}
