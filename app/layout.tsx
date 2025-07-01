import { ThemeProvider } from "@/components/theme-provider";
import { ToggleTheme } from "@/components/theme-toggle";
import "highlight.js/styles/github.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Your Name",
  description:
    "Personal portfolio of YOUR_NAME who is a YOUR_POSITION_IN_A_COMPANY at YOUR_COMPANY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative">
            <div className="fixed top-4 right-4 z-50 border rounded-md shadow-none">
              <ToggleTheme />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
