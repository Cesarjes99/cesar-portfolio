import "./App.css";
import Header from "./components/Header/Header";
import PhotoSection from "./components/photo-section/PhotoSection";
import AboutMe from "./components/about-me-section/AboutMe";
import ProjectsSection from "./components/projects-section/ProjectsSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <PhotoSection />
        <AboutMe />
        <ProjectsSection />
      </main>
    </>
  );
}

export default App;
