import { projectsData } from "../../constant"
import { Project } from "../projectcard"
import { Section } from "../section"
import { motion } from "framer-motion"

export const MyProjects = () => {
    return (<Section id="my-projects" dark title="My Projects!">
        <>
            <p className="px-2 sm:text-2xl text-white/90" >To know more about the project, click on it to enlarge it!!</p>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
                className=" max-[450px]:5px  border-stone-900 w-full md:justify-center md:overflow-x-scroll  overflow-hidden  rounded p-4 md:p-10 flex md:flex-row flex-col gap-10" >
                {projectsData.map((data, ind) => <Project {...data} key={ind} />)}
            </motion.div>
        </>
    </Section>)
}