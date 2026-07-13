import { Footer } from "./components/footer"
import { LandingPage } from "./components/landingpage"
import { Navigation } from "./components/navigation"
import { SelectedProjects } from "./components/projects"
import { ThemeProvider } from "./components/ui/theme-provider"
import { WorkExp } from "./components/workExp"
function App() {

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <LandingPage />
      <SelectedProjects />
      <WorkExp />
      <Footer />
      <Navigation />
    </ThemeProvider>
  )
}

export default App
