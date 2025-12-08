import { useState } from "react";
import "./header.css";
import hamburgerMenu from "../../assets/hamburger-menu.png";

function Header({ onResumeClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    // Cerrar el menú después de hacer clic en un enlace
    setIsMenuOpen(false);
  };

  const handleAboutClick = () => {
    scrollToSection("about");
  };

  const handleProjectsClick = () => {
    scrollToSection("projects");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-title">
        <h1>CESAR LARRINAGA</h1>
        <h2>WEB & MOBILE DEVELOPER WITH ENGINEERING BACKGROUND</h2>
      </div>
      <button
        className="hamburger-button"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <img src={hamburgerMenu} alt="Menu" />
      </button>
      <nav className={isMenuOpen ? "nav-open" : ""}>
        <button onClick={handleAboutClick}>About</button>
        <button onClick={handleProjectsClick}>Projects</button>
        <button className="resume-button" onClick={onResumeClick}>
          Resume
        </button>
      </nav>
    </header>
  );
}

export default Header;
