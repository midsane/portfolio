import { ResumeButton } from "./fdownloadButton";
import { SectionLabel } from "@/components/ui/kit";
import { motion, type Variants } from "framer-motion";
import { faviconHighQ } from "@/constant";

export const Hero = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const scrollToProjects = () =>
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0}
        className="w-14 h-14 border border-border/70 bg-card p-1.5"
      >
        <img
          src={faviconHighQ}
          alt="Aditya Raj"
          className="w-full h-full object-cover"
          decoding="async"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={1}
        className="mt-6"
      >
        <ResumeButton />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={2}
        className="mt-12"
      >
        <SectionLabel>Full-Stack · GenAI Engineer</SectionLabel>
      </motion.div>

      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={3}
        className="mt-5 font-mono font-medium uppercase leading-[1.06] tracking-tight text-3xl sm:text-5xl lg:text-6xl text-foreground"
      >
        I build web products
        <br />
        <span className="inline-block bg-foreground text-background px-2 mt-2">
          end to end
        </span>
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={4}
        className="mt-7 max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed"
      >
        Full-stack engineering and applied generative AI — from the data model
        to the deployed interface.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={5}
        className="mt-10 flex items-center gap-3"
      >
        <button
          onClick={scrollToProjects}
          className="cursor-pointer font-mono text-[11px] uppercase tracking-[0.2em] px-5 py-2.5 bg-foreground text-background transition-opacity hover:opacity-90"
        >
          View work
        </button>
        <a
          href="https://github.com/midsane"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] uppercase tracking-[0.2em] px-5 py-2.5 border border-border/70 text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/40"
        >
          GitHub
        </a>
      </motion.div>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={6}
        className="absolute bottom-8 font-mono text-[11px] tracking-[0.2em] text-muted-foreground/70"
      >
        @no_more_mid
      </motion.p>
    </section>
  );
};
