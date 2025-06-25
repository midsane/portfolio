import { motion } from "framer-motion"
import { Dock } from "../Dock/Dock"
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
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="fixed z-50 left-1/2 -translate-x-1/2 bottom-3" >
        <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
        />
    </motion.div>)
}