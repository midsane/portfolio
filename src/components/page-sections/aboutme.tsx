
import { Section } from "../section"
import { motion } from "framer-motion"

export const AboutMe = () => {
    return (<Section id="about-me" title="About Me!">
        <div className="flex-col flex  justify-center px-6 md:px-20 items-center gap-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
                className="p-1 border-white/30 rounded max-[330px]:w-1/4 sm:w-1/6 w-1/3 h-fit "
            >
                <img src="/rin.jpeg" />

            </motion.div>

            <p className="text-2xl text-black" >Pre-final year full-stack dev building clean, scalable
                web apps with React, Node, and Prisma. Currently working on TubeSpace, a
                YouTuber One Click Upload Automation. Exploring GenAI, blockchain, and real-world
                tech like Docker, gRPC & Kubernetes. <span className="text-emerald-500" >Let’s make web dev cool again.</span>
            </p>
        </div>
    </Section>)
}