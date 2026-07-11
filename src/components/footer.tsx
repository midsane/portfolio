
import { motion, type Variants } from "framer-motion";
import { githubImg, gmailImg, linkedinImg, patternImg, twitterImg } from "@/constant";

export const Footer = () => {

  const popIn: Variants = {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: custom, duration: 0.6, ease: "easeOut" },
    }),
  };

  const float: Variants = {
    animate: {
      y: [0, -2, 0],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
    },
  };

  return (
    <section className="w-full mt-20 overflow-x-hidden p-0 m-0">
      <div className="mx-auto max-w-4xl rounded-[40px] p-2 shadow-sm">
        <div className="relative mx-auto h-[400px] max-w-4xl overflow-hidden rounded-[38px] bg-accent p-2 shadow-sm">
          <p className="mt-20 text-center font-semibold text-accent-foreground underline">
            Making Web Dev Great Again!
          </p>

          <div className="flex justify-center w-full">
            <div
              className="mx-auto max-w-md text-accent-foreground/60 dark:text-neutral-400/70 animate-shiny-text 
              bg-clip-text bg-no-repeat 
              [background-position:0_0] [background-size:var(--shiny-width)_100%] 
              [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] 
              bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80 
              inline-flex group items-center justify-center rounded-full px-4 py-1 transition ease-out"
            >
              <div className="text-center">
                If you are looking to work together, Drop a mail or DM on X.
                <div className="flex mt-5 relative">
                  {/* Center avatar */}
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{ objectPosition: "center top" }}
                    className="absolute rounded-t-full top-0 left-0"
                    src={patternImg}
                    alt="pattern image"
                  />
                  {/* LinkedIn */}
                  <motion.div
                    variants={popIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={0.3}
                    className="absolute border-2 border-bg-chart-4 rounded-full 
                    bg-background sm:w-16 w-12 aspect-square flex justify-center items-center  
                    top-32 -left-10"
                  >
                    <motion.div variants={float} animate="animate">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/aditya-raj-846018294/"
                      >
                        <img className="w-6 sm:w-8" src={linkedinImg} />
                      </a>
                    </motion.div>
                  </motion.div>

                  {/* Twitter */}
                  <motion.div
                    variants={popIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={0.5}
                    className="absolute border-2 border-bg-chart-4 rounded-full bg-background sm:w-18 w-16 
                    aspect-square flex justify-center items-center top-4 left-3"
                  >
                    <motion.div variants={float} animate="animate">
                      <a target="_blank" href="https://x.com/no_more_mid">
                        <img className="w-7 sm:w-9" src={twitterImg} />
                      </a>
                    </motion.div>
                  </motion.div>

                  {/* Gmail */}
                  <motion.div
                    variants={popIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={0.7}
                    className="absolute border-2 border-bg-chart-4 rounded-full bg-background sm:w-18 w-14 
                    aspect-square flex justify-center items-center top-24 -right-9"
                  >
                    <motion.div variants={float} animate="animate">
                      <a target="_blank" href="mailto:adityaraj10544@gmail.com">
                        <img className="w-7 sm:w-9" src={gmailImg} />
                      </a>
                    </motion.div>
                  </motion.div>

                  {/* GitHub */}
                  <motion.div
                    variants={popIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    custom={0.9}
                    className="absolute border-2 border-bg-chart-4 rounded-full bg-background sm:w-20 w-16 
                    aspect-square flex justify-center items-center -top-4 right-10"
                  >
                    <motion.div variants={float} animate="animate">
                      <a target="_blank" href="https://github.com/midsane">
                        <img className="w-8 sm:w-10" src={githubImg} />
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-1 size-3 transition-all duration-300 ease-in-out group-hover:translate-x-0.5"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
