import { useState } from "react";
import ProjectCard from "../project-card/ProjectCard";
import GamesModal from "../games-modal/GamesModal";
import "./projects-section.css";
import AMVIdesktop from "../../assets/AMVI-desktop.png";
import AlcemaDesktop from "../../assets/alcema-desktop.png";
import Github from "../../assets/github-logo.jpg";

function ProjectsSection() {
  const [isGamesModalOpen, setIsGamesModalOpen] = useState(false);

  const openGamesModal = () => {
    setIsGamesModalOpen(true);
  };

  const closeGamesModal = () => {
    setIsGamesModalOpen(false);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects">
        <ProjectCard
          key={1}
          link={"https://www.amvi.app/"}
          img={AMVIdesktop}
          title={"AMVI – Carpooling Web Platform"}
          description={
            "A responsive marketing website for AMVI, a carpooling and ride-sharing platform."
          }
        />
        <ProjectCard
          key={2}
          link={"https://www.alcema.com/"}
          img={AlcemaDesktop}
          title={"ALCEMA – Organic & Sustainable Agriculture Landing Page"}
          description={
            "Informative landing page I built from scratch on my own—from design to deployment. For an organic and sustainable agriculture business in Sonora."
          }
        />
        <ProjectCard
          key={3}
          link={"https://github.com/Cesarjes99"}
          img={Github}
          title={"Personal Projects — GitHub Playground"}
          description={
            "A collection of small interactive projects and experiments built while learning JavaScript, React, and modern web development. These mini-apps show my growth, curiosity, and hands-on practice with real code"
          }
          onClick={openGamesModal}
        />
      </div>
      <GamesModal isOpen={isGamesModalOpen} onClose={closeGamesModal} />
    </section>
  );
}

export default ProjectsSection;
