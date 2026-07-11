import ThemeToggleButton from "./ui/theme-toggle-button";
import { motion } from "framer-motion";
import { githubImg, linkedinImg, twitterImg, favcionImg, leetcodeImg } from "@/constant";

export const Navigation = () => {
  const socials = [
    { img: githubImg, url: "https://github.com/midsane", alt: "GitHub" },
    { img: linkedinImg, url: "https://www.linkedin.com/in/aditya-raj-846018294/", alt: "LinkedIn" },
    { img: twitterImg, url: "https://x.com/no_more_mid", alt: "Twitter" },
    { img: leetcodeImg, url: "https://leetcode.com/u/midsane/", alt: "LeetCode", isSmall: true },
  ];

  return (
    <div className="fixed top-5 left-0 right-0 z-50 px-3 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pointer-events-auto flex items-center justify-center gap-3 sm:gap-5 px-3 py-2 sm:px-4 w-fit border border-border/60 rounded-full bg-background/80 backdrop-blur-md shadow-sm"
      >
        {/* Profile Identity Fragment */}
        <a className="flex items-center gap-1.5 group font-mono text-xs tracking-tight text-foreground/90" href="/">
          <div className="w-6 h-6 rounded-full overflow-hidden border border-border/80 bg-muted flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <img
              src={favcionImg}
              alt="portfolio root"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-medium hidden min-[360px]:inline transition-colors duration-300 group-hover:text-orange-500">
            midsane
          </span>
        </a>

        {/* Hairline Divider */}
        <div className="h-4 w-[1px] bg-border/80 flex-shrink-0" />

        {/* Action Link Row */}
        <div className="flex items-center gap-3 sm:gap-4.5 flex-shrink-0">
          {socials.map((social, index) => (
            <a 
              key={index}
              target="_blank" 
              rel="noopener noreferrer" 
              href={social.url}
              className="group relative flex items-center justify-center flex-shrink-0"
            >
              <img 
                src={social.img} 
                alt={social.alt} 
                className={`${
                  social.isSmall ? "w-5 h-5 min-w-5 min-h-5" : "w-[22px] h-[22px] min-w-[22px] min-h-[22px]"
                } object-contain transition-all duration-300 hover:-translate-y-0.5`} 
              />
            </a>
          ))}
        </div>

        {/* Hairline Divider */}
        <div className="h-4 w-[1px] bg-border/80 flex-shrink-0" />

        {/* Configuration Action */}
        <div className="flex items-center justify-center scale-90 hover:scale-95 transition-transform duration-200 flex-shrink-0">
          <ThemeToggleButton />
        </div>
      </motion.nav>
    </div>
  );
};