"use client";

import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Career from '@/components/sections/Career';
import Skills from '@/components/sections/Skills';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Animated content wrapper */}
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Individual section animations (optional) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Hero />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Career />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Testimonials />
        </motion.section>
      </motion.div>

      <Footer />
    </main>
  );
}
