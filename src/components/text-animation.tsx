
import { motion } from "framer-motion"


export function SlideCharsText({dark=false, text }: {dark?:boolean, text: string }) {
    return (
        <div className={`${dark ? "text-black": "text-white"} text-4xl md:text-6xl font-semibold `}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.6, type: "spring", stiffness: 100 }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </div>
    )
}
