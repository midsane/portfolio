
import { motion } from "framer-motion"


export function SlideCharsText({ dark = false, text, onAnimationEnd = () => { } }: { onAnimationEnd?: () => any, dark?: boolean, text: string }) {
    return (
        <div className={`${dark ? "text-white" : "text-white"} text-4xl md:text-6xl font-semibold `}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    onAnimationComplete={onAnimationEnd}
                    transition={{ delay: i * 0.005, duration: 0.4, type: "spring", stiffness: 100 }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </div>
    )
}
