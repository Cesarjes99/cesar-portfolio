import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import PhotoSection from "./components/photo-section/PhotoSection";
import AboutMe from "./components/about-me-section/AboutMe";
import ProjectsSection from "./components/projects-section/ProjectsSection";
import ResumeModal from "./components/resume-modal/ResumeModal";

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <>
      <Header onResumeClick={openResumeModal} />
      <main>
        <PhotoSection />
        <AboutMe />
        <ProjectsSection />
      </main>
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
    </>
  );
}

export default App;
