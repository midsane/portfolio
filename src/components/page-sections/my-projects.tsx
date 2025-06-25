import { projectsData } from "../../constant"
import { Project } from "../projectcard"
import { Section } from "../section"
import { motion } from "framer-motion"

export const MyProjects = () => {
    return (<Section id="my-projects"  dark title="My Projects!">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="border max-[450px]:5px border-stone-900 w-full md:justify-center md:overflow-x-scroll  overflow-hidden  rounded p-4 md:p-10 flex md:flex-row flex-col gap-10" >
            {projectsData.map((data, ind) => <Project {...data} key={ind} />)}
        </motion.div>
    </Section>)
}