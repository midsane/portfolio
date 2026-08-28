import { Footer } from "./components/footer"
import { LandingPage } from "./components/landingpage"
import { Navigation } from "./components/navigation"
import { SelectedProjects } from "./components/projects"
import { ThemeProvider } from "./components/ui/theme-provider"
import { Divider } from "./components/ui/kit"
import { WorkExp } from "./components/workExp"

function App() {

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <Navigation />
      <main className="mx-auto max-w-5xl border-x border-border/60">
        <LandingPage />
        <Divider />
        <SelectedProjects />
        <Divider />
        <WorkExp />
        <Divider />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default App
