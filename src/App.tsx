import { useState } from "react";
import { HamburgerIcon } from "./components/hamburger";
import { AboutMe } from "./components/page-sections/aboutme";
import { ConnectWithMe } from "./components/page-sections/connectwithme";
import { LandingPage } from "./components/page-sections/landingpage";
import { MyProjects } from "./components/page-sections/my-projects";
import { MySkills } from "./components/page-sections/myskills";
import { NavigationDock } from "./components/page-sections/navigation-dock";
import { AnimatePresence } from "framer-motion";


export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <main className="overflow-hidden 
    bg-radial-[600px] bg-black from-blue-400 via-black/80 to-transparent overflow-x-hidden w-screen">
      <HamburgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
       <AnimatePresence>
        {isOpen && <NavigationDock />}
       </AnimatePresence>
      <LandingPage />
      <AboutMe />
      <MyProjects />
      <MySkills />
      <ConnectWithMe />
    </main>
  )
}



