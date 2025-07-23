import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Mohammed Natsha Portfolio Clone",
  description: "Clone of Mohammed Natsha's portfolio website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* Custom Cursor */}
        <div id="cursor" className="custom-cursor" />
        
        {/* Client-side theme and animations */}
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
