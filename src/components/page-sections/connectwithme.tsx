import { Github, Linkedin, Twitter } from "lucide-react"
import { Section } from "../section"
import { motion } from "framer-motion"

export const ConnectWithMe = () => {
    return (<Section id="connect" upperpad dark title="Connect With Me!">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="p-1  bg-radial-[500px] bg-black from-blue-400 via-black/80 to-transparent  border-white/30 rounded w-full sm:w-1/4 md:w-1/6 h-fit "
        >
            <img src="/thened.jpg" />

        </motion.div>

        <motion.div className="absolute flex mb-32 mr-8 sm:mb-20 z-40 gap-10 " >
            <a className="no-underline text-inherit outline-none focus:ring-0" target="_blank" href="https://x.com/no_more_mid"><Twitter color="white" fill="white" className="cursor-pointer hover:scale-110 duration-100 ease-in" /></a>
            <a target="_blank" href="https://github.com/midsane"><Github fill="white" className="cursor-pointer hover:scale-110 duration-100 ease-in" color="white" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/aditya-raj-846018294/"><Linkedin fill="white" className="cursor-pointer hover:scale-110 duration-100 ease-in" color="white" /></a>
        </motion.div>

        <p className="text-sm fixed opacity-70 left-1 bottom-1 text-gray-400">© Midsane</p>
    </Section>)
}