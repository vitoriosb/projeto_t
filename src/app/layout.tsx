import { NavBar } from "@/components/navBar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "projetoT",
  description: "projetinho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
