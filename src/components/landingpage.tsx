import { Hero } from "./hero";
import { motion } from "framer-motion";

export const LandingPage = () => {
  return (
    <div className="relative isolate min-h-screen w-full overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          background: `radial-gradient(circle at 20% 30%, rgba(255,0,128,0.15), transparent 20%),
                       radial-gradient(circle at 80% 70%, rgba(0,200,255,0.15), transparent 20%)`,
          filter: "blur(60px)",
        }}
      />

      <Hero />
    </div>
  );
};
