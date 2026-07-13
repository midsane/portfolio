import { motion, type Variants } from "framer-motion";
import photogpt from "/photogpt.png";

export function WorkExp() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div id="work_exp" className="max-w-2xl mx-auto px-4 sm:px-6 mt-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="bg-background rounded-3xl border border-border/60 shadow-sm overflow-hidden"
      >
        {/* Elite Minimal Window Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border/40 bg-accent/20">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />
          </div>
          <span className="text-xs font-mono tracking-wider text-muted-foreground/80 uppercase">
            History.log
          </span>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 flex flex-col">
          <motion.h2
            variants={fadeInUp}
            custom={0}
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground/80 font-medium mb-10"
          >
            Professional Experience
          </motion.h2>

          {/* Experience Item */}
          <div className="relative w-full flex flex-col md:flex-row items-start gap-6 md:gap-10 group">

            {/* Left Column: Semicircle Docking Frame for Logo */}
            <motion.div
              variants={fadeInUp}
              custom={1}
              className="relative flex items-center justify-center flex-shrink-0"
            >
              {/* Semicircle bounding box anchored to a bottom pseudo-border */}
              <div className="w-14 h-14 border border-border/80 rounded-lg bg-accent/30 dark:bg-accent/10 flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:border-primary/50 group-hover:bg-primary/[0.02]">
                <img
                  src={photogpt}
                  alt="PhotoGPT Logo"
                  className="w-10 h-10 rounded-full object-cover mb-1 filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Right Column: Information Data Layout */}
            <div className="flex-1 w-full space-y-4">
              <motion.div variants={fadeInUp} custom={2} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-lg font-normal tracking-tight text-foreground">
                    PhotoGPT
                  </h3>
                  <span className="text-xs font-mono tracking-tight text-muted-foreground/80">
                    Aug 2025 — Apr 2026
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground/80">SDE Intern</span>
                  <span className="text-muted-foreground/40">•</span>
                  <span>Remote</span>
                  <span className="text-muted-foreground/40">•</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-accent/60 font-mono">Internship</span>
                </div>
              </motion.div>

              {/* Minimal Description Wrapper */}
              <motion.div
                variants={fadeInUp}
                custom={3}
                className="text-sm text-muted-foreground/90 leading-relaxed max-w-xl border-l-2 border-border/40 pl-4 py-0.5 group-hover:border-primary/40 transition-colors duration-300"
              >Contributed to the frontend development of a multi-model AI video generation feature, coordinating inference workflows and response handling. Built a social publishing system for AI-generated images and videos with captions, tags, and moderation support, and developed SSR-powered creator profiles, a follow system, and a discovery feed to improve content sharing and discovery.
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
