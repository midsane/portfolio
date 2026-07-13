import { motion, type Variants } from "framer-motion";
import { githubImg, gmailImg, linkedinImg, patternImg, twitterImg } from "@/constant";

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
    <section className="w-full mt-24 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl border border-border/60 bg-background rounded-t-[40px] shadow-sm overflow-hidden relative flex flex-col items-center pt-16 sm:pt-20">
        
        {/* Minimal Typography */}
        <div className="text-center space-y-3 px-4 z-10">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/80 font-medium">
            Let's build something real
          </p>
          <h2 className="text-xl sm:text-2xl font-normal text-foreground tracking-tight">
            Making Web Dev Great Again
          </h2>
        </div>

        {/* Minimal Social Dock */}
        <div className="flex items-center gap-6 sm:gap-8 mt-10 z-10">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index * 0.1}
              className="w-5 h-5 sm:w-6 sm:h-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-opacity duration-300 hover:-translate-y-0.5"
            >
              <img src={social.img} alt={social.alt} className="w-full h-full object-contain" />
            </motion.a>
          ))}
        </div>

        {/* Text Link Anchor */}
        <a 
          href="mailto:adityaraj10544@gmail.com" 
          className="mt-6 text-xs text-muted-foreground/80 hover:text-foreground transition-colors duration-300 z-10 font-mono tracking-tight"
        >
          adityaraj10544@gmail.com
        </a>

        {/* Semicircle Anchor Component at the bottom */}
        <div className="relative w-48 h-24 sm:w-56 sm:h-28 mt-12 bg-accent/40 dark:bg-accent/20 border-t border-x border-border rounded-t-full flex items-end justify-center overflow-hidden group">
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-[85%] h-[85%] object-cover rounded-t-full object-top filter contrast-[1.02] dark:brightness-90 transition-transform duration-500 group-hover:scale-105"
            src={patternImg}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>

      </div>
    </section>
  );
};
