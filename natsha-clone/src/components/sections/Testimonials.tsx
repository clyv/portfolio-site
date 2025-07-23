"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TestimonialProps {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: TestimonialProps[] = [
  {
    id: "testimonial-1",
    quote:
      "Mohammed is an exceptionally talented and motivated software developer who is a great addition to any developer team.",
    author: "Florian Topf",
    position: "Senior Backend Engineer",
    company: "JUCR",
  },
  {
    id: "testimonial-2",
    quote:
      "Mohammad is a highly professional developer. His dedication to continuous learning and positive attitude makes him a valuable team player and a pleasure to work with.",
    author: "Abdul Fatah",
    position: "Senior Cloud Engineer",
    company: "JUCR",
  },
  {
    id: "testimonial-3",
    quote:
      "Mo is a very talented developer and a pleasure to work with. He always aimed to understand the business problem we're aiming to solve and is resourceful in his approaches.",
    author: "Tim Scherer",
    position: "Managing Director",
    company: "Lunar-X",
  },
  {
    id: "testimonial-4",
    quote:
      "I’ve had the pleasure of working with Moh at Lunar X, and he's a standout developer. Talented and always eager to tackle new challenges, Moh brings a sharp mind and a fun attitude to every project which makes him an invaluable team member.",
    author: "Peter Tribelhorn",
    position: "General Manager",
    company: "Lunar-X",
  },
  {
    id: "testimonial-5",
    quote:
      "I highly recommend Mohammad. His diligence, intelligence, and strong work ethic, combined with excellent self-management and the ability to pick up any project at any phase and quickly get accustomed, make him an invaluable asset.",
    author: "Aymen Talahmeh",
    position: "Founder",
    company: "Co.Te.De Technologies",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="py-16" id="testimonials">
      <div className="border-t pt-12">
        <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 bg-white dark:bg-zinc-900 rounded-xl shadow-md min-h-[220px] overflow-hidden">
            <div className="absolute -top-4 left-8 text-4xl text-gray-200 dark:text-zinc-700 z-0">
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="mb-6 relative z-10"
              >
                <p className="text-lg italic text-gray-800 dark:text-gray-200">
                  {active.quote}
                </p>
              </motion.blockquote>
            </AnimatePresence>

            <div className="flex items-center z-10 relative">
              <div className="w-12 h-12 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-gray-600 dark:text-gray-300 font-bold">
                  {active.author.charAt(0)}
                </span>
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-800 dark:text-white">
                  {active.author}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {active.position}, {active.company}
                </p>
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === activeIndex
                    ? "bg-gray-800 dark:bg-white w-4"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`View testimonial from ${t.author}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
