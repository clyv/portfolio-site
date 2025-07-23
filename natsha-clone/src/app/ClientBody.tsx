"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";

export default function ClientBody({ children }: { children: ReactNode }) {
  // Custom cursor tracker
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const move = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </ThemeProvider>
  );
}
