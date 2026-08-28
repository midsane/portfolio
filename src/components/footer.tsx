import { motion, type Variants } from "framer-motion";
import { SectionLabel } from "@/components/ui/kit";
import { githubImg, gmailImg, linkedinImg, twitterImg } from "@/constant";

export const Footer = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom, duration: 0.5, ease: "easeOut" },
    }),
  };

  const socials = [
    { img: linkedinImg, url: "https://www.linkedin.com/in/aditya-raj-846018294/", alt: "LinkedIn" },
    { img: twitterImg, url: "https://x.com/no_more_mid", alt: "Twitter" },
    { img: gmailImg, url: "mailto:adityaraj10544@gmail.com", alt: "Gmail" },
    { img: githubImg, url: "https://github.com/midsane", alt: "GitHub" },
  ];

  return (
    <footer className="relative w-full overflow-hidden px-4 pt-20 sm:px-6 sm:pt-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-5xl"
      >
        <motion.div variants={fadeInUp} custom={0}>
          <SectionLabel>Contact</SectionLabel>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          custom={0.05}
          className="mt-4 max-w-xl font-mono text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl"
        >
          Let&apos;s build something real.
        </motion.h2>

        <motion.a
          variants={fadeInUp}
          custom={0.1}
          href="mailto:adityaraj10544@gmail.com"
          className="mt-6 inline-block font-mono text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
        >
          adityaraj10544@gmail.com
        </motion.a>

        <motion.div
          variants={fadeInUp}
          custom={0.15}
          className="mt-8 flex items-center gap-5"
        >
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.alt}
              className="opacity-55 grayscale transition-all duration-200 hover:-translate-y-0.5 hover:opacity-100 hover:grayscale-0"
            >
              <img
                src={social.img}
                alt={social.alt}
                className="h-[18px] w-[18px] object-contain"
              />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Oversized wordmark */}
      <div
        aria-hidden
        className="pointer-events-none mx-auto mt-16 max-w-5xl select-none overflow-hidden"
      >
        <span className="block translate-y-[0.15em] font-mono text-[18vw] font-semibold leading-none tracking-tighter text-foreground/[0.045] lg:text-[13rem]">
          midsane
        </span>
      </div>
    </footer>
  );
};
