import ProjectCard from "../project-card/ProjectCard";
import "./projects-section.css";
import AMVIdesktop from "../../assets/AMVI-desktop.png";
import SpameDesktop from "../../assets/spame-desktop.png";
import Github from "../../assets/github-logo.jpg";

function ProjectsSection() {
  return (
    <section>
      <h2>Projects</h2>
      <div className="projects">
        <ProjectCard
          img={AMVIdesktop}
          title={"AMVI – Carpooling Web Platform"}
          description={
            "A responsive marketing website for AMVI, a carpooling and ride-sharing platform."
          }
        />
        <ProjectCard
          img={SpameDesktop}
          title={"SPAME – Business Website Redesign & Front-End Development"}
          description={
            "Collaborated on the SPAME website to enhance layout responsiveness, modernize UI components, and optimize the front-end experience using clean HTML/CSS and JavaScript improvements."
          }
        />
        <ProjectCard
          img={Github}
          title={"Personal Projects — GitHub Playground"}
          description={
            "A collection of small interactive projects and experiments built while learning JavaScript, React, and modern web development. These mini-apps show my growth, curiosity, and hands-on practice with real code"
          }
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
