import { Button } from "@/components/ui/button";

import { useState } from "react";
import { ResumeButton } from "./fdownloadButton";
import { motion, type Variants } from "framer-motion";
import { faviconHighQ } from "@/constant";

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  // Properly typed variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut", // ✅ allowed string literal
      },
    }),
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center 
    px-4 md:px-6 relative text-center overflow-hidden">
      {/* Background gradient */}
      <ResumeButton />
      <div className="absolute inset-0 bg-gradient-hero opacity-70" />

      {/* Avatar + name */}
      <motion.div
        className="flex gap-3 justify-center flex-col items-center z-10"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0}
      >
        <div className="w-14 h-14 rounded-xl overflow-hidden border border-border bg-card p-1 shadow-sm">
          <img
            src={faviconHighQ}
            alt="midsane"
            className={`w-full h-full object-cover rounded-lg transition-all duration-500 ${loaded ? "blur-0" : "blur-sm animate-pulse"}`}
            onLoad={() => setLoaded(true)}
          />
        </div>
        <div className="flex flex-col">
          {/* Using your custom mono font to frame your developer tag */}
          <p className="font-mono text-xs text-orange-500 tracking-widest bg-orange-500/5 px-2 py-0.5 rounded border border-orange-500/10">
            ~/aditya-raj
          </p>
        </div>
      </motion.div>

      <br />

      {/* Main Heading */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={1}
      >
        {/* Add these inside your relative z-10 max-w-4xl container */}
        <motion.div
          drag
          dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
          className="hidden md:flex absolute -top-12 -left-20 cursor-grab active:cursor-grabbing 
  bg-orange-500/10 text-orange-500 border border-orange-500/30 text-xs px-2 py-1 rounded-md rotate-[-6deg] select-none font-mono"
        >
          ✨ Next.js 15
        </motion.div>

        <motion.div
          drag
          dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
          className="hidden md:flex absolute top-40 -right-24 cursor-grab active:cursor-grabbing 
  bg-amber-500/10 text-amber-500 border border-amber-500/30 text-xs px-2 py-1 rounded-md rotate-[12deg] select-none font-mono"
        >
          🤖 LLM Orchestration
        </motion.div>
        <h1
          className="text-3xl tracking-tighter sm:text-4xl md:text-6xl lg:text-7xl font-semibold 
  leading-snug sm:leading-tight 
  mb-10 sm:mb-12 text-foreground"
        >
          I Create Websites <br />
          <span
            className="
     bg-gradient-to-r from-orange-500 to-amber-500
      bg-clip-text 
      text-transparent
    "
          > End To End </span>
          <br />

          Full Stack + GenAI
        </h1>


        {/* CTA Button */}
        <motion.div variants={fadeInUp} custom={2}>
          <Button
            variant="outline"
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("projects")?.offsetTop || 0,
                behavior: "smooth",
              })
            }
            className="transition-all cursor-pointer duration-300 px-6 py-2 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm font-medium"
          >
            View my work
          </Button>
        </motion.div>
      </motion.div>

      {/* Bottom text */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={3}
      >
        <p className="text-muted-foreground text-xs sm:text-sm">@no_more_mid</p>
      </motion.div>
    </section>
  );
};
