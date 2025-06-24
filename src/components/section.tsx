import { motion } from "framer-motion"
import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { SlideCharsText } from "./text-animation";

export const Section = ({ id, upperpad = false, dark = false, noTitle = false, title, children }: ({ id: string, upperpad?: boolean, dark?: boolean, noTitle?: boolean, title?: string, children: ReactNode })) => {
    const [startAnimation, setStartAnimation] = useState(false);
    const scrollRef = useRef(null)
    return <motion.section
        id={id}
        initial={{ opacity: 1, scale: 1.3, rotate: 3, y: -200 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
        viewport={{ once: true, root: scrollRef }}
        transition={{ duration: 1.2 }}
        className={`${dark ? "text-white bg-black" : "text-black bg-white"} ${upperpad && "pt-20"} border-t sm:px-10 px-4  md:px-20 flex gap-10 justify-center flex-col  items-center border-stone-900 h-dvh w-full `} >
        {!noTitle && title && <motion.span
            onViewportEnter={() => setStartAnimation(true)}
        >
            {startAnimation && <SlideCharsText dark={!dark} text={title} />}
        </motion.span>}

        {children}

    </motion.section>
}