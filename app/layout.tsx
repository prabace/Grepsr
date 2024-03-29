import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ServerNavbar from "@/Components/ServerNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grespr Project",
  description: "Developed by Prabesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <ServerNavbar />
        {children}
       
        </body>
    </html>
  );
}
