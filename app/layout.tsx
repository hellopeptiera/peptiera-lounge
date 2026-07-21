import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peptiéra Lounge",
  description: "Peptiéra Member Portal",
  keywords: [
    "Peptiéra",
    "Peptide",
    "Member Portal",
    "Biohacking",
    "Dosage Calculator",
    "Injection Tracker",
    "Peptide Library",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        {children}
      </body>
    </html>
  );
}
