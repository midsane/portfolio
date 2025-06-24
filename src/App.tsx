import { motion } from "framer-motion"
import { LandingPage } from "./components/ScrollFloat/landingpage";
import { Book, ExternalLinkIcon, Github, GithubIcon, Linkedin, Presentation, Signal, Twitter, UserRound } from "lucide-react";
import { Section } from "./components/section";
import { IconButton, Tooltip } from "@mui/material";
import { projectsData, skillIcons, skillText } from "./constant";
import { Dock } from "./components/Dock/Dock";
import { Carousel } from "./components/Carousel/Carousel";



export default function App() {
  const items = [
    { icon: <a href="#about-me" ><UserRound color="white" size={15} /></a>, label: 'About me', onClick: () => { } },
    { icon: <a href="#my-projects" ><Presentation color="white" size={15} /></a>, label: 'Projects', onClick: () => { } },
    { icon: <a href="#my-skills" ><Book color="white" size={15} /></a>, label: 'Skills', onClick: () => { } },
    { icon: <a href="#connect" ><Signal color="white" size={15} /></a>, label: 'Connect', onClick: () => { } },
  ];


  return <main className="overflow-hidden w-dvw bg-black">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="fixed z-50 left-1/2 -translate-x-1/2 bottom-3" >
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </motion.div>
    <LandingPage />
    <Section id="about-me" title="About Me!">
      <div className="flex-col sm:flex-row  flex  justify-center items-center gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="p-1 border-white/30 rounded w-1/6 h-fit "
        >
          <img src="/rin.jpeg" />

        </motion.div>

        <p className="text-2xl text-black" >Pre-final year full-stack dev building clean, scalable web apps with React, Node, and Prisma. Currently working on TubeSpace, a YouTuber One Click Upload Automation. Exploring GenAI, blockchain, and real-world tech like Docker, gRPC & Kubernetes. Let’s make web dev cool again.
        </p>
      </div>
    </Section>

    <Section id="my-projects" upperpad dark title="My Projects!">
      <div className="border max-[450px]:pt-44 border-stone-900 w-full  overflow-y-scroll sm:overflow-y-hidden sm:overflow-x-scroll justify-center items-center rounded p-10 flex sm:flex-row flex-col gap-10" >
        {projectsData.map((data, ind) => <Project {...data} key={ind} />)}
      </div>
    </Section>

    <Section id="my-skills" title="My Skills!">
      <div className="border border-stone-900 justify-center rounded sm:mr-0 mr-3 p-0 sm:p-10 w-fit flex flex-wrap gap-3 sm:gap-4" >
        {skillIcons.map((path, i) =>
          <Tooltip key={i} placement="top" arrow title={skillText[i]}>
            <IconButton>
              <img src={path} className="h-10" />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Section>

    <Section id="connect" upperpad dark title="Connect Wit Me!">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="p-1  border-white/30 rounded w-full sm:w-1/4 md:w-1/6 h-fit "
      >
        <img src="/thened.jpg" />

      </motion.div>

      <motion.div className="absolute flex mb-32 mr-8 sm:mb-20 z-40 gap-10 " >
        <a className="no-underline text-inherit outline-none focus:ring-0" target="_blank" href="https://x.com/no_more_mid"><Twitter color="white" fill="white" className="cursor-pointer hover:scale-110 duration-100 ease-in" /></a>
        <a target="_blank" href="https://github.com/midsane"><Github fill="white" className="cursor-pointer hover:scale-110 duration-100 ease-in" color="white" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/aditya-raj-846018294/"><Linkedin fill="white" className="cursor-pointer hover:scale-110 duration-100 ease-in" color="white" /></a>
      </motion.div>
    </Section>
  </main>
}


const Project = ({ name, description, tech, imgLinks, githubLink, liveLink }:
  ({ name: string, description: string, tech: string[], imgLinks: string[], githubLink: string, liveLink: string })) => {
  return <div className="flex max-[450px]:flex-col sm:flex-col gap-6 sm:gap-10" >
    <Carousel images={imgLinks} />
    <div className="flex flex-col gap-3 justify-center items-start w-full">
      <span className="flex justify-between items-center w-full" >
        <h3 className="text-xl sm:text-2xl ">{name}</h3>
        <div className="flex w-fit gap-2" >
          <a target="_blank" href={githubLink}>
            <GithubIcon size={15} />
          </a>
          <a target="_blank" href={liveLink}>
            <ExternalLinkIcon href={liveLink} size={15} />
          </a>

        </div>
      </span>
      <p className="sm:text-lg opacity-75" >{description}</p>
    </div>
  </div>
}

