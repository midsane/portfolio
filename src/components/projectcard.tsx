import { ExternalLinkIcon, GithubIcon, XIcon } from "lucide-react"
import { Carousel } from "./Carousel/Carousel"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export const Project = ({ name, description, imgLinks, githubLink, liveLink }:
  ({ name: string, description: string, imgLinks: string[], githubLink: string, liveLink: string })) => {

  const [enlarge, setEnlarge] = useState(false);

  useEffect(() => {

    if (!enlarge) document.body.style.overflow = '';
    else document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [enlarge]);

  return (<>
    <AnimatePresence>
      {enlarge && <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 200 }}
        transition={{ duration: 0.3 }}
        className="bg-stone-900 fixed top-0 left-0 h-screen w-screen z-[100]" >
        <motion.div
          onClick={() => setEnlarge(false)} className="absolute top-5 border p-1 rounded-full border-white/30 bg-stone-700 cursor-pointer hover:scale-110 duration-75 ease-in left-1/2 -translate-x-1/2" >
          <XIcon />
        </motion.div>
      </motion.div>}
    </AnimatePresence>
    <AnimatePresence>
      {enlarge ? <motion.div
        key="expanded"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        className={`${enlarge ? "px-16 sm:px-28 fixed top-1/2 left-1/2 z-[200] flex flex-col gap-5 justify-center items-center -translate-x-1/2 -translate-y-1/2 scale-[2]" : "flex md:flex-col gap-6 max-[450px]:gap-3 md:gap-10"} `} >
        <div className="w-fit " ><Carousel images={imgLinks} /></div>
        <div className="flex flex-col gap-2 justify-center items-start w-full">
          <span className="flex justify-between items-center w-full" >
            <h3 className={`${!enlarge ? "max-[450px]:text-sm text-xl md:text-2xl " : "text-lg"}`}>{name}</h3>
            <div className="flex w-fit gap-1" >
              <a target="_blank" href={githubLink}>
                <GithubIcon color="white" size={15} />
              </a>
              <a target="_blank" href={liveLink}>
                <ExternalLinkIcon color="white" size={15} />
              </a>

            </div>
          </span>
          <p className={`${enlarge ? "text-xs sm:text-sm" : "max-[450px]:text-xs  md:text-lg"} opacity-75`} >{description}</p>
        </div>
      </motion.div> :
        <motion.div
          key="shrinked"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, y: -100 }}
          onClick={() => setEnlarge(true)}
          className={`${enlarge ? "px-16 sm:px-28 fixed top-1/2 left-1/2 z-[200] flex flex-col gap-5 justify-center items-center -translate-x-1/2 -translate-y-1/2 scale-[2]" : "flex cursor-pointer md:flex-col gap-6 max-[450px]:gap-3 md:gap-10"} `} >
          <div className="w-fit " ><Carousel images={imgLinks} /></div>
          <div className="flex flex-col gap-2 justify-center items-start w-full">
            <span className="flex justify-between items-center w-full" >
              <h3 className={`${!enlarge ? "max-[450px]:text-sm text-xl md:text-2xl " : "text-lg"}`}>{name}</h3>
              <div className="flex w-fit gap-1" >
                <a target="_blank" href={githubLink}>
                  <GithubIcon color="white" size={15} />
                </a>
                <a target="_blank" href={liveLink}>
                  <ExternalLinkIcon color="white" size={15} />
                </a>

              </div>
            </span>
            <p className={`${enlarge ? "text-xs sm:text-sm" : "max-[450px]:text-xs  md:text-lg"} opacity-75`} >{description}</p>
          </div>
        </motion.div>}
    </AnimatePresence>
  </>)
}
