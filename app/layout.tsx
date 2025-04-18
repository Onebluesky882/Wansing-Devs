import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { ReactNode } from "react";
import * as React from "react";

export const metadata: Metadata = {
  title: "Wansing Devs",
  description: "Wansing Devs",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
