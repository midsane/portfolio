import { motion } from "framer-motion"
import { useState } from "react";
import type { ReactNode } from "react";
import { SlideCharsText } from "./text-animation";

export const Section = ({ id, upperpad=false, dark = false, noTitle = false, title, children }: ({ id: string, upperpad?:boolean,  dark?: boolean, noTitle?: boolean, title?: string, children: ReactNode })) => {
    const [startAnimation, setStartAnimation] = useState(false);
    return <motion.section
        id={id}
        initial={{ opacity: 1, rotate: 2, scale: 1.3, y: -50 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}

        className={`${dark ? "text-white bg-black" : "text-black bg-white"} ${upperpad && "pt-20"} border-t sm:px-10 px-4  md:px-20 flex gap-10 justify-center flex-col  items-center border-stone-900 h-dvh w-full `} >
        {!noTitle && title && <motion.span
            onViewportEnter={() => setStartAnimation(true)}
            onViewportLeave={() => setStartAnimation(false)}
            viewport={{ once: false, amount: 0.5 }}
        >
            {startAnimation && <SlideCharsText dark={!dark} text={title} />}
        </motion.span>}

        {children}

    </motion.section>
}