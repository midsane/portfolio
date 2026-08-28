import ThemeToggleButton from "./ui/theme-toggle-button";
import { motion } from "framer-motion";
import { githubImg, linkedinImg, twitterImg, leetcodeImg } from "@/constant";

export const Navigation = () => {
  const socials = [
    { img: githubImg, url: "https://github.com/midsane", alt: "GitHub" },
    { img: linkedinImg, url: "https://www.linkedin.com/in/aditya-raj-846018294/", alt: "LinkedIn" },
    { img: twitterImg, url: "https://x.com/no_more_mid", alt: "Twitter" },
    { img: leetcodeImg, url: "https://leetcode.com/u/midsane/", alt: "LeetCode" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Wordmark */}
        <a
          href="/"
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground/90 transition-colors hover:text-foreground"
        >
          <span className="inline-block h-1.5 w-1.5 bg-orange-500" />
          midsane
        </a>

        {/* Links + theme toggle */}
        <div className="flex items-center gap-4 sm:gap-5">
          {socials.map((social, index) => (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={social.url}
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
          <span className="h-4 w-px bg-border/70" />
          <div className="scale-90">
            <ThemeToggleButton />
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
