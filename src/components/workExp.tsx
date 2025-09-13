import { Building } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import photogpt from "/photogpt.png";

export function WorkExp() {
  // Animation variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      id="work_exp"
      className="max-w-2xl mx-auto p-2 sm:p-6"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-background rounded-2xl shadow-sm border border-border overflow-hidden"
      >
        {/* macOS window controls */}
        <div className="flex items-center gap-2 px-4 py-3 bg-accent border-b border">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-10">
          <motion.h1
            variants={fadeInUp}
            custom={0}
            className="text-2xl font-bold text-foreground mb-8"
          >
            Experience
          </motion.h1>

          {/* PhotoGPT */}
          <motion.div
            variants={fadeInUp}
            custom={1}
            className="relative"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 relative z-10">
                <img
                  src={photogpt}
                  alt="PhotoGPT Logo"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 relative z-10">
                  <h3 className="text-md sm:text-lg font-semibold text-foreground/90">
                    PhotoGPT
                  </h3>
                </div>
                <div className="mb-4 relative">
                  <div className="flex items-center gap-2 mb-2 relative z-10">
                    <h4 className="text-sm sm:text-base font-medium text-foreground/80">
                      Frontend Engineer
                    </h4>
                  </div>
                  <p className="text-sm text-foreground/70">
                    August 2025 - Current • Remote • Internship
                  </p>
                </div>
              </div>
            </div>

            {/* Curved branch line */}
            <motion.svg
              variants={fadeInUp}
              custom={2}
              className="absolute left-6 top-12 w-16 h-8 pointer-events-none z-0"
              viewBox="0 0 64 32"
            >
              <path
                d="M 6 0 Q 6 16 32 20"
                stroke="#22c55e"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.div>

          {/* NewsNest */}
          <motion.div
            variants={fadeInUp}
            custom={3}
            className="mb-8 relative"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center flex-shrink-0 relative z-10">
                <Building />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 relative z-10">
                  <h3 className="text-lg font-semibold text-foreground/90">
                    NewsNest
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-2 relative z-10">
                  <h4 className="text-base font-medium text-foreground/80">
                    Founding Backend Engineer
                  </h4>
                </div>
                <p className="text-sm text-foreground/70">
                  May 2025 - August 2025 (3 m) • Remote • Internship
                </p>
              </div>
            </div>

            <motion.svg
              variants={fadeInUp}
              custom={4}
              className="absolute left-6 top-12 w-16 h-8 pointer-events-none z-0"
              viewBox="0 0 64 32"
            >
              <path
                d="M 6 0 Q 6 16 32 20"
                stroke="#22c55e"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
