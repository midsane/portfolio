import ThemeToggleButton from "./ui/theme-toggle-button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { githubImg, linkedinImg, twitterImg, favcionImg, leetcodeImg } from "@/constant";

export const Navigation = () => {
  const [showComet, setShowComet] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => setShowComet(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center  shadow shadow-accent gap-2 sm:gap-4 top-4 sm:top-5 left-1/2 -translate-x-1/2 right-0 z-50 p-1 sm:p-2
        min-w-[400px]:w-[75%] w-[90%] justify-center sm:w-fit border border-border rounded-full bg-background backdrop-blur-sm relative overflow-hidden"
    >
      {/* Comet gradient overlay */}
      {showComet && (
        <motion.div
          className="absolute -inset-10 pointer-events-none"
          initial={{ rotate: 0, opacity: 1 }}
          animate={{ rotate: 360, opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          style={{
            background: `radial-gradient(circle at 30% 30%, rgba(255,0,128,0.5), rgba(0,200,255,0.3), transparent 70%)`,
            borderRadius: "9999px",
            filter: "blur(40px)",
          }}
        />
      )}

      {/* Branding */}
      <a className="flex gap-2 items-end" href="/">
        <img
          src={favcionImg}
          alt="aditya_raj_portfolio"
          className="w-7 h-7 cursor-pointer rounded-full"
        />
        midsane
        <div className="h-7 w-[1px] bg-chart-4" />
      </a>

      {/* Socials */}
      <a target="_blank" href="https://github.com/midsane">
        <img src={githubImg} alt="GitHub" className="w-7 h-7 cursor-pointer" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/aditya-raj-846018294/">
        <img src={linkedinImg} alt="LinkedIn" className="w-7 h-7 cursor-pointer" />
      </a>
      <a target="_blank" href="https://x.com/no_more_mid">
        <img src={twitterImg} alt="Twitter" className="w-7 h-7 cursor-pointer" />
      </a>
      <a target="_blank" href="https://leetcode.com/u/midsane/">
        <img src={leetcodeImg} alt="LeetCode" className="w-6 h-6 cursor-pointer" />
      </a>

      {/* Theme toggle */}
      <ThemeToggleButton />
    </motion.nav>
  );
};
