"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="py-16 md:py-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Profile Image Block */}
        <motion.div
          className="w-full md:w-1/3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-4">Mohammed Natsha.</h2>
          <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/profile.jpeg"
              alt="Mohammed Natsha"
              fill
              className="object-cover"
              priority
              crossOrigin="anonymous"
            />
          </div>
        </motion.div>

        {/* Text Content Block */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-2 text-muted-foreground">
            I'm Mohammed Natsha, and I enjoy
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Building pixel-perfect
            <br />
            <span className="text-[#9aadbe]">Interactive</span> apps
          </h1>
          <div className="mb-6">
            <p className="text-xl font-medium">Full-Stack Developer</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map(({ href, icon, alt }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href={href} target="_blank" aria-label={alt}>
                  <Image
                    src={icon}
                    alt={alt}
                    width={24}
                    height={24}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                    crossOrigin="anonymous"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/mohammed-natsha-aa50b11a7/",
    icon: "/images/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://github.com/MohamadNatsha",
    icon: "/images/github.svg",
    alt: "GitHub",
  },
  {
    href: "mailto:contact@natsha.me",
    icon: "/images/email.svg",
    alt: "Email",
  },
  {
    href: "https://cal.com/natsha",
    icon: "/images/calendar.svg",
    alt: "Calendar",
  },
  {
    href: "https://natsha.me/_nuxt/my-resume.Dbt5CHRI.pdf",
    icon: "/images/resume.svg",
    alt: "Resume",
  },
];
