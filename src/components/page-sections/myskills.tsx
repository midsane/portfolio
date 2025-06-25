
import { IconButton, Tooltip } from "@mui/material"
import { skillIcons, skillText } from "../../constant"
import { Section } from "../section"
import { motion } from "framer-motion"

export const MySkills = () => {
    return (<Section id="my-skills" title="My Skills!">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="border border-stone-900 justify-center rounded sm:mr-0 mr-1 p-0 sm:p-10 w-fit flex flex-wrap gap-3 sm:gap-4" >
            {skillIcons.map((path, i) =>
                <Tooltip key={i} placement="top" arrow title={skillText[i]}>
                    <IconButton>
                        <img src={path} className="h-10" />
                    </IconButton>
                </Tooltip>
            )}
        </motion.div>
    </Section>
    )
}