"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BookPageSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function BookPageSection({
  children,
  id,
  className = "",
}: BookPageSectionProps) {
  return (
    <section
      id={id}
      className={`relative py-16 md:py-24 [perspective:1400px] ${className}`}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 36,
          rotateY: -7,
          transformOrigin: "left center",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotateY: 0,
        }}
        viewport={{ once: true, amount: "some" }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}