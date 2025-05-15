import { cn } from "@car-maintenance/shared";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
export const metadata: Metadata = {
  title: "Panneau d'administration - Carly",
  description: "Panneau d'administration pour Carly",
};

const inter = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <html lang='fr' className={cn(inter.variable, 'antialiased')}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
