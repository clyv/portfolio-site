"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="py-6 border-t mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="container flex flex-col items-center justify-center">
        {/* Social Icons */}
        <div className="flex items-center space-x-4 mb-4">
          <SocialLink
            href="https://www.linkedin.com/in/mohammed-natsha-aa50b11a7/"
            img="/images/linkedin.svg"
            alt="LinkedIn"
          />
          <SocialLink
            href="https://github.com/MohamadNatsha"
            img="/images/github.svg"
            alt="GitHub"
          />
          <SocialLink
            href="mailto:contact@natsha.me"
            img="/images/email.svg"
            alt="Email"
          />
          <SocialLink
            href="https://cal.com/natsha"
            img="/images/calendar.svg"
            alt="Calendar"
          />
          <SocialLink
            href="https://natsha.me/_nuxt/my-resume.Dbt5CHRI.pdf"
            img="/images/resume.svg"
            alt="Resume"
          />
        </div>

        {/* Footer Text */}
        <p className="text-sm text-muted-foreground text-center">
          Crafted with ❤️ by Mohammed Natsha
        </p>
      </div>
    </motion.footer>
  );
}

// ✅ Reusable Social Link Component
function SocialLink({
  href,
  img,
  alt,
}: {
  href: string;
  img: string;
  alt: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
      <Link href={href} target="_blank" aria-label={alt}>
        <Image
          src={img}
          alt={alt}
          width={24}
          height={24}
          className="transition-opacity opacity-80 hover:opacity-100"
        />
      </Link>
    </motion.div>
  );
}
