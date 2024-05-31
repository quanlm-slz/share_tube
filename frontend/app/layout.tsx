"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./_components/AuthContext";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <div className="h-lvh w-lvw">
            <div className="w-4/5 h-full mx-auto flex flex-col">
              <Header />
              <div className="border-t-2 w-[95%] border-black mx-auto"></div>
              {children}
            </div>
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
}
