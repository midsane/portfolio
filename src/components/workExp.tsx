import { motion, type Variants } from "framer-motion";
import { SectionLabel } from "@/components/ui/kit";
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
    <section id="work_exp" className="w-full px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeInUp}
        >
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mt-3 font-mono text-2xl font-medium uppercase tracking-tight text-foreground sm:text-3xl">
            History
          </h2>
        </motion.div>

        {/* Experience item */}
        <div className="mt-12 flex flex-col gap-6 border-t border-border/60 pt-10 sm:mt-16 sm:flex-row sm:gap-10 sm:pt-14">
          <motion.div
            variants={fadeInUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group flex h-14 w-14 flex-shrink-0 items-center justify-center border border-border/70 bg-card"
          >
            <img
              src={photogpt}
              alt="PhotoGPT"
              className="h-9 w-9 object-cover opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            />
          </motion.div>

          <div className="flex-1">
            <motion.div
              variants={fadeInUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <h3 className="font-mono text-lg font-medium uppercase tracking-tight text-foreground">
                PhotoGPT
              </h3>
              <span className="font-mono text-xs text-muted-foreground/70">
                Aug 2025 — Apr 2026
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground"
            >
              <span className="text-foreground/80">SDE Intern</span>
              <span className="text-border">/</span>
              <span>Remote</span>
              <span className="text-border">/</span>
              <span className="border border-border/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider">
                Internship
              </span>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-5 max-w-xl border-l border-border/50 pl-4 text-sm leading-relaxed text-muted-foreground"
            >
              Contributed to the frontend development of a multi-model AI video
              generation feature, coordinating inference workflows and response
              handling. Built a social publishing system for AI-generated images
              and videos with captions, tags, and moderation support, and
              developed SSR-powered creator profiles, a follow system, and a
              discovery feed to improve content sharing and discovery.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
