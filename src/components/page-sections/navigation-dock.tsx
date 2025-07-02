import { motion } from "framer-motion"
import { Book, Presentation, Signal, UserRound } from "lucide-react";


export const NavigationDock = () => {

    const items = [
        {
            icon: <UserRound color="white" size={15} />,
            label: 'About me',
            onClick: () => {
                document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' });
            },
        },
        {
            icon: <Presentation color="white" size={15} />,
            label: 'Projects',
            onClick: () => {
                document.getElementById('my-projects')?.scrollIntoView({ behavior: 'smooth' });
            },
        },
        {
            icon: <Book color="white" size={15} />,
            label: 'Skills',
            onClick: () => {
                document.getElementById('my-skills')?.scrollIntoView({ behavior: 'smooth' });
            },
        },
        {
            icon: <Signal color="white" size={15} />,
            label: 'Connect',
            onClick: () => {
                document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
            },
        },
    ];

    return (<motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.4 }}
        className="fixed z-50 top-5 bg-black flex gap-2 left-16 sm:left-20 lg:left-24 border  rounded-sm border-white/20 justify-center items-center" >
        {items.map((item, index) => (
            <motion.div
                key={index}
                className="flex items-center gap-2 mb cursor-pointer hover:bg-stone-900/10 p-2 rounded"
                onClick={item.onClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {item.icon}
                <span className="text-sm sm:block hidden">{item.label}</span>
            </motion.div>
        ))}
    </motion.div>)
}