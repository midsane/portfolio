
import { Section } from "../section"
import { motion } from "framer-motion"

export const AboutMe = () => {
    return (<Section dark id="about-me" title="About Me!">
        <div className="flex-col flex justify-center items-center gap-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
                className="p-1
                bg-radial-[60px] lg:bg-radial-[140px] bg-black from-blue-400 via-black/80 to-transparent
                border-white/30 rounded max-[330px]:w-1/4 sm:w-1/6 w-1/3 h-fit "
            >
                <img src="/rin.png" />

            </motion.div>

            <p className="sm:text-2xl md:px-32 sm:px-10 text-white/90" >Pre-final year full-stack dev building clean, scalable
                web apps with React, Node, and Prisma. Currently working on TubeSpace, a
                YouTuber One Click Upload Automation. Exploring GenAI, blockchain, and real-world
                tech like Docker, gRPC & Kubernetes. <span className="text-emerald-500" >Let’s make web dev cool again.</span>
            </p>
        </div>
    </Section>)
}