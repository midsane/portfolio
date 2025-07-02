import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { BlurText } from "../BlurText/BlurText";
import { ArrowUp } from "lucide-react";
import { CircularText } from "../CircularText/CircularText";
import { SlideCharsText } from "../text-animation";

export function LandingPage() {

  const [isAnimating, setIsAnimating] = useState(true);
  const [startText2Animation, setStartText2Animation] = useState(false);
  const [showSigmaImage, setShowSigmaImage] = useState(false);
  const [yValues, setYValues] = useState([-430, -400, -390, 200]);
  const [startScrolling, setStartScrolling] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartScrolling(true)
    }, 4000);

    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {

    if (startScrolling) document.body.style.overflow = '';
    else document.body.style.overflow = 'hidden';

    return () => {

      document.body.style.overflow = '';
    };
  }, [startScrolling]);

  useEffect(() => {
    const updateY = () => {


      if (window.innerWidth < 800) {
        setYValues([-160, -140, -100, 600]);
      }
      if (window.innerWidth < 500) {
        setYValues([-110, -90, -70, 600]);
      }
      else {

        setYValues([-220, -160, -150, 600]);
      }
    };

    updateY();
    window.addEventListener("resize", updateY);
    return () => window.removeEventListener("resize", updateY);
  }, []);

  return <section className={` overflow-hidden relative h-screen px-20 w-full flex justify-center items-center`} >
    {startScrolling &&
      <motion.div
        initial={{ y: 10, opacity: 0 }}

        animate={{ opacity: [1, 1, 1, 1, 1, 1, 0], y: [0, 15, 0, 15, 0, 15, 0] }}
        transition={{
          duration: 2,
          times: [0, 0.14, 0.28, 0.44, 0.60, 0.74, 0.88, 1],
          ease: "easeIn"
        }}
        className="w-fit z-50 flex justify-between items-center fixed bottom-10 
        
        right-5 p-2 m-auto max-[400px]:mb-20 text-black bg-blue-400 rounded-full" ><ArrowUp />

      </motion.div>}

    {!isAnimating && <>
      <motion.div
        initial={{ top: 0 }}
        animate={{
          top: [0, -100, -100, -1000]
        }}
        onAnimationComplete={() => {
          setIsAnimating(true)
          setShowSigmaImage(true)
        }}
        transition={{
          duration: 1,
          times: [0, 0.5, 0.7, 1],
          ease: "easeInOut",
        }}
        className={`absolute bg-stone-900 z-30  left-0 h-1/2 w-full`}>

      </motion.div>
      <motion.div
        initial={{ bottom: 0 }}
        animate={{
          bottom: [0, -100, -100, -1000]
        }}
        onAnimationComplete={() => setIsAnimating(true)}
        transition={{
          duration: 1,
          times: [0, 0.5, 0.7, 1],
          ease: "easeInOut",
        }}
        className={`absolute bg-stone-900 z-30 left-0 h-1/2 w-full`}>

      </motion.div>
    </>}
    <div className="absolute  z-20 top-0 left-0 h-full w-full justify-center items-center flex" >
      <div className=" px-16 rounded w-full sm:w-1/2 h-full flex justify-center items-center sm:h-1/2" >

        {startText2Animation ? <div className="flex flex-col">
          {showSigmaImage &&
            <div className="flex bg-radial-[20px] from-blue-400 via-black/80 to-transparent flex-col gap-4">
              <span className="overflow-hidden 
               
               flex justify-center items-center
                h-[500px] relative" >
                <motion.img
                  initial={{ opacity: 0, top: "10%" }}
                  animate={{ opacity: 1, top: "-0%" }}
                  transition={{ duration: 1, ease: "easeIn" }}
                  className="absolute -top-1/2  bg-radial-[0px] from-blue-400 via-black/80 to-transparent " src="/sigma.jpg" />
              </span>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
              >
                <BlurText
                  text="I am midsane"
                  delay={0}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={() => { setStartScrolling(true) }}
                  className="md:text-5xl text-3xl xl:text-6xl mb-28"
                />
              </motion.div>
            </div>}

          {showSigmaImage &&
            <>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2  sm:top-28 sm:right-28">
                <CircularText
                  radius={80}
                  text="Full*Stack*Web*Dev"
                  onHover="speedUp"
                  spinDuration={20}
                  className="custom-class"
                />
              </div>
              <motion.div
                initial={{ bottom: -500, opacity: 1 }}
                animate={{ bottom: 0, opacity: 0 }}
                transition={{ duration: 2 }}

                className="
                bg-radial-[500px] bg-black from-blue-400 via-black/80 to-transparent
                p-2 sm:p-10 absolute left-0  "
              >

                <img src="/aeroplane1.jpg" />
              </motion.div> </>}
          {!showSigmaImage &&
            <motion.div>

              <BlurText
                text="I am midsane"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={() => { }}
                className="md:text-7xl text-3xl xl:text-8xl mb-8"
              />
            </motion.div>

          }
        </div>

          :

          <div className="flex justify-center items-center flex-col gap-4">
            <SlideCharsText
              onAnimationEnd={() => {
                setTimeout(() => {
                  setStartText2Animation(true)
                }, 700);
              }}
              text={"Hey There !"} />
            <SlideCharsText
              onAnimationEnd={() => {
                setTimeout(() => {
                  setStartText2Animation(true)
                }, 700);
              }}
              text={"Welcome to my website"} />
          </div>
        }

      </div>
      <motion.span
        initial={{ y: 0, rotate: 0 }}
        animate={{
          top: yValues,
          rotate: [0, -3, 7, -6, 5, 0, 0, 0],
          opacity: [1, 1, 1, 1, 1, 1, 1, 0]
        }}
        onAnimationComplete={() => setIsAnimating(false)}
        transition={{
          duration: 2,
          times: [0, 0.25, 0.4, 1],
          ease: "easeInOut",
          rotate: {
            duration: 2,
            delay: 1,
            repeat: 0,
            ease: "easeInOut",
          },
        }}
        style={{
          display: "inline-block",
          fontSize: "2rem",
        }}

        className="fixed sm:overflow-hidden sm:h-[420px] right-1/2 translate-x-1/2" >
        <img src="/spiderman-hero.png" />
      </motion.span>
    </div>

  </section>

}
