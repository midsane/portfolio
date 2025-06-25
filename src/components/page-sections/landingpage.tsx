import { motion } from "framer-motion"
import { SplitText } from "../SplitText/SplitText"
import { useEffect, useState } from "react";
import { BlurText } from "../BlurText/BlurText";
import { ArrowUp } from "lucide-react";
import { CircularText } from "../CircularText/CircularText";

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
      if (window.innerWidth < 640) {
        setYValues([-300, -270, -260, 1000]);
      } else if (window.innerWidth < 1024) {

        setYValues([-400, -370, -360, 900]);
      } else {

        setYValues([-430, -400, -390, 800]);
      }
    };

    updateY();
    window.addEventListener("resize", updateY);
    return () => window.removeEventListener("resize", updateY);
  }, []);

  return <section className={`bg-black overflow-hidden relative h-screen px-20 w-full flex justify-center items-center`} >
    {startScrolling &&
      <motion.div
        initial={{ y: 10, opacity: 0 }}

        animate={{ opacity: [1, 1, 1, 1, 1, 1, 0], y: [0, 15, 0, 15, 0, 15, 0] }}
        transition={{
          duration: 2,
          times: [0, 0.14, 0.28, 0.44, 0.60, 0.74, 0.88, 1],
          ease: "easeIn"
        }}
        className="w-fit z-50 fixed bottom-10 
        bg-black
        right-5 p-2 m-auto max-[400px]:mb-20 border border-white/40 rounded-full" ><ArrowUp fill="white" />
        <p className="absolute text-emerald-500 -bottom-7 -translate-x-1/2 w-20 text-sm left-1/2 text-center" >scroll down</p>
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
          duration: 2,
          times: [0, 0.5, 0.7, 1],
          ease: "easeInOut",
        }}
        className={`absolute bg-white z-30  left-0 h-1/2 w-full`}>

      </motion.div>
      <motion.div
        initial={{ bottom: 0 }}
        animate={{
          bottom: [0, -100, -100, -1000]
        }}
        onAnimationComplete={() => setIsAnimating(true)}
        transition={{
          duration: 2,
          times: [0, 0.5, 0.7, 1],
          ease: "easeInOut",
        }}
        className={`absolute bg-white z-30 left-0 h-1/2 w-full`}>

      </motion.div>
    </>}
    <div className="absolute bg-black z-20 top-0 left-0 h-full w-full justify-center items-center flex" >
      <div className=" px-16 rounded w-full sm:w-1/2 h-full flex justify-center items-center sm:h-1/2" >

        {startText2Animation ? <div className="flex flex-col">
          {showSigmaImage &&
            <div className="flex flex-col gap-4">
              <span className="overflow-hidden h-[500px] relative" >
                <motion.img
                  initial={{ opacity: 0, top: "10%" }}
                  animate={{ opacity: 1, top: "-0%" }}
                  transition={{ duration: 1, ease: "easeIn" }}
                  className="absolute -top-1/2" src="/sigma.jpg" />
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

                className="absolute left-0"
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
          <SplitText
            text="Hey There !, Welcome to my website"
            className="md:text-7xl text-2xl xl:text-8xl font-semibold text-center"
            delay={40}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={() => {
              setTimeout(() => {
                setStartText2Animation(true)
              }, 550);
            }}
          />
        }

      </div>
      <motion.span
        initial={{ y: 0, rotate: 0 }}
        animate={{
          y: yValues,
          rotate: [0, -3, 7, -6, 5, 0, 0, 0],
          opacity: [1, 1, 1, 1, 1, 1, 1, 0]
        }}
        onAnimationComplete={() => setIsAnimating(false)}
        transition={{
          duration: 2,
          times: [0, 0.25, 0.75, 1],
          ease: "easeInOut",
          rotate: {
            duration: 5,
            delay: 1,
            repeat: 0,
            ease: "easeInOut",
          },
        }}
        style={{
          display: "inline-block",
          fontSize: "2rem",
        }}

        className="fixed sm:overflow-hidden  sm:h-[420px]  right-1/2 translate-x-1/2" >
        <img src="/spiderman-hero.png" />
      </motion.span>
    </div>

  </section>

}
