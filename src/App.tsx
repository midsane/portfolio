import { AboutMe } from "./components/page-sections/aboutme";
import { ConnectWithMe } from "./components/page-sections/connectwithme";
import { LandingPage } from "./components/page-sections/landingpage";
import { MyProjects } from "./components/page-sections/my-projects";
import { MySkills } from "./components/page-sections/myskills";
import { NavigationDock } from "./components/page-sections/navigation-dock";


export default function App() {

  return (
    <main className="overflow-hidden overflow-x-hidden w-screen bg-black">
      <NavigationDock />
      <LandingPage />
      <AboutMe />
      <MyProjects />
      <MySkills />
      <ConnectWithMe />
    </main>
  )
}



