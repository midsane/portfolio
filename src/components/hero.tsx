import { Button } from "@/components/ui/button";
import { ResumeButton } from "./fdownloadButton";
import { motion, type Variants } from "framer-motion";
import { faviconHighQ } from "@/constant";

export const Hero = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-between pt-[18vh] pb-8 sm:pt-[20vh] px-4 md:px-6 relative z-10 text-center overflow-hidden">

      {/* Background gradient structure */}
      <div className="absolute inset-0 opacity-70 pointer-events-none" />

      {/* Main Content Container */}
      <div className="flex flex-col items-center my-auto z-10 max-w-4xl mx-auto w-full">
        {/* Profile Canvas + Integrated Action Dock */}
        <motion.div
          className="flex gap-4 justify-center flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
        >
          {/* Scaled-up Profile Frame */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-border/60 bg-card p-1.5 shadow-sm relative group transition-colors duration-300 hover:border-orange-500/30">
            <img
              src={faviconHighQ}
              alt="midsane"
              className="w-full h-full object-cover rounded-xl"
              decoding="async"
            />
          </div>

          {/* Cohesive Identity & CV Badge */}
          <div className="mt-1">
            <ResumeButton />
          </div>
        </motion.div>

        {/* Main Copywriting Block */}
        <motion.div
          className="relative w-full mt-8 sm:mt-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
        >
          {/* Draggable Desktop Interactive Accent Badges */}
          <motion.div
            drag
            dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
            className="hidden md:flex absolute -top-12 -left-12 cursor-grab active:cursor-grabbing 
            bg-orange-500/5 text-orange-500 border border-orange-500/20 text-xs px-2.5 py-1 rounded-md rotate-[-6deg] select-none font-mono tracking-tight"
          >
            ✨ Next.js 15
          </motion.div>

          <motion.div
            drag
            dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
            className="hidden md:flex absolute top-32 -right-16 cursor-grab active:cursor-grabbing 
            bg-amber-500/5 text-amber-500 border border-amber-500/20 text-xs px-2.5 py-1 rounded-md rotate-[12deg] select-none font-mono tracking-tight"
          >
            🤖 LLM Orchestration
          </motion.div>

          <h1 className="text-4xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-8 sm:mb-10 text-foreground">
            I Create Websites <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent font-medium">
              End To End
            </span>
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl block mt-4 text-muted-foreground font-light tracking-normal">
              Full Stack + GenAI
            </span>
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
              className="transition-colors cursor-pointer duration-300 px-6 py-2 sm:px-8 sm:py-3 rounded-full text-xs sm:text-sm font-mono border-border/80 hover:border-orange-500/40"
            >
              view_work.sh
            </Button>
          </motion.div>
        </motion.div>

        {/* Dynamic Elite Micro-Grid (Fills the lower empty space elegantly) */}
        {/* Elite Semicircular Scroll Anchor */}
        <motion.div
          className="absolute sm:hidden bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-end h-24 w-48 overflow-hidden pointer-events-none select-none z-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={3}
        >
          {/* The Semicircle Arc */}
          <div className="w-48 h-48  rounded-full border border-dashed border-orange-500/20 absolute top-0 flex items-center justify-center">
            {/* Inner subtle pulse point */}
            <div className="w-2 h-2 rounded-full bg-orange-500/30 animate-ping absolute top-0" />
            <div className="w-1 h-1 rounded-full bg-orange-500/60 absolute top-0" />
          </div>

          <p className="text-foreground/80 font-mono text-[12px] tracking-widest uppercase mb-2 bg-background px-2 z-20">
            scroll.down
          </p>
        </motion.div>
      </div>

      {/* Global Bottom Branding */}
      <motion.div
        className="relative z-10 mt-auto pt-8"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={3}
      >
        <p className="text-foreground/70 font-mono text-[12px] sm:text-xs tracking-wider">@no_more_mid</p>
      </motion.div>
    </section>
  );
};
