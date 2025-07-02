import { motion } from "framer-motion";

export function HamburgerIcon({ onClick, isOpen, setIsOpen }: { 
    isOpen: boolean, setIsOpen: (open: boolean) => void,
    onClick?: () => void }) {
  const toggle = () => {
    setIsOpen(!isOpen);
    onClick?.();
  };

  const lineProps = {
    stroke: "white",
    strokeWidth: 2.5,
    strokeLinecap: "round" as const,
    transition: { duration: 0.4, ease: "easeInOut" },
  };

  return (
    <motion.svg
    
      viewBox="0 0 24 24"
      onClick={toggle}
      className="cursor-pointer aspect-square h-8
       sm:h-10 rounded-sm fixed top-5 border
        border-white/20   left-5 z-50"
    >
      {/* Top Line */}
      <motion.g
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 6 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ transformOrigin: "center" }}
      >
        <line x1="4" y1="6" x2="20" y2="6" {...lineProps} />
      </motion.g>

      {/* Middle Line */}
      <motion.g
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <line x1="4" y1="12" x2="20" y2="12" {...lineProps} />
      </motion.g>

      {/* Bottom Line */}
      <motion.g
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ transformOrigin: "center" }}
      >
        <line x1="4" y1="18" x2="20" y2="18" {...lineProps} />
      </motion.g>
    </motion.svg>
  );
}
